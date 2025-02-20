"use client"
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Navbar active="Home"/>

      <h1 className="text-6xl font-bold mb-6">{ count }</h1>

      <div className="flex flex-row">
        <Button className="mr-5" text="Plus" onClick={() => setCount(count + 1)} />
        <Button className="bg-blue-500 hover:bg-blue-700" text="Minus" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
}
