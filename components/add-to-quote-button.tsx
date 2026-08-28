"use client";

import { useState } from "react";

import { useQuoteCart } from "./quote-cart-provider";

type AddToQuoteButtonProps = {
  name: string;
  kind?: string;
  category?: string;
  model?: string;
  details?: string;
  quantity?: number;
  className?: string;
};

export function AddToQuoteButton({
  name,
  kind = "Product",
  category,
  model,
  details,
  quantity = 1,
  className = "",
}: AddToQuoteButtonProps) {
  const { addItem } = useQuoteCart();

  const [added, setAdded] = useState(false);

  function handleAddToQuoteCart() {
    addItem({
      name,
      kind,
      category,
      model,
      details,
      quantity,
    });

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1400);
  }

  return (
    <button
      type="button"
      onClick={handleAddToQuoteCart}
      className={`inline-flex min-h-9 items-center justify-center rounded-md border px-3 py-2 text-xs font-semibold transition ${
        added
          ? "border-[#3f4448] bg-[#3f4448] text-white"
          : "border-[#ed1c24] bg-white text-[#ed1c24] hover:bg-[#ed1c24] hover:text-white"
      } ${className}`}
    >
      {added ? "✓ Added to Quote Cart" : "Add to Quote Cart"}
    </button>
  );
}