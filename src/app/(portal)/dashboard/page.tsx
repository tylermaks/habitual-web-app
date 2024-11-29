import LevelSummary from "@/src/components/dashboard/LevelSummary"
import ProgressChart from "@/src/components/dashboard/ProgressChart"
import HabitSummary from "@/src/components/dashboard/Skills/SkillSummary"

export default function Dashboard(){ 
    return ( 
        <main className="py-6 px-40 flex gap-4">
            <HabitSummary />
            <div className="w-1/3 flex flex-col gap-4">
                <LevelSummary />
                <ProgressChart />
            </div>

        </main>
    )
}