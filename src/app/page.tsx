import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <p className="text-4xl text-white font-bold w-full text-center pt-16">
        You Found A Clue!
      </p>
      <p className="text-xl text-white font-bold w-full text-center pt-4">
        A note that reads: &quot;Meeting at 7:00 PM&quot;
      </p>
      <div className="pt-16">
        <Image
          src="/postit-note-01.svg"
          alt="A Clue"
          width={400}
          height={400}
        />
      </div>
      <Link
        className="bg-purple-500 text-purple-200 px-4 py-2 rounded-md mt-6 text-xl"
        href="/inventory"
      >
        Add to Inventory
      </Link>
    </main>
  );
}
