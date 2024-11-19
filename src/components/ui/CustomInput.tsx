type InputProps = { 
    label: string, 
    name: string
}

export default function CustomInput({ label, name }: InputProps) { 
    //add sanitization

    return(
        <div className="flex flex-col gap-4">
            <label className="text-white" htmlFor={name}>{label}</label>
            <input className="bg-surface-a20 border border-white rounded-md text-white p-1" type="text" name={name} id={name} />
        </div>
    )
}