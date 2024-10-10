import ButtonLink from "../ui/ButtonLink"

export default function Hero(){ 
    return(
        <div className="flex items-center h-[500px]">
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-7xl mb-2">Build habits that stick</h1>
                    <p className='w-2/3'>Habitual empowers you with innovative tools to cultivate effective habits. Leverage our platform to unlock your full potential and achieve lasting success.</p>
                </div>
                <div className="flex gap-2">
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