import Image from "next/image";

export default function TopNav () { 


    return (
        <nav className="bg-deep-gray w-full flex justify-between items-center py-3 px-40">
            <h1 className="text-2xl font-black text-white">habitual</h1>
            <div className="flex items-center gap-14">
                <div className="cursor-pointer">
                    <Image 
                        src="images/search-icon.svg"
                        alt="Search"
                        height={21}
                        width={21}
                    />
                </div>
                <div className="cursor-pointer">
                    <Image 
                        src="images/bell-icon.svg"
                        alt="Notifications"
                        height={21}
                        width={21}
                    />
                </div>
                <div className="flex gap-2 items-center cursor-pointer">
                    <div className="flex items-center justify-center rounded-full bg-surface-a10 w-8 h-8 text-white text-xs">JD</div>
                    <p className="text-sm">John Doe</p>
                </div>
            </div>
        </nav>
    )
}