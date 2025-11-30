import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { RadioBtn } from './index'

const meta: Meta<typeof RadioBtn> = {
    title: 'Components/RadioBtn',
    component: RadioBtn,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'demo',
        value: 'round',
        label: 'Round trip',
        checked: true,
        // onChange: () => {},
    },
}

export const GroupExample: Story = {
    render: (args) => {
        const [value, setValue] = useState<'round' | 'one-way'>('round')

        return (
            <div style={{ display: 'flex', gap: 16 }}>
                <RadioBtn
                    {...args}
                    name="trip-variant"
                    value="round"
                    label="Round trip"
                    checked={value === 'round'}
                    onChange={(v) => setValue(v as 'round' | 'one-way')}
                />
                <RadioBtn
                    {...args}
                    name="trip-variant"
                    value="one-way"
                    label="One way"
                    checked={value === 'one-way'}
                    onChange={(v) => setValue(v as 'round' | 'one-way')}
                />
            </div>
        )
    },
    args: {
        name: 'trip-variant',
    },
}
