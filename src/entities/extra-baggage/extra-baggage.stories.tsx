import type { Meta, StoryObj } from '@storybook/react-vite'
import { ExtraBaggage } from './index'

const meta: Meta<typeof ExtraBaggage> = {
    title: 'Entities/ExtraBaggage',
    component: ExtraBaggage,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
