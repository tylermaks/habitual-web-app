"use client"

import { useState } from "react"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default function HabitGrid(){ 

    const weeksInMonth = (monthID: number) => {
        const year = new Date().getFullYear();
        const daysInMonth = new Date(year, monthID, 0 ).getDate();

        return Math.floor(daysInMonth / 7);
    }

    const getGridDate = (dayIndex: number, weekIndex: number) => {
        const year = 2024
        const dayOfYear = (weekIndex * 7 ) + dayIndex 
        const date = new Date(year, 0)

        date.setDate(dayOfYear)
        return date.toLocaleDateString()
    }


    const fullYearGrid  = () => {
        const today = new Date();
        const thisYear = today.getFullYear()
        const thisMonth = today.getMonth() + 1
        const isLeapYear = thisYear % 4 === 0 ? 366 : 365
        const oneYearAgo = new Date(thisYear, thisMonth, -isLeapYear)
        const oneYearAgoMonth = oneYearAgo.getMonth() + 1
        const oneYearAgoDay = oneYearAgo.getDay() + 1 
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
                                <td key={weekIndex} id={`${dayIndex}-${weekIndex}`}  data-date={getGridDate(dayIndex, weekIndex)} data-index={weekIndex} className="w-3 bg-surface-a10 rounded-sm table-cell border-separate">
                                    <p className="text-white text-xs">
                                     { (weekIndex * 7 ) + dayIndex }
                                    </p>
                          
                                </td>
                            ))}
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    );
};