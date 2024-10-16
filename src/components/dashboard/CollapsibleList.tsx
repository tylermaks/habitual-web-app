'use client'

import { useState } from "react"
import Image from "next/image"

export default function CollapsibleList(){ 
    const [collapse, setCollapse] = useState(false)

    const toggleCollapse = () => { 
        setCollapse(!collapse)
    }

    return (
        <li>
            <div className="flex gap-2" onClick={toggleCollapse}>
                <Image 
                    src="/images/bolt-icon.svg"
                    height={18}
                    width={18}
                    alt="Bolt icon"
                />
                <p>Habits</p>
                <Image
                    className={collapse ? "text-white fill-current" : "rotate-180" }
                    src="/images/chevron-up-icon.svg"
                    height={18}
                    width={18} 
                    alt="Toggle habits menu"
                />
            </div>
            <ul className={collapse ? "hidden" : "flex flex-col gap-3 mt-3"}>
                <li className="text-sm pl-10">Get in shape</li>
                <li className="text-sm pl-10">Make more money</li>
                <li className="text-sm pl-10">Spend more time with friends</li>
            </ul>
        </li>
    )
}