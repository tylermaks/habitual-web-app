const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function HabitGrid(){ 


    const fullYearGrid  = () => {
        const today = new Date();
        const thisYear = today.getFullYear()
        const thisMonth = today.getMonth() + 1
        const isLeapYear = thisYear % 4 === 0 ? 366 : 365
        const oneYearAgo = new Date(thisYear, thisMonth, -isLeapYear)
        const oneYearAgoMonth = oneYearAgo.getMonth() + 1
        const oneYearAgoDay = oneYearAgo.getDay() + 1 

        return (
            <div className="grid gap-0.5">
               
            </div>
        );
    }

    const getMonthData = () => { 
        //TEST DATA STRUCTURE
        const monthlyHabitData = [
            {
                year: 2024, 
                month: 9, 
                dailyProgress: [ 
                    {
                        day: 1, 
                        habit: [ 
                            {
                                habitID: 1, 
                                habitTitle:"Get in shape", 
                                tasksArr: [
                                    { 
                                        taskID: 1, 
                                        taskTitle: "Buy new shoes",
                                        complete: false,
                                        completeData: "", 
                                        notes:""
                                    }, 
                                    { 
                                        taskID: 2, 
                                        taskTitle: "Find gym", 
                                        complete: false,
                                        completeData: "", 
                                        notes: ""
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }


    return ( 
        <>
            {fullYearGrid()}

        </>
    );
};