"use client"

import { useState } from "react"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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
        <table className="p-4 border border-spacing-[3px] border-separate overflow-hidden">
          <thead>
            <tr className="h-[13px]">
                <td className="w-7">
                    <span className="sr-only">Day of the Week</span>
                </td>
                { Array.from({length: 12}, (_, index) => (
                    <td key={index} colSpan={4}>
                        <span className="text-white text-sm">{months[index].slice(0, 3)}</span>
                    </td>
                ))}
            </tr>
            <tr></tr>
          </thead>
          <tbody>
                {daysOfTheWeek.map((day, index) => { 
                    return (
                        <tr key={index} className="h-3">
                            <td className="w-7 pr-8 relative">
                                <span className={(index) % 2 ? "text-sm absolute bottom-[-3px] text-white" : "sr-only"}>{day.slice(0, 3)}</span>
                            </td>
                            { Array.from({length: 52}, (_, index) => (
                                <td key={index} className="w-3 bg-surface-a10 rounded-sm table-cell border-separate">

                                </td>
                            ))}
                        </tr>
                    )
                })}
                
                
            </tbody>
 
        </table>
    );
};