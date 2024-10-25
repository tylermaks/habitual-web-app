import SideNav from "@/src/components/ui/SideNav"

export default function Dashboard(){ 
    return ( 
        <main>
            <h1 className="text-white text-5xl font-bold mb-8"> Dashboard</h1>
            <div className="w-full h-64 rounded-md p-2">
                <h2 className="uppercase tracker-widest font-semibold text-sm text-surface-a50">Annual Habit Progress</h2>
                <div>
                    grid component here
                </div>
            </div>
        </main>
    )
}