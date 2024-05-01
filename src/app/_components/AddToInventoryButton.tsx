"use client";

import { addToInventory } from "../actions";

export const AddToInventoryButton = ({ version }: { version: number }) => {
  return (
    <button
      className="bg-purple-500 text-purple-200 px-4 py-2 rounded-md mt-6 text-xl"
      onClick={async () => {
        addToInventory(version);
      }}
    >
      Add to Inventory
    </button>
  );
};
