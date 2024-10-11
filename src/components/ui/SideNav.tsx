export default function SideNav() { 
    return ( 
        <nav className="bg-surface-a10 w-[12.5%] p-8 flex flex-col justify-between">
            <div>
                <div className="mb-8">
                    <p className="text-white">Logo</p>
                </div>
                <ul className="text-white flex flex-col gap-4">
                    <li>Dashboard</li>
                    <li>
                        <p className="mb-3">Habits</p>
                        <ul className="flex flex-col gap-3">
                            <li className="text-sm pl-5">Get in shape</li>
                            <li className="text-sm pl-5">Make more money</li>
                            <li className="text-sm pl-5">Spend more time with friends</li>
                        </ul>
                    </li>
                    <li>Tasks</li>
                    <li>Other</li>
                </ul>
            </div>
            <div>
                <p className="text-white">Signout</p>
            </div>
        </nav>
    )
}