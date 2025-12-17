import type { Meta, StoryObj } from '@storybook/react-vite'
import { PayForm } from './index'

const meta: Meta<typeof PayForm> = {
    title: 'Features/PayForm',
    component: PayForm,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'gray',
            values: [{ name: 'gray', value: '#f5f5f5' }],
        },
    },
}
export default meta

type Story = StoryObj<typeof PayForm>

export const Default: Story = {
    args: {
        onSubmit: (data) => console.debug('Submit:', data),
        onCancel: () => console.debug('Cancel'),
    },
    name: 'PayForm',
}
