import Image from "next/image"
import Link from "next/link"

export default function SidebarHabitList () { 
    return ( 
        <div>
            <h2 className="uppercase text-surface-a50 text-[11px] font-semibold tracking-wider pl-2 mb-2">Habits</h2>
            <ul className="text-white flex flex-col gap-2">
                
            </ul>
            <div className="flex gap-1 items-center pl-2 cursor-pointer">
                <Image 
                    src="/images/add-icon.svg"
                    alt="Add habit"
                    height={16}
                    width={16}
                />
                <Link className="uppercase text-surface-a50 text-[11px] font-semibold tracking-wider" href='/habit/add-habit'>
                    Add New Habit
                </Link>
                
            </div>
        </div>
    )
}