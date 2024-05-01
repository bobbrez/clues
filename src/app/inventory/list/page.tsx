import { CLUES } from "@/app/clues";
import { kv } from "@vercel/kv";
import Link from "next/link";

const List = async () => {
  const version = await kv.get<number>("version");
  const clues = CLUES;
  return (
    <main className="px-2">
      <div className="flex flex-row w-full justify-between items-center pt-4 pb-6">
        <h1 className="text-3xl font-bold text-purple-100">Evidence List</h1>
        <Link href="/inventory" className="px-4 py-2 bg-purple-500 rounded-md">
          Back to Board
        </Link>
      </div>
      <ul role="list" className="divide-y divide-purple-50">
        {clues.slice(0, (version ?? 0) - 1).map((clue, i) => {
          return (
            <li key={clue.board} className="py-4">
              <div className="flex items-center gap-x-3">
                <img
                  src={`/${clue.image}`}
                  alt=""
                  className="h-28 w-28 flex-none"
                />
                <p className="mt-3 flex-wrap text-sm text-purple-100 whitespace-pre-wrap">
                  {clue.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default List;
