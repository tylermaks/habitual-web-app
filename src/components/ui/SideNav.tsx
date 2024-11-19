import Image from "next/image"
import ListItem from "../dashboard/SideNav/ListItem"
import SidebarHabitList from "../dashboard/SideNav/SidebarHabitList"

export default function SideNav() { 
    return ( 
        <nav className="bg-surface-a10 w-[300px] px-4 py-6 flex flex-col gap-4 rounded-md">
            <div className="h-12">
                <p className="text-white font-black tracking-widest">HABITUAL</p>
            </div>
            <div>
                <h2 className="uppercase text-surface-a50 text-[11px] font-semibold tracking-wider pl-2 mb-2">General</h2>
                <ul className="text-white flex flex-col gap-2">
                    <ListItem label="Dashboard" img="dashboard-icon.svg" href="dashboard" />
                    <ListItem label="Journal" img="journal-icon.svg" href="journal"/>
                    <ListItem label="Tasks" img="tasks-icon.svg" href="tasks" />
                    <ListItem label="Other" img="ellipse-icon.svg" href="=other" />
                </ul>
            </div>
            <hr className="my-3 border-surface-a50"/>
            <SidebarHabitList />

            <div className="flex flex-1 items-end">
                <div className="flex gap-2 items-center">
                    <Image src="/images/cog-icon.svg" height={20} width={20} alt="Settings icon" />
                    <p className="text-white">Settings</p>
                </div>
            </div>
        </nav>
    )
}