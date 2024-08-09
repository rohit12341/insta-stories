import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-96 mx-auto flex items-center justify-center border bg-black border-gray-300">
      <Link className="px-4 py-2 rounded-md bg-black border border-white text-white shadow-gray" href="/stories">
        Go to Stories
      </Link>
    </main>
  );
}
