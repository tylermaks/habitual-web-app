import SkillsGrid from "@/src/components/dashboard/Skills/MainSkills"

export default function HabitSummary() { 
    return (
        <div className="bg-white h-[1000px] w-2/3 shadow-md rounded-md p-8 flex flex-col gap-12">
            <h2 className="text-2xl font-bold">Skills</h2>
            <SkillsGrid />
        </div>
    )
}