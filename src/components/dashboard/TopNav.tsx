import Image from "next/image";


export default function TopNav () { 
    return (
        <nav className="w-full flex justify-between py-6">
            <div className="flex items-center gap-3">
                <Image 
                    src="/images/calendar-icon.svg"
                    alt="Calendar icon"
                    height={21}
                    width={21}
                />
                <h1 className="text-white text-lg">Thursday, October 24</h1>
            </div>
            
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
                    <p className="text-white text-sm">John Doe</p>
                </div>
            </div>
        </nav>
    )
}