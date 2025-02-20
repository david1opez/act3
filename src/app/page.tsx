import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Navbar active="Home"/>

      <h1 className="text-6xl font-bold mb-6">0</h1>

      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Click me</button>
    </div>
  );
}
