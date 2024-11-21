'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


type ListItemProps = {
    label: string;
    img: string;
    href: string;
}

export default function ListItem({ label, img, href } : ListItemProps) { 
    const currentPathName = usePathname()
    const componentPathName = label.toLowerCase()
    const currentItemClass = currentPathName === `/${componentPathName}` ? "bg-surface-a20 text-white rounded-md py-2" : ""

    return( 
        <li className={`flex items-center gap-2 p-2 ${currentItemClass}`}>
            <Image src={`/images/${img}`} height={20} width={20} alt={`${label} icon`} />
            <Link className="text-sm" href={`/${href}`}>{label}</Link>
        </li>
    )
}