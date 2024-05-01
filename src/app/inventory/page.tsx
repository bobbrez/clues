import { kv } from "@vercel/kv";
import Image from "next/image";
import { CLUES } from "../clues";
import Link from "next/link";

const Page = async () => {
  const version = await kv.get<number>("version");
  const clue = CLUES[(version ?? 1) - 2];

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Link
        href="/inventory/list"
        className="px-4 py-2 bg-purple-500 rounded-md"
      >
        View Evidence List
      </Link>
      <div className="relative w-full min-h-dvh">
        <Image src={`/board-${clue?.board ?? "00"}.svg`} alt="A Clue" fill />
      </div>
    </main>
  );
};

export default Page;
