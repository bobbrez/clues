"use server";

import { kv } from "@vercel/kv";
import { redirect } from "next/navigation";

export const addToInventory = async (version: number) => {
  await kv.set("version", version + 1);
  redirect("/inventory");
};
