import { Slot } from '@radix-ui/react-slot';
import React, { InputHTMLAttributes, ReactNode } from 'react';
import {Text} from './Text'

export interface RadiobuttonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    groupName: string;
}

export interface RadiobuttonRootProps {
    children: ReactNode;
    label: string;
}


function RadiobuttonRoot(props: RadiobuttonRootProps) {
    return (
        <div className='flex-col items-center gap-3 py-4 px-3 rounded'>
            <Text asChild size="lg">
            <legend>{props.label}</legend>
            </Text>
           {props.children}
        </div>
    )
}

RadiobuttonRoot.displayName = 'Radiobutton.Root'

function RadiobuttonInput(props: RadiobuttonInputProps) {
    return (
    <>
        <label className='text-gray-100 m-2 py-5 px-3 gap-2 w-fit h-10 flex items-center rounded focus-within:ring-2 ring-cyan-300'>
            <input type="radio"
                className='appearance-none w-8 h-8 rounded-2xl border-solid border-8 border-gray-800 bg-gray-800 
                checked:bg-cyan-500 
                hover:bg-gray-400 
                hover:border-gray-400 hover:shadow-[0_0_0_4px_rgba(225,225,230,0.3)] 
                hover:checked:bg-cyan-100'
                name={props.groupName}
                {...props}
            />
            {props.title}
        </label>
    </>
    )
}
RadiobuttonInput.displayName = 'Radiobutton.Input'



export const Radiobutton = {
    Root: RadiobuttonRoot,
    Input: RadiobuttonInput
}