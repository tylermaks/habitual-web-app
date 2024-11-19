import CustomInput from "../../ui/CustomInput"

export default function AddHabitForm() { 
    return (
        <div>
            <h1 className="text-white text-5xl font-bold mb-8">Create a habit</h1>
            <form action="">
               <CustomInput name="habit-title" label="Habit Title"/>
            </form>
        </div>
    )
}