"use client"

import { useState } from "react"
import HabitForm from "../Habits/HabitForm"

export default function AddHabit() {
    const [openForm, setOpenForm] = useState<boolean>(false)

    const toggleForm = () => { 
        setOpenForm(!openForm)
    }

    return (
        <div>
            <button 
                className="uppercase text-surface-a50 text-[11px] font-semibold tracking-wider" 
                onClick={toggleForm}
            >
                Add New Habit
            </button>
            { openForm && 
                <div className="absolute top-0 bottom-0 left-64 bg-surface-a10 rounded-md p-6 z-10">
                    <HabitForm />
                </div>
            }
        </div>
    )
}