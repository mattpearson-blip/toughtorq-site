"use client";

import { useState } from "react";

type QuoteItem = {
  id: string;
  kind: string;
  name: string;
  category?: string;
  model?: string;
  details?: string;
  quantity: number;
};

type AddToQuoteButtonProps = {
  name: string;
  kind?: string;
  category?: string;
  model?: string;
  details?: string;
  quantity?: number;
  className?: string;
};

const STORAGE_KEY = "toughtorq-quote-cart";

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

export function AddToQuoteButton({
  name,
  kind = "Product",
  category,
  model,
  details,
  quantity = 1,
  className = "",
}: AddToQuoteButtonProps) {
  const [added, setAdded] = useState(false);

  function addToQuoteCart() {
    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);

      let currentItems: QuoteItem[] = [];

      if (savedCart) {
        const parsed = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          currentItems = parsed;
        }
      }

      const id = createItemId({
        kind,
        name,
        category,
        model,
        details,
      });

      const existingIndex = currentItems.findIndex(
        (item) => item.id === id
      );

      if (existingIndex >= 0) {
        currentItems[existingIndex] = {
          ...currentItems[existingIndex],
          quantity:
            Math.max(
              1,
              Number(currentItems[existingIndex].quantity) || 1
            ) + Math.max(1, quantity),
        };
      } else {
        currentItems.push({
          id,
          kind,
          name,
          category,
          model,
          details,
          quantity: Math.max(1, quantity),
        });
      }

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(currentItems)
      );

      /*
       * Dispatch a custom event so any future cart counter,
       * drawer, or header component can update immediately.
       */
      window.dispatchEvent(
        new CustomEvent("toughtorq-cart-updated", {
          detail: {
            items: currentItems,
          },
        })
      );

      setAdded(true);

      window.setTimeout(() => {
        setAdded(false);
      }, 1600);
    } catch (error) {
      console.error("Unable to add item to quote cart:", error);

      window.alert(
        "We could not add this item to the quote cart. Please try again."
      );
    }
  }

  return (
    <button
      type="button"
      onClick={addToQuoteCart}
      className={`inline-flex min-h-9 items-center justify-center rounded-md border px-3 py-2 text-xs font-semibold transition ${
        added
          ? "border-[#3f4448] bg-[#3f4448] text-white"
          : "border-[#ed1c24] bg-white text-[#ed1c24] hover:bg-[#ed1c24] hover:text-white"
      } ${className}`}
    >
      {added ? "✓ Added to Cart" : "+ Add to Quote Cart"}
    </button>
  );
}