import { Meta, StoryObj } from '@storybook/react';
import { Toggle, ToggleProps } from "./Toggle";

export default {
    title: 'Components/Toggle',
    component: Toggle,
    args: {
        label: "Toggle example"
    }
} as Meta<ToggleProps>

export const Default: StoryObj<ToggleProps> = {}