"use client"
export default function Button({ text, onClick, className }: { text: string, onClick?: () => void, className?: string }) {
    return (
        <button
            className={`text-white font-bold py-2 px-4 rounded ${className}`}
            onClick={() =>  onClick && onClick()}
        >
            {text}
        </button>
    );
}