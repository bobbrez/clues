import { kv } from "@vercel/kv";
import Image from "next/image";
import { CLUES } from "../clues";

const Page = async () => {
  const version = await kv.get<number>("version");
  const clue = CLUES[(version ?? 1) - 2];

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Image src={`/board-${clue?.board ?? "00"}.svg`} alt="A Clue" fill />
    </main>
  );
};

export default Page;
