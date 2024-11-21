export default function Dashboard(){ 
    return ( 
        <main className="py-6 px-40 flex gap-4">
            <div className="bg-white h-[1000px] w-2/3 shadow-md rounded-md p-4">
                

            </div>
            <div className="w-1/3">
                <div className="flex flex-col gap-4 bg-white shadow-md rounded-md p-6">
                    <h2 className="font-bold">Current Level</h2>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center rounded-full bg-blue-500 w-32 h-32">
                            <h3 className="font-black text-white text-5xl">3</h3>
                        </div>
                    </div>
                    <p className="text-center text-sm">Check out the leaderboards</p>
                </div>
            </div>

        </main>
    )
}