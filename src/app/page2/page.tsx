"use client"
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export default function Page2() {
    const [color, setColor] = useState("red");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Navbar active="Page2"/>

            <div className={`w-80 h-40 bg-${color}-500 mb-6`}></div>

            <div className="grid grid-cols-2 gap-4">
                <Button className="bg-red-500 hover:bg-red-700" text="Red" onClick={() => setColor("red")}/>
                <Button className="bg-blue-500 hover:bg-blue-700" text="Blue" onClick={() => setColor("blue")}/>
                <Button className="bg-pink-500 hover:bg-pink-700" text="Pink" onClick={() => setColor("pink")}/>
                <Button className="bg-amber-500 hover:bg-amber-700" text="Yellow" onClick={() => setColor("amber")}/>
            </div>            

        </div>
    );
};
