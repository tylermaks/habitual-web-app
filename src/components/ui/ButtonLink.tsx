import Link from "next/link"

type ButtonProps = { 
    children: React.ReactNode, 
    size?: string
    href: string,
    alt?: boolean
};

export default function ButtonLink({ children, size = "medium", href, alt = false }: ButtonProps) { 
    const buttonSize = size === "small" ? "text-sm" : "text-md";
    const buttonAlt = alt ? "border border-indigo-500 bg-white text-indigo-500" : "bg-indigo-500 text-white";

    return (
        <Link 
            className={`rounded-3xl py-3 px-8 ${buttonSize} ${buttonAlt}`} 
            href={href}
        >
            {children}
        </Link>
    );
}