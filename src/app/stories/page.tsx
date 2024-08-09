"use client";
import { useEffect, useState } from "react";
import Stories from "../components/Stories/Stories";

export default function StoryPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setData([]);
      });
  }, []);

  return (
    <main className="min-h-screen w-[375px] overflow-hidden mx-auto border border-gray-300">
      <Stories data={data} />
    </main>
  );
}
