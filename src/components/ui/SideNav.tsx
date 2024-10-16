import Image from "next/image"
import ListItem from "../dashboard/ListItem"
import CollapsibleList from "../dashboard/CollapsibleList"

export default function SideNav() { 
    return ( 
        <nav className="bg-surface-a10 w-[12.5%] px-5 py-8 flex flex-col justify-between">
            <div>
                <div className="mb-8">
                    <p className="text-white">Logo</p>
                </div>
                <ul className="text-white flex flex-col gap-5">
                    <ListItem label="Dashboard" img="dashboard-icon.svg" />
                    <ListItem label="Journal" img="journal-icon.svg" />
                    <CollapsibleList />
                    <ListItem label="Tasks" img="tasks-icon.svg" />
                    <ListItem label="Other" img="ellipse-icon.svg" />
                </ul>
            </div>
            <div className="flex gap-2">
                <Image src="/images/cog-icon.svg" height={18} width={18} alt="Cog icon" />
                <p className="text-white">Signout</p>
            </div>
        </nav>
    )
}