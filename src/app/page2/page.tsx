import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export default function Page2() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Navbar active="Page2"/>

            <div className="w-80 h-40 bg-red-500 mb-6"></div>

            <div className="grid grid-cols-2 gap-4">
                <Button text="Click me"/>
                <Button text="Click me"/>
                <Button text="Click me"/>
                <Button text="Click me"/>
            </div>
        </div>
    );
};
