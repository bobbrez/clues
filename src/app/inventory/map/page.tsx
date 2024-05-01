import { CLUES } from "@/app/clues";
import { kv } from "@vercel/kv";
import Link from "next/link";
import Image from "next/image";

const List = async () => {
  return (
    <main className="px-2">
      <div className="flex flex-row w-full justify-between items-center pt-4 pb-6">
        <h1 className="text-3xl font-bold text-purple-100">Map</h1>
        <Link href="/inventory" className="px-4 py-2 bg-purple-500 rounded-md">
          Back to Board
        </Link>
      </div>
      <div className="relative w-full min-h-dvh">
        <Image src="/board-18.svg" alt="A Clue" fill />
      </div>
    </main>
  );
};

export default List;
