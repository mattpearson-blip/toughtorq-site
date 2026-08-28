"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";

type QuoteItem = {
  id: string;
  product: string;
  model?: string;
  quantity: number;
};

const STORAGE_KEY = "toughtorq-quote-cart";

function createItemId(product: string, model?: string) {
  return `${product.trim()}::${model?.trim() || ""}`;
}

export default function QuoteCart() {
  const searchParams = useSearchParams();

  const [items, setItems] = useState<QuoteItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [addedFromUrl, setAddedFromUrl] = useState(false);

  /*
   * LOAD EXISTING CART
   */
  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);

      if (savedCart) {
        const parsed = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (error) {
      console.error("Unable to load quote cart:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  /*
   * ADD ITEM FROM URL
   *
   * Supports:
   * ?model=MC89&product=Portable Valve Actuator Systems
   *
   * AND:
   * ?product=PVA Torque Limiter
   */
  useEffect(() => {
    if (!loaded || addedFromUrl) {
      return;
    }

    const product = searchParams.get("product")?.trim() || "";
    const model = searchParams.get("model")?.trim() || "";

    if (!product && !model) {
      setAddedFromUrl(true);
      return;
    }

    const productName = product || model;
    const itemId = createItemId(productName, model || undefined);

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === itemId);

      if (existingItem) {
        return currentItems;
      }

      return [
        ...currentItems,
        {
          id: itemId,
          product: productName,
          model: model || undefined,
          quantity: 1,
        },
      ];
    });

    setAddedFromUrl(true);
  }, [loaded, addedFromUrl, searchParams]);

  /*
   * SAVE CART
   */
  useEffect(() => {
    if (!loaded) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Unable to save quote cart:", error);
    }
  }, [items, loaded]);

  function updateQuantity(id: string, quantity: number) {
    if (quantity < 1) {
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function removeItem(id: string) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalQuantity = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const quoteSummary = useMemo(() => {
    if (items.length === 0) {
      return "No products selected.";
    }

    return items
      .map((item, index) => {
        const modelText = item.model ? ` | Model: ${item.model}` : "";

        return `${index + 1}. ${item.product}${modelText} | Qty: ${
          item.quantity
        }`;
      })
      .join("\n");
  }, [items]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (items.length === 0) {
      event.preventDefault();
      window.alert("Please add at least one product to your quote request.");
    }
  }

  if (!loaded) {
    return (
      <div className="rounded-xl border border-[#dddddd] bg-white p-6">
        <p className="text-sm text-[#666666]">Loading quote cart...</p>
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
              Selected Equipment
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#3f4448]">
              Quote Cart
            </h2>

            <p className="mt-2 text-sm text-[#666666]">
              {totalQuantity} {totalQuantity === 1 ? "item" : "items"} selected
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
                Browse ToughTorq products and select the equipment,
                configuration, or accessory you would like quoted.
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
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#888888]">
                      {item.model ? "Model" : "Product / Accessory"}
                    </p>

                    {item.model && (
                      <p className="mt-1 text-xl font-bold text-[#ed1c24]">
                        {item.model}
                      </p>
                    )}

                    <p
                      className={`font-semibold text-[#3f4448] ${
                        item.model ? "mt-1 text-base" : "mt-1 text-xl"
                      }`}
                    >
                      {item.product}
                    </p>
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
                            Math.max(1, Number(event.target.value) || 1)
                          )
                        }
                        className="mt-1 w-20 rounded-lg border border-[#cccccc] bg-white px-3 py-2 text-sm text-[#333333] outline-none transition focus:border-[#ed1c24]"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
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
          Submit your contact information and application details. ToughTorq
          will review the selected equipment and follow up with pricing and
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

          <input type="hidden" name="_template" value="table" />

          <input
            type="hidden"
            name="_next"
            value="https://toughtorq.com/thank-you"
          />

          <input type="text" name="_honey" className="hidden" />

          <textarea
            name="Selected Equipment"
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
              Application / Additional Information
            </label>

            <textarea
              id="application"
              name="Application / Additional Information"
              rows={5}
              placeholder="Tell us about the application, valve type, bolt size, torque requirements, delivery requirements, or any accessories needed."
              className="mt-2 w-full resize-y rounded-lg border border-[#cccccc] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#ed1c24]"
            />
          </div>

          {/* VISIBLE CART SUMMARY */}
          {items.length > 0 && (
            <div className="rounded-lg border border-[#dddddd] bg-[#f7f7f7] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#777777]">
                Included in Request
              </p>

              <div className="mt-3 space-y-2">
                {items.map((item) => (
                  <div
                    key={`summary-${item.id}`}
                    className="flex justify-between gap-4 text-sm"
                  >
                    <span className="text-[#444444]">
                      {item.model ? (
                        <>
                          <strong>{item.model}</strong> — {item.product}
                        </>
                      ) : (
                        <strong>{item.product}</strong>
                      )}
                    </span>

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