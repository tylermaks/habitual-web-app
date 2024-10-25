import Image from "next/image"
import ListItem from "../dashboard/ListItem"
import CollapsibleList from "../dashboard/CollapsibleList"

export default function SideNav() { 
    return ( 
        <nav className="bg-surface-a10 w-[12.5%] px-4 py-6 flex flex-col gap-4 rounded-md">
            <div className="h-12">
                <p className="text-white font-black tracking-widest">HABITUAL</p>
            </div>
            <div>
                <h2 className="uppercase text-surface-a50 text-[11px] font-semibold tracking-wider pl-2 mb-2">General</h2>
                <ul className="text-white flex flex-col gap-2">
                    <ListItem label="Dashboard" img="dashboard-icon.svg" />
                    <ListItem label="Journal" img="journal-icon.svg" />
                    <ListItem label="Tasks" img="tasks-icon.svg" />
                    <ListItem label="Other" img="ellipse-icon.svg" />
                </ul>
            </div>
            <hr className="my-3 border-surface-a50"/>
            <div>
                <h2 className="uppercase text-surface-a50 text-[11px] font-semibold tracking-wider pl-2 mb-2">Habits</h2>
                <ul className="text-white flex flex-col gap-2">
                    <li className="text-sm text-white py-2 pl-4">No habits set</li>
                </ul>
                <div className="flex gap-1 items-center pl-2">
                    <Image 
                        src="/images/add-icon.svg"
                        alt="Add habit"
                        height={16}
                        width={16}
                    />
                    <p className="uppercase text-surface-a50 text-[11px] font-semibold tracking-wider">Add Habit</p>
                </div>
            </div>

            <div className="flex flex-1 items-end">
                <div className="flex gap-2 items-center">
                    <Image src="/images/cog-icon.svg" height={20} width={20} alt="Settings icon" />
                    <p className="text-white">Settings</p>
                </div>
               
            </div>
        </nav>
    )
}