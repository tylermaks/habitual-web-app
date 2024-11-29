import LevelSummary from "@/src/components/dashboard/LevelSummary"

export default function Dashboard(){ 
    return ( 
        <main className="py-6 px-40 flex gap-4">
            <div className="bg-white h-[1000px] w-2/3 shadow-md rounded-md p-4">
                

            </div>
            <div className="w-1/3">
                <LevelSummary />
            </div>

        </main>
    )
}