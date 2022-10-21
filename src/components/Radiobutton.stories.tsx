import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { Radiobutton, RadiobuttonRootProps } from "./Radiobutton";

export default {
    title: 'Components/Radiobutton',
    component: Radiobutton.Root,
    args: {
        children: [
            <Radiobutton.Input groupName='RadioButtonExample' value="Radiobutton-Value" title='Radio button example'/>,
            <Radiobutton.Input groupName='RadioButtonExample' value="Radiobutton2-Value" title='Radio button example checked' checked/>
        ],
        label: "Select the option"
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<RadiobuttonRootProps>
export const Default: StoryObj<RadiobuttonRootProps> = {}