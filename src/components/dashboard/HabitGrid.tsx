"use client"

import { useState, useEffect } from "react"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default function HabitGrid(){ 
    const [hoverID, setHoverID] = useState("")


    //Use for colSpan of months on table component
    const weeksInMonth = (monthID: number) => {
        const year = new Date().getFullYear();
        const daysInMonth = new Date(year, monthID, 0 ).getDate();

        return Math.floor(daysInMonth / 7);
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
        console.log("WORKING")
        setHoverID(date)
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
                }
            ]
        }
    ]

    const getDailyProgressData = ()  => { 
        const dailyProgressData = monthlyHabitData[0].dailyProgress
    
        for (let obj in dailyProgressData){ 
            const targetCell = document.querySelector(`td[data-date="${dailyProgressData[obj].date}"]`)
            const colorValue = Math.min(dailyProgressData[obj].habit.length * 100, 900)
           
            if (targetCell) {
                targetCell.className = `bg-green-${colorValue} w-3 rounded-sm table-cell border-separate relative`;
            }
        }
    }

    useEffect(() => { 
        getDailyProgressData()
    },[])



    return ( 
        <table className="p-4  border-spacing-[3px] border-separate overflow-hidden">
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
                            { Array.from({length: 52}, (_, weekIndex) => (
                                <td 
                                    className="w-3 bg-surface-a10 rounded-sm table-cell border-separate relative"
                                    onMouseEnter={() => displayProgressInfo(getGridDate(dayIndex, weekIndex))}
                                    key={weekIndex} 
                                    id={`${dayIndex}-${weekIndex}`}  
                                    data-date={getGridDate(dayIndex, weekIndex)} 
                                    data-index={weekIndex}
                                >
                                    {hoverID === getGridDate(dayIndex, weekIndex) &&
                                        <div className="absolute top-0 rounded-md bg-surface-a10 text-xs text-white p-1 z-20">
                                            <p>Today's date is {getGridDate(dayIndex, weekIndex)}</p>
                                        </div>
                                    }
                          
                                </td>
                            ))}
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    );
};