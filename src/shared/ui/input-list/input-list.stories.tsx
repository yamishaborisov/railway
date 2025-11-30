import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { InputList, type Option } from './index'

import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

// моковые города для сторибука
const CITY_ITEMS: Option[] = [
    { label: 'Delhi, India', value: 'DEL' },
    { label: 'Mumbai, India', value: 'BOM' },
    { label: 'London, United Kingdom', value: 'LON' },
    { label: 'Paris, France', value: 'PAR' },
    { label: 'New York, USA', value: 'NYC' },
    { label: 'Helsinki, Finland', value: 'HEL' },
]

const meta: Meta<typeof InputList> = {
    title: 'Components/InputList',
    component: InputList,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Поле ввода с выпадающим списком на базе PrimeReact AutoComplete для выбора города.',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: 400, background: 'grey', padding: 16 }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        placeholder: {
            control: { type: 'select' },
            options: ['Your City/Station', 'Where to?'],
        },
        label: {
            control: { type: 'text' },
        },
    },
    args: {
        placeholder: 'Your City/Station',
        label: 'Departure',
    },
}

export default meta

type Story = StoryObj<typeof InputList>

export const SingleField: Story = {
    name: 'Одно поле',
    render: (args) => {
        const [value, setValue] = useState<Option | null>(null)

        return <InputList {...args} value={value} onChange={setValue} items={CITY_ITEMS} />
    },
}

export const TwoFields: Story = {
    name: 'Два поля: Откуда / Куда',
    render: (args) => {
        const [from, setFrom] = useState<Option | null>(null)
        const [to, setTo] = useState<Option | null>(null)

        return (
            <div style={{ display: 'grid', gap: 16 }}>
                <InputList
                    {...args}
                    label="Departure"
                    placeholder="Your City/Station"
                    value={from}
                    onChange={setFrom}
                    items={CITY_ITEMS}
                />
                <InputList
                    {...args}
                    label="Arrival"
                    placeholder="Where to?"
                    value={to}
                    onChange={setTo}
                    items={CITY_ITEMS}
                />
            </div>
        )
    },
}
