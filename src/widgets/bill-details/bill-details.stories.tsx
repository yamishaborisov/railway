import type { Meta, StoryObj } from '@storybook/react-vite'
import { BillDetails, type BillDetailsProps } from './index'

const meta: Meta<typeof BillDetails> = {
    title: 'Widgets/BillDetails',
    component: BillDetails,
    tags: ['autodocs'],
    args: {
        items: [
            { label: 'Base Ticket Fare', amount: 1000 },
            { label: 'Paneer Tikka Rice Bowl - Mini', amount: 180 },
            { label: 'Extra Baggage', amount: 500 },
            { label: 'CGST & SGST', amount: 500 },
            { label: 'Discount', amount: -436 },
        ],
    } satisfies BillDetailsProps,
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutDiscount: Story = {
    args: {
        items: [
            { label: 'Base Ticket Fare', amount: 1500 },
            { label: 'CGST & SGST', amount: 270 },
        ],
    },
}

export const OnlyTicket: Story = {
    args: {
        items: [{ label: 'Base Ticket Fare', amount: 2500 }],
    },
}
