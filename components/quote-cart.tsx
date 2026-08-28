"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";

type QuoteItem = {
  id: string;
  kind: string;
  name: string;
  category?: string;
  model?: string;
  details?: string;
  quantity: number;
};

const STORAGE_KEY = "toughtorq-quote-cart";

/*
|--------------------------------------------------------------------------
| CREATE UNIQUE CART ID
|--------------------------------------------------------------------------
|
| Different models, accessories, services, and products can all coexist.
|
*/

function createItemId({
  kind,
  name,
  category,
  model,
  details,
}: {
  kind: string;
  name: string;
  category?: string;
  model?: string;
  details?: string;
}) {
  return [
    kind,
    name,
    category || "",
    model || "",
    details || "",
  ]
    .map((value) => value.trim().toLowerCase())
    .join("::");
}

/*
|--------------------------------------------------------------------------
| NORMALIZE OLD CART ITEMS
|--------------------------------------------------------------------------
|
| This keeps carts created by the earlier version of the website working.
|
*/

function normalizeStoredItem(item: any): QuoteItem | null {
  if (!item || typeof item !== "object") {
    return null;
  }

  /*
   * NEW CART FORMAT
   */
  if (item.name) {
    const kind = item.kind || "Product";
    const name = String(item.name);
    const category = item.category
      ? String(item.category)
      : undefined;
    const model = item.model
      ? String(item.model)
      : undefined;
    const details = item.details
      ? String(item.details)
      : undefined;

    return {
      id:
        item.id ||
        createItemId({
          kind,
          name,
          category,
          model,
          details,
        }),
      kind,
      name,
      category,
      model,
      details,
      quantity: Math.max(1, Number(item.quantity) || 1),
    };
  }

  /*
   * LEGACY CART FORMAT
   *
   * Old items looked like:
   * {
   *   product: "...",
   *   model: "...",
   *   quantity: 1
   * }
   */
  if (item.product || item.model) {
    const name = String(item.product || item.model);
    const model = item.model
      ? String(item.model)
      : undefined;

    return {
      id: createItemId({
        kind: "Product",
        name,
        model,
      }),
      kind: "Product",
      name,
      model,
      quantity: Math.max(1, Number(item.quantity) || 1),
    };
  }

  return null;
}

export default function QuoteCart() {
  const searchParams = useSearchParams();

  const [items, setItems] = useState<QuoteItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [addedFromUrl, setAddedFromUrl] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | LOAD EXISTING CART
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);

      if (savedCart) {
        const parsed = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          const normalizedItems = parsed
            .map(normalizeStoredItem)
            .filter(
              (item): item is QuoteItem => item !== null
            );

          setItems(normalizedItems);
        }
      }
    } catch (error) {
      console.error("Unable to load quote cart:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  /*
  |--------------------------------------------------------------------------
  | ADD ITEM FROM URL
  |--------------------------------------------------------------------------
  |
  | UNIVERSAL PARAMETER SUPPORT
  |
  | Examples:
  |
  | ?product=Battery Torque Guns
  |
  | ?product=Battery Torque Guns&model=BT10-700
  |
  | ?accessory=PVA Torque Limiter
  |
  | ?service=Calibration
  |
  | ?category=Hydraulic Cylinders
  |
  | ?item=Custom Reaction Arm
  |
  | ?product=Hydraulic Hose&details=20 ft Twin-Line Hose
  |
  | ?product=BT10-700&quantity=2
  |
  */

  useEffect(() => {
    if (!loaded || addedFromUrl) {
      return;
    }

    const category =
      searchParams.get("category")?.trim() || "";

    const product =
      searchParams.get("product")?.trim() || "";

    const accessory =
      searchParams.get("accessory")?.trim() || "";

    const service =
      searchParams.get("service")?.trim() || "";

    const genericItem =
      searchParams.get("item")?.trim() ||
      searchParams.get("name")?.trim() ||
      "";

    const model =
      searchParams.get("model")?.trim() || "";

    const details =
      searchParams.get("details")?.trim() ||
      searchParams.get("description")?.trim() ||
      "";

    const requestedKind =
      searchParams.get("kind")?.trim() ||
      searchParams.get("type")?.trim() ||
      "";

    const requestedQuantity =
      Number(
        searchParams.get("quantity") ||
          searchParams.get("qty") ||
          "1"
      ) || 1;

    /*
     * Nothing to add.
     */
    if (
      !category &&
      !product &&
      !accessory &&
      !service &&
      !genericItem &&
      !model
    ) {
      setAddedFromUrl(true);
      return;
    }

    /*
     * DETERMINE ITEM TYPE
     */
    let kind = requestedKind || "Product";

    if (!requestedKind) {
      if (service) {
        kind = "Service";
      } else if (accessory) {
        kind = "Accessory";
      } else if (
        category &&
        !product &&
        !model &&
        !genericItem
      ) {
        kind = "Tool Category";
      } else if (genericItem) {
        kind = "Item";
      }
    }

    /*
     * DETERMINE DISPLAY NAME
     */
    const name =
      product ||
      accessory ||
      service ||
      genericItem ||
      category ||
      model;

    const normalizedCategory =
      category && category !== name
        ? category
        : undefined;

    const normalizedModel =
      model && model !== name
        ? model
        : undefined;

    const normalizedDetails =
      details || undefined;

    const itemId = createItemId({
      kind,
      name,
      category: normalizedCategory,
      model: normalizedModel,
      details: normalizedDetails,
    });

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === itemId
      );

      /*
       * If the exact item already exists,
       * increase quantity rather than duplicate it.
       */
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity:
                  item.quantity +
                  Math.max(1, requestedQuantity),
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          id: itemId,
          kind,
          name,
          category: normalizedCategory,
          model: normalizedModel,
          details: normalizedDetails,
          quantity: Math.max(
            1,
            requestedQuantity
          ),
        },
      ];
    });

    setAddedFromUrl(true);
  }, [loaded, addedFromUrl, searchParams]);

  /*
  |--------------------------------------------------------------------------
  | SAVE CART
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!loaded) {
      return;
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch (error) {
      console.error("Unable to save quote cart:", error);
    }
  }, [items, loaded]);

  /*
  |--------------------------------------------------------------------------
  | CART ACTIONS
  |--------------------------------------------------------------------------
  */

  function updateQuantity(
    id: string,
    quantity: number
  ) {
    if (quantity < 1) {
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  }

  function removeItem(id: string) {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== id
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  /*
  |--------------------------------------------------------------------------
  | TOTAL QUANTITY
  |--------------------------------------------------------------------------
  */

  const totalQuantity = useMemo(() => {
    return items.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  }, [items]);

  /*
  |--------------------------------------------------------------------------
  | EMAIL QUOTE SUMMARY
  |--------------------------------------------------------------------------
  */

  const quoteSummary = useMemo(() => {
    if (items.length === 0) {
      return "No products or services selected.";
    }

    return items
      .map((item, index) => {
        const lines = [
          `${index + 1}. ${item.name}`,
          `Type: ${item.kind}`,
        ];

        if (item.category) {
          lines.push(
            `Category: ${item.category}`
          );
        }

        if (item.model) {
          lines.push(
            `Model: ${item.model}`
          );
        }

        if (item.details) {
          lines.push(
            `Details: ${item.details}`
          );
        }

        lines.push(
          `Quantity: ${item.quantity}`
        );

        return lines.join(" | ");
      })
      .join("\n");
  }, [items]);

  /*
  |--------------------------------------------------------------------------
  | SUBMIT VALIDATION
  |--------------------------------------------------------------------------
  */

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    if (items.length === 0) {
      event.preventDefault();

      window.alert(
        "Please add at least one product, accessory, service, or category to your quote request."
      );
    }
  }

  /*
  |--------------------------------------------------------------------------
  | LOADING STATE
  |--------------------------------------------------------------------------
  */

  if (!loaded) {
    return (
      <div className="rounded-xl border border-[#dddddd] bg-white p-6">
        <p className="text-sm text-[#666666]">
          Loading quote cart...
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      {/* CART */}
      <section>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Selected Equipment & Services
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#3f4448]">
              Quote Cart
            </h2>

            <p className="mt-2 text-sm text-[#666666]">
              {totalQuantity}{" "}
              {totalQuantity === 1
                ? "item"
                : "items"}{" "}
              selected
            </p>
          </div>

          {items.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="text-left text-sm font-semibold text-[#777777] transition hover:text-[#ed1c24]"
            >
              Clear Cart
            </button>
          )}
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-[#dddddd] bg-white">
          {items.length === 0 ? (
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#3f4448]">
                Your quote cart is empty.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#666666]">
                Add any ToughTorq product,
                tool category, model,
                accessory, component, or
                service to your request.
              </p>

              <Link
                href="/products"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-2 text-sm font-semibold text-white"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-[#e5e5e5]">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:items-center md:p-6"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#ed1c24]">
                      {item.kind}
                    </p>

                    <p className="mt-2 text-xl font-semibold text-[#3f4448]">
                      {item.name}
                    </p>

                    {item.model && (
                      <p className="mt-2 text-sm text-[#555555]">
                        Model:{" "}
                        <strong className="text-[#ed1c24]">
                          {item.model}
                        </strong>
                      </p>
                    )}

                    {item.category && (
                      <p className="mt-1 text-sm text-[#666666]">
                        Category:{" "}
                        {item.category}
                      </p>
                    )}

                    {item.details && (
                      <p className="mt-2 text-sm leading-6 text-[#666666]">
                        {item.details}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <label
                        htmlFor={`quantity-${item.id}`}
                        className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#777777]"
                      >
                        Qty
                      </label>

                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(event) =>
                          updateQuantity(
                            item.id,
                            Math.max(
                              1,
                              Number(
                                event.target.value
                              ) || 1
                            )
                          )
                        }
                        className="mt-1 w-20 rounded-lg border border-[#cccccc] bg-white px-3 py-2 text-sm text-[#333333] outline-none transition focus:border-[#ed1c24]"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(item.id)
                      }
                      className="mt-5 text-sm font-semibold text-[#777777] transition hover:text-[#ed1c24]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5">
          <Link
            href="/products"
            className="text-sm font-semibold text-[#ed1c24]"
          >
            ← Continue Browsing Products
          </Link>
        </div>
      </section>

      {/* REQUEST FORM */}
      <section className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
          Request Pricing
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-[#3f4448]">
          Send Quote Request
        </h2>

        <p className="mt-3 text-sm leading-7 text-[#666666]">
          Submit your contact information
          and application details.
          ToughTorq will review the
          selected products, accessories,
          services, and configurations and
          follow up with pricing and
          availability.
        </p>

        <form
          action="https://formsubmit.co/support@toughtorq.com"
          method="POST"
          onSubmit={handleSubmit}
          className="mt-7 space-y-5"
        >
          <input
            type="hidden"
            name="_subject"
            value="New ToughTorq Quote Request"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_next"
            value="https://toughtorq.com/thank-you"
          />

          <input
            type="text"
            name="_honey"
            className="hidden"
          />

          <textarea
            name="Selected Equipment and Services"
            value={quoteSummary}
            readOnly
            className="hidden"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="text-sm font-semibold text-[#444444]"
              >
                First Name *
              </label>

              <input
                id="firstName"
                name="First Name"
                required
                className="mt-2 w-full rounded-lg border border-[#cccccc] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ed1c24]"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="text-sm font-semibold text-[#444444]"
              >
                Last Name *
              </label>

              <input
                id="lastName"
                name="Last Name"
                required
                className="mt-2 w-full rounded-lg border border-[#cccccc] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ed1c24]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="text-sm font-semibold text-[#444444]"
            >
              Company *
            </label>

            <input
              id="company"
              name="Company"
              required
              className="mt-2 w-full rounded-lg border border-[#cccccc] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ed1c24]"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-[#444444]"
              >
                Email *
              </label>

              <input
                id="email"
                name="Email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-[#cccccc] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ed1c24]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-[#444444]"
              >
                Phone
              </label>

              <input
                id="phone"
                name="Phone"
                type="tel"
                className="mt-2 w-full rounded-lg border border-[#cccccc] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ed1c24]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="application"
              className="text-sm font-semibold text-[#444444]"
            >
              Application / Additional
              Information
            </label>

            <textarea
              id="application"
              name="Application / Additional Information"
              rows={5}
              placeholder="Tell us about the application, equipment, valve type, bolt size, torque requirements, hydraulic requirements, service needed, delivery requirements, or accessories."
              className="mt-2 w-full resize-y rounded-lg border border-[#cccccc] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#ed1c24]"
            />
          </div>

          {/* VISIBLE CART SUMMARY */}
          {items.length > 0 && (
            <div className="rounded-lg border border-[#dddddd] bg-[#f7f7f7] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#777777]">
                Included in Request
              </p>

              <div className="mt-3 space-y-3">
                {items.map((item) => (
                  <div
                    key={`summary-${item.id}`}
                    className="flex justify-between gap-4 border-b border-[#e4e4e4] pb-3 text-sm last:border-b-0 last:pb-0"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#ed1c24]">
                        {item.kind}
                      </p>

                      <p className="mt-1 font-semibold text-[#444444]">
                        {item.name}
                      </p>

                      {item.model && (
                        <p className="mt-1 text-xs text-[#666666]">
                          Model: {item.model}
                        </p>
                      )}

                      {item.category && (
                        <p className="mt-1 text-xs text-[#666666]">
                          Category:{" "}
                          {item.category}
                        </p>
                      )}

                      {item.details && (
                        <p className="mt-1 text-xs text-[#666666]">
                          {item.details}
                        </p>
                      )}
                    </div>

                    <span className="shrink-0 text-[#777777]">
                      Qty {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={items.length === 0}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:bg-[#aaaaaa]"
          >
            Submit Quote Request
          </button>
        </form>
      </section>
    </div>
  );
}