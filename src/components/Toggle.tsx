import { useEffect } from "@storybook/addons";
import { InputHTMLAttributes, useState } from "react";


export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export function Toggle(props: ToggleProps){
    const [toggle, setToggle] = useState(true);
    const handleToggle = () =>{setToggle(!toggle);}
    

    return(
        <label className='text-gray-100 m-2 py-5 px-3 gap-2 w-fit h-10 flex items-center rounded focus-within:ring-2 ring-cyan-300' onClick={handleToggle}>
            <input type='checkbox' className={`inline-block appearance-none bg-gray-800 w-9 h-6 rounded-2xl relative
            after:w-6 after:h-6 after:bg-gray-100 bg-pos-100 after:absolute after:rounded-2xl after:right-5 after:block
            after:checked:right-[-4px] after:checked:animate-[toggleActive_0.5s_ease] checked:bg-cyan-500 transform
            ${toggle ? '' : 'after:animate-[toggleInactive_0.5s_ease]'}`} {...props}
            />
            {props.label}
        </label>
    )
}