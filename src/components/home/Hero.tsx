import ButtonLink from "../ui/ButtonLink"

export default function Hero(){ 
    return(
        <div className="flex items-center h-[500px]">
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-7xl font-semibold mb-2">Habits that stick</h1>
                    <p className='w-2/3'>Habitual empowers you with innovative tools to cultivate effective habits. Leverage technology to unlock your full potential and achieve lasting success.</p>
                </div>
                <div className="flex gap-3">
                    <ButtonLink href="/signup"> 
                        Get started
                    </ButtonLink>
                    <ButtonLink href="/signup" alt={true}> 
                        Learn More
                    </ButtonLink>
                </div>
            </div>

        </div>
    )
}