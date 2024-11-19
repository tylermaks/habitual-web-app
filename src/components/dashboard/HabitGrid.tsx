"use client"

import { useState, useEffect } from "react"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default function HabitGrid(){ 
    const [hoverID, setHoverID] = useState("")


    //Use for colSpan of months on table component
    const weeksInMonth = (monthID: number) => {
        const year = new Date().getFullYear();
        const dayOffset = new Date(year, monthID - 1, 1).getDay() + 1;
        const daysInMonth = new Date(year, monthID, 0 ).getDate();

        return Math.floor((daysInMonth + dayOffset) / 7);
    }

    //Assign date to each grid cell
    const getGridDate = (dayIndex: number, weekIndex: number) => {
        const year = 2024
        const date = new Date(year, 0)    
        const dayOfYear = (weekIndex * 7 ) + dayIndex

        date.setDate(dayOfYear)

        return date.toLocaleDateString()
    }

    //Used on hover of grid cell
    const displayProgressInfo = (date: string) => { 
        setHoverID(date)
    }

    const restetProgressInfo = () => { 
        setHoverID("")
    }




  
    //TEST DATA STRUCTURE
    const monthlyHabitData = [
        {
            year: 2024, 
            month: 9, 
            dailyProgress: [ 
                {
                    dayID: 1,
                    date: "6/3/2024", 
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
                        },
                        {
                            habitID: 2, 
                            habitTitle:"Study!", 
                            tasksArr: [
                                { 
                                    taskID: "2-1", 
                                    taskTitle: "Stuy for test",
                                    complete: false,
                                    completeData: "", 
                                    notes:""
                                }, 
                            ]
                        }
                    ]
                },
                {
                    dayID: 1,
                    date: "7/12/2024", 
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
                        },
                        {
                            habitID: 2, 
                            habitTitle:"Study!", 
                            tasksArr: [
                                { 
                                    taskID: "2-1", 
                                    taskTitle: "Stuy for test",
                                    complete: false,
                                    completeData: "", 
                                    notes:""
                                }, 
                            ]
                        }
                    ]
                }
            ]
        }
    ]

    const getDailyProgressData = ()  => { 
        const dailyProgressData = monthlyHabitData[0].dailyProgress
    
        for (let obj in dailyProgressData){ 
            const targetCell = document.querySelector(`td[data-date="${dailyProgressData[obj].date}"]`)
            
            if (targetCell) {
                const colorValue = Math.min(dailyProgressData[obj].habit.length * 100 + 100, 900)
                const contributionColor = `bg-green-${colorValue}`;

                console.log("COLOUR VALUE", typeof(colorValue), colorValue)
                targetCell.className = `${contributionColor} w-3 rounded-sm table-cell border-separate relative`;
            }
        }
    }

    useEffect(() => { 
        getDailyProgressData()
    },[])



    return ( 
        <table className="p-4  border-spacing-[3px] border-separate">
          <thead>
            <tr className="h-[13px]">
                <td className="w-7">
                    <span className="sr-only">Day of the Week</span>
                </td>
                { Array.from({length: 12}, (_, index) => (
                    <td key={index} colSpan={weeksInMonth(index + 1)}>
                        <span className="text-white text-sm">{months[index].slice(0, 3)}</span>
                    </td>
                ))}
            </tr>
            <tr></tr>
          </thead>
          <tbody>
                {daysOfTheWeek.map((day, dayIndex) => { 
                    return (
                        <tr key={dayIndex} className="h-3">
                            <td className="w-7 pr-8 relative">
                                <span className={(dayIndex) % 2 ? "text-sm absolute bottom-[-3px] text-white" : "sr-only"}>{day.slice(0, 3)}</span>
                            </td>
                            { Array.from({length: 53}, (_, weekIndex) => {
                                const date = getGridDate(dayIndex, weekIndex)
                                let contributions = 0
                                //move this to hover component? Does it matter? 
                                monthlyHabitData[0].dailyProgress.forEach( obj => { 
                                    if(obj.date === date) contributions =+ obj.habit.length
                                })

                                return(
                                    <td 
                                        className={ date.slice(-4) !== '2024' ? "bg-surface-a0" : "w-3 bg-surface-a10 rounded-sm table-cell border-separate"}
                                        onMouseEnter={() =>  date.slice(-4) === '2024' && displayProgressInfo(date)}
                                        onMouseLeave={restetProgressInfo}
                                        key={weekIndex} 
                                        id={`${dayIndex}-${weekIndex}`}  
                                        data-date={date} 
                                        data-index={weekIndex}
                                    >
                                        <div className="flex items-center justify-center relative">
                                            {hoverID === date &&
                                                <div className="absolute top-[-40px] rounded-md bg-surface-a20 text-xs text-white text-center p-2 z-20 flex">
                                                    <p className="whitespace-nowrap">
                                                        {contributions > 0 
                                                            ? `${contributions} contributions were made on ${date}`
                                                            : `No contributions made on ${date}`}
                                                    </p>
                                                </div>
                                            }
                                        </div>
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    );
};