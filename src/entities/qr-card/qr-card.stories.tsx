import type { Meta, StoryObj } from '@storybook/react-vite'
import { QRCard } from './index'

const meta: Meta<typeof QRCard> = {
    title: 'Entities/QRCard',
    component: QRCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
