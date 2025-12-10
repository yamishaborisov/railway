import type { Meta, StoryObj } from '@storybook/react-vite'
import { BoardingDetails, type BoardingDetailsProps } from './index'

const meta: Meta<typeof BoardingDetails> = {
    title: 'Features/BoardingDetails',
    component: BoardingDetails,
    tags: ['autodocs'],
    args: {
        title: '22426 – VANDE BHARAT',
        from: {
            date: 'Nov 16',
            time: '11:25 pm',
            location: 'New Delhi – NDLS',
        },
        to: {
            date: 'Nov 17',
            time: '7:25 am',
            location: 'Lucknow – LJN',
        },
        duration: '8 hours',
        classInfo: 'Class 2A & Tatkal Quota',
    } satisfies BoardingDetailsProps,
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomClassInfo: Story = {
    args: {
        classInfo: 'Sleeper Class & General Quota',
    },
}

export const OvernightTrain: Story = {
    args: {
        title: '12235 – LUCKNOW MAIL',
        from: {
            date: 'Dec 01',
            time: '10:15 pm',
            location: 'New Delhi – NDLS',
        },
        to: {
            date: 'Dec 02',
            time: '6:10 am',
            location: 'Lucknow – LJN',
        },
        duration: '7 hours 55 minutes',
    },
}
