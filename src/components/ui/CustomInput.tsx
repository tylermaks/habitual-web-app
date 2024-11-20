type InputProps = { 
    label: string, 
    name: string,
    placeholder: string
}

export default function CustomInput({ label, name, placeholder }: InputProps) { 
    //add sanitization

    return(
        <div className="flex flex-col gap-1.5 text-sm">
            <label className="text-white" htmlFor={name}>{label}</label>
            <input className="bg-surface-a0 rounded-md text-white py-1.5 px-3" type="text" name={name} id={name} placeholder={placeholder} />
        </div>
    )
}