import type { Meta, StoryObj } from '@storybook/react-vite'
import { ApplyCode } from './index'

const meta: Meta<typeof ApplyCode> = {
    title: 'Widgets/ApplyCode',
    component: ApplyCode,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
