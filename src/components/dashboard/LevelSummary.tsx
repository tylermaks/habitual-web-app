type StatProps = { 
    label: string,
    currentLevel: string,
    currentXP: number, 
    requiredXP: number,
}

function StatBar({ 
    label, 
    currentLevel,
    currentXP,
    requiredXP
} : StatProps ) { 
    const nextLevel = Number(currentLevel) + 1
    const levelProgress = Math.round((currentXP/requiredXP) * 100)
    const levelProgressWidth = "w-[" + levelProgress + "%]"


    return (
        <div className="flex">
            <div className="w-[50px] flex items-end">
                <p className="text-sm leading-none">{label}</p>
            </div>
           
            <div className="w-full">
                <div className="flex pb-1 items-center justify-between">
                    <p className="text-xs">Lvl {currentLevel}</p>
                    <p className="text-xs">Lvl {nextLevel}</p>
                </div>
                <div className="rounded-lg h-2 bg-gray-200 relative">
                    <div  
                        style={{ width: `${levelProgress}%` }}
                        className="h-2 rounded-lg bg-royal-purple shadow-sm"
                    >    
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function LevelSummary() {
    return(
        <div className="flex flex-col gap-6 bg-white shadow-md rounded-md p-6">
            <h2 className="font-bold">Current Level</h2>

            <div className="flex justify-center items-center">
                <h3 className="font-black text-7xl">3</h3>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <StatBar 
                    label="Str" 
                    currentLevel="3"
                    currentXP={25}
                    requiredXP={150}
                />
                <StatBar 
                    label="Int" 
                    currentLevel="7"
                    currentXP={255}
                    requiredXP={300}
                />
                <StatBar 
                    label="Wis" 
                    currentLevel="4"
                    currentXP={85}
                    requiredXP={200}
                />
            </div>
            <p className="text-center text-sm">Check out the leaderboards</p>
        </div>
    )
}