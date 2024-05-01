import Image from "next/image";
import Link from "next/link";
import { kv } from "@vercel/kv";
import { CLUES } from "./clues";
import { AddToInventoryButton } from "./_components/AddToInventoryButton";

export const dynamic = "force-dynamic";

const Home = async () => {
  const version = await kv.get<number>("version");
  const clue = CLUES[(version ?? 1) - 1];

  if (!clue)
    return (
      <main className="w-full flex flex-col items-center justify-center">
        <p className="text-4xl text-white font-bold w-full text-center pt-16">
          Nothing Here
        </p>

        <Link
          className="bg-purple-500 text-purple-200 px-4 py-2 rounded-md mt-6 text-xl"
          href="/inventory"
        >
          View Inventory
        </Link>
      </main>
    );

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <p className="text-4xl text-white font-bold w-full text-center pt-16">
        You Found A Clue!
      </p>
      <p className="text-xl text-white font-bold w-full text-center pt-4 whitespace-break-spaces">
        {clue.description}
      </p>
      <div className="pt-16">
        <Image src={`/${clue.image}`} alt="A Clue" width={400} height={400} />
      </div>

      <AddToInventoryButton version={version ?? 0} />
    </main>
  );
};

export default Home;
