'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


type ListItemProps = {
    label: string;
    img: string;
}

export default function ListItem({ label, img } : ListItemProps) { 
    const currentPathName = usePathname()
    const componentPathName = label.toLowerCase()
    const currentItemClass = currentPathName === `/${componentPathName}` ? "bg-surface-a20 rounded-md py-2" : ""

    return( 
        <li className={`flex items-center gap-2 p-2 ${currentItemClass}`}>
            <Image src={`/images/${img}`} height={20} width={20} alt={`${label} icon`} />
            <Link className="text-sm" href={componentPathName}>{label}</Link>
        </li>
    )
}