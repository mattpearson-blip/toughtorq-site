"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type QuoteItem = {
  model: string;
  product: string;
  quantity: number;
};

const FORM_ACTION = "https://formsubmit.co/support@toughtorq.com";

export function QuoteCart() {
  const searchParams = useSearchParams();
  const requestedModel = searchParams.get("model");
  const requestedProduct = searchParams.get("product");

  const [items, setItems] = useState<QuoteItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("toughtorq-quote-cart");

    let currentItems: QuoteItem[] = [];

    if (stored) {
      try {
        currentItems = JSON.parse(stored);
      } catch {
        currentItems = [];
      }
    }

    if (requestedModel) {
      const alreadyExists = currentItems.some(
        (item) => item.model === requestedModel
      );

      if (!alreadyExists) {
        currentItems.push({
          model: requestedModel,
          product: requestedProduct || "ToughTorq Product",
          quantity: 1,
        });
      }
    }

    setItems(currentItems);
    setLoaded(true);
  }, [requestedModel, requestedProduct]);

  useEffect(() => {
    if (!loaded) return;

    window.localStorage.setItem(
      "toughtorq-quote-cart",
      JSON.stringify(items)
    );
  }, [items, loaded]);

  function updateQuantity(model: string, quantity: number) {
    if (quantity < 1) return;

    setItems((current) =>
      current.map((item) =>
        item.model === model ? { ...item, quantity } : item
      )
    );
  }

  function removeItem(model: string) {
    setItems((current) =>
      current.filter((item) => item.model !== model)
    );
  }

  const quoteSummary = useMemo(() => {
    return items
      .map(
        (item) =>
          `${item.model} | ${item.product} | Qty: ${item.quantity}`
      )
      .join("\n");
  }, [items]);

  if (!loaded) {
    return null;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Quote Cart */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ed1c24]">
          Quote Cart
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-[#666666]">
          Selected equipment
        </h2>

        {items.length === 0 ? (
          <div className="mt-7 rounded-3xl border border-[#d6d6d6] bg-white p-6">
            <p className="text-[#555555]">
              Your quote cart is currently empty.
            </p>

            <Link
              href="/products"
              className="mt-5 inline-flex text-sm font-semibold text-[#ed1c24]"
            >
              Browse Products →
            </Link>
          </div>
        ) : (
          <div className="mt-7 space-y-4">
            {items.map((item) => (
              <div
                key={item.model}
                className="rounded-2xl border border-[#d6d6d6] bg-white p-5"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-[#666666]">
                      {item.model}
                    </p>

                    <p className="mt-1 text-sm text-[#555555]">
                      {item.product}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <label
                      htmlFor={`qty-${item.model}`}
                      className="text-sm text-[#555555]"
                    >
                      Qty
                    </label>

                    <input
                      id={`qty-${item.model}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) =>
                        updateQuantity(
                          item.model,
                          Number(event.target.value)
                        )
                      }
                      className="h-11 w-20 rounded-xl border border-[#cccccc] bg-white px-3 text-[#333333] focus:border-[#ed1c24] focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={() => removeItem(item.model)}
                      className="h-11 rounded-xl border border-[#d6d6d6] px-4 text-sm font-semibold text-[#555555] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/products"
              className="inline-flex text-sm font-semibold text-[#ed1c24]"
            >
              + Add More Products
            </Link>
          </div>
        )}
      </div>

      {/* Quote Form */}
      <div className="rounded-3xl border border-[#d6d6d6] bg-white p-5 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ed1c24]">
          Request Pricing
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-[#666666]">
          Request a Quote
        </h2>

        <p className="mt-4 leading-7 text-[#555555]">
          Submit your contact information and ToughTorq will review your
          equipment request.
        </p>

        <form
          action={FORM_ACTION}
          method="POST"
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          <input
            type="hidden"
            name="_subject"
            value="New ToughTorq Quote Request"
          />

          <input
            type="hidden"
            name="_next"
            value="https://toughtorq.com/thank-you"
          />

          <input type="hidden" name="_template" value="table" />

          <input
            type="hidden"
            name="Requested Equipment"
            value={quoteSummary}
          />

          <input
            type="text"
            name="_honey"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className="min-h-12 rounded-xl border border-[#d6d6d6] bg-[#f7f7f7] px-4 text-[#333333] focus:border-[#ed1c24] focus:outline-none"
          />

          <input
            type="text"
            name="company"
            placeholder="Company*"
            required
            className="min-h-12 rounded-xl border border-[#d6d6d6] bg-[#f7f7f7] px-4 text-[#333333] focus:border-[#ed1c24] focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="min-h-12 rounded-xl border border-[#d6d6d6] bg-[#f7f7f7] px-4 text-[#333333] focus:border-[#ed1c24] focus:outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            required
            className="min-h-12 rounded-xl border border-[#d6d6d6] bg-[#f7f7f7] px-4 text-[#333333] focus:border-[#ed1c24] focus:outline-none"
          />

          <input
            type="text"
            name="location"
            placeholder="City / State / Country"
            className="min-h-12 rounded-xl border border-[#d6d6d6] bg-[#f7f7f7] px-4 text-[#333333] focus:border-[#ed1c24] focus:outline-none md:col-span-2"
          />

          <textarea
            name="application"
            placeholder="Application, project details, timing, or other information"
            className="min-h-36 rounded-xl border border-[#d6d6d6] bg-[#f7f7f7] p-4 text-[#333333] focus:border-[#ed1c24] focus:outline-none md:col-span-2"
          />

          <button
            type="submit"
            disabled={items.length === 0}
            className="min-h-12 rounded-xl border border-[#ed1c24] bg-[#ed1c24] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 md:col-span-2"
          >
            Request Quote
          </button>
        </form>
      </div>
    </div>
  );
}