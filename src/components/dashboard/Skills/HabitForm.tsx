import CustomInput from "../../ui/CustomInput"
import CustomTextArea from "../../ui/CustomTextArea"

export default function HabitForm() { 
    return (
        <div className="w-[400px]">
            <h1 className="text-white text-xl font-black mb-4">Create Habit</h1>
            <form className="flex flex-col gap-4" action="">
               <CustomInput 
                    name="habit-title" 
                    label="Title" 
                    placeholder="Eg. Study for test"
                />
               <CustomTextArea 
                    name="habit-goal" 
                    label="Define a goal for this habit" 
                    placeholder="" 
                />
            </form>
        </div>
    )
}