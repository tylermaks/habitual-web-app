
type SkillIconProps = { 
    type: string
}


function SkillIcon({
    type
} : SkillIconProps) { 
    return(
        <div className="rounded-full w-28 h-28 bg-sky-blue">

        </div>
    )
}

export default function SkillsGrid() {
    return ( 
        <div className="flex flex-col gap-16">
            <div className="w-full flex items-center justify-center">
                <SkillIcon type="main" />
            </div>
            <div className="w-full flex gap-16">
                <div className="w-1/2 flex items-center justify-end">
                    <SkillIcon type="main" />
                </div>
                <div className="w-1/2 flex items-center justify-start">
                    <SkillIcon type="main"/>
                </div>
            </div>
            <div className="flex flex-col gap-12">
                <div className="flex items-center justify-center">
                    <SkillIcon type="alt" />
                </div>
                <div className="flex items-center justify-center gap-16">
                    <SkillIcon type="alt" />
                    <SkillIcon type="alt" />
                    <SkillIcon type="alt" />
                </div>
                <div className="flex items-center justify-center">
                    <SkillIcon type="alt" />
                </div>
            </div>
        </div>
    )
}