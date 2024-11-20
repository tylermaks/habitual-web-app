type TextAreaProps = { 
    label: string,
    name: string,
    placeholder: string
}

export default function CustomTextArea({ label, name, placeholder} : TextAreaProps){ 
    //add sanitization

    return (
        <div className="flex flex-col gap-1.5 text-sm">
            <label 
                className="text-white"
                htmlFor={name}
            >
                {label}
            </label>
            <textarea
                className="bg-surface-a0 resize-none w-full text-white py-1.5 px-3 rounded-md" 
                name={name} 
                id={name} 
                placeholder={placeholder}
                
            />
        </div>
    )
}