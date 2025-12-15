import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../button'
import { Input } from '../input'
import { ActionCard } from './index'

const meta: Meta<typeof ActionCard> = {
    title: 'Shared/ActionCard',
    component: ActionCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const WithButton: Story = {
    args: {
        title: 'Extra Baggage',
        children: <Button>Add Extra Baggage</Button>,
    },
}

export const WithInput: Story = {
    args: {
        title: 'Apply Code',
        children: (
            <Input
                variant="code"
                placeholder="Enter Code"
                value=""
                onChange={() => {
                    console.debug()
                }}
            />
        ),
    },
}
