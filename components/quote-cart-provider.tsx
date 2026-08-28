"use client";

import Link from "next/link";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type QuoteCartItem = {
  id: string;
  kind: string;
  name: string;
  category?: string;
  model?: string;
  details?: string;
  quantity: number;
};

type AddQuoteItem = {
  kind?: string;
  name: string;
  category?: string;
  model?: string;
  details?: string;
  quantity?: number;
};

type QuoteCartContextType = {
  items: QuoteCartItem[];
  totalQuantity: number;
  isOpen: boolean;
  addItem: (item: AddQuoteItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const STORAGE_KEY = "toughtorq-quote-cart";

const QuoteCartContext = createContext<QuoteCartContextType | undefined>(
  undefined
);

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
  return [kind, name, category || "", model || "", details || ""]
    .map((value) => value.trim().toLowerCase())
    .join("::");
}

function normalizeStoredItem(item: any): QuoteCartItem | null {
  if (!item || typeof item !== "object") {
    return null;
  }

  /*
   * CURRENT CART FORMAT
   */
  if (item.name) {
    const kind = String(item.kind || "Product");
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
   * Keeps earlier ToughTorq cart data working.
   */
  if (item.product || item.model) {
    const name = String(item.product || item.model);

    const model = item.model
      ? String(item.model)
      : undefined;

    const kind = "Product";

    return {
      id: createItemId({
        kind,
        name,
        model,
      }),
      kind,
      name,
      model,
      quantity: Math.max(1, Number(item.quantity) || 1),
    };
  }

  return null;
}

export function QuoteCartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<QuoteCartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | LOAD CART
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);

      if (savedCart) {
        const parsed = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          const normalized = parsed
            .map(normalizeStoredItem)
            .filter(
              (item): item is QuoteCartItem => item !== null
            );

          setItems(normalized);
        }
      }
    } catch (error) {
      console.error("Unable to load ToughTorq quote cart:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

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
      console.error("Unable to save ToughTorq quote cart:", error);
    }
  }, [items, loaded]);

  /*
  |--------------------------------------------------------------------------
  | LOCK PAGE SCROLL WHEN DRAWER IS OPEN
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /*
  |--------------------------------------------------------------------------
  | CLOSE DRAWER WITH ESCAPE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | CART ACTIONS
  |--------------------------------------------------------------------------
  */

  function addItem({
    kind = "Product",
    name,
    category,
    model,
    details,
    quantity = 1,
  }: AddQuoteItem) {
    const safeQuantity = Math.max(1, quantity);

    const id = createItemId({
      kind,
      name,
      category,
      model,
      details,
    });

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + safeQuantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          id,
          kind,
          name,
          category,
          model,
          details,
          quantity: safeQuantity,
        },
      ];
    });

    /*
     * Every Add to Quote Cart action automatically
     * opens the slide-over drawer.
     */
    setIsOpen(true);
  }

  function removeItem(id: string) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function updateQuantity(id: string, quantity: number) {
    const safeQuantity = Math.max(1, quantity);

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: safeQuantity,
            }
          : item
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  const totalQuantity = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [items]);

  const value: QuoteCartContextType = {
    items,
    totalQuantity,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  };

  return (
    <QuoteCartContext.Provider value={value}>
      {children}

      {/* DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-[90] bg-black/30 transition-opacity duration-200 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* QUOTE CART DRAWER */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Quote cart"
        className={`fixed right-0 top-0 z-[100] flex h-full w-full max-w-[460px] transform flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between border-b border-[#dddddd] px-5 py-5 md:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              ToughTorq
            </p>

            <h2 className="mt-1 text-2xl font-semibold text-[#3f4448]">
              Quote Cart
            </h2>

            <p className="mt-1 text-xs text-[#777777]">
              {totalQuantity}{" "}
              {totalQuantity === 1 ? "item" : "items"} selected
            </p>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close quote cart"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#dddddd] bg-white text-xl text-[#555555] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
          >
            ×
          </button>
        </div>

        {/* DRAWER CONTENT */}
        <div className="flex-1 overflow-y-auto">
          {!loaded ? (
            <div className="p-6">
              <p className="text-sm text-[#666666]">
                Loading quote cart...
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#3f4448]">
                Your quote cart is empty.
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#666666]">
                Add products, models, accessories, components, or
                services and they will appear here.
              </p>

              <button
                type="button"
                onClick={closeCart}
                className="mt-6 inline-flex min-h-10 items-center justify-center rounded-md border border-[#ed1c24] px-4 py-2 text-sm font-semibold text-[#ed1c24] transition hover:bg-[#ed1c24] hover:text-white"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#e5e5e5]">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="px-5 py-5 md:px-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#ed1c24]">
                        {item.kind}
                      </p>

                      <p className="mt-1 font-semibold leading-6 text-[#3f4448]">
                        {item.name}
                      </p>

                      {item.model && (
                        <p className="mt-1 text-sm font-semibold text-[#ed1c24]">
                          Model: {item.model}
                        </p>
                      )}

                      {item.category && (
                        <p className="mt-1 text-xs leading-5 text-[#777777]">
                          {item.category}
                        </p>
                      )}

                      {item.details && (
                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#777777]">
                          {item.details}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="shrink-0 text-xs font-semibold text-[#888888] transition hover:text-[#ed1c24]"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#777777]">
                      Qty
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-[#cccccc] bg-white text-[#555555] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
                    >
                      −
                    </button>

                    <span className="min-w-6 text-center text-sm font-semibold text-[#444444]">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-[#cccccc] bg-white text-[#555555] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DRAWER FOOTER */}
        {items.length > 0 && (
          <div className="border-t border-[#dddddd] bg-[#fafafa] p-5 md:p-6">
            <div className="grid gap-3">
              <Link
                href="/request-a-quote"
                onClick={closeCart}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Send Quote Request
              </Link>

              <button
                type="button"
                onClick={closeCart}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#777777] bg-white px-5 py-2 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
              >
                Continue Browsing
              </button>
            </div>

            <button
              type="button"
              onClick={clearCart}
              className="mt-4 w-full text-center text-xs font-semibold text-[#888888] transition hover:text-[#ed1c24]"
            >
              Clear Quote Cart
            </button>
          </div>
        )}
      </aside>
    </QuoteCartContext.Provider>
  );
}

export function useQuoteCart() {
  const context = useContext(QuoteCartContext);

  if (!context) {
    throw new Error(
      "useQuoteCart must be used inside a QuoteCartProvider."
    );
  }

  return context;
}