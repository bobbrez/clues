import Image from "next/image";

const Page = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Image src="/board-02.svg" alt="A Clue" fill />
    </main>
  );
};

export default Page;
