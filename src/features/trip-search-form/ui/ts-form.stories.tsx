import type { Meta, StoryObj } from '@storybook/react-vite'
import { Provider } from 'jotai'
import { createStore } from 'jotai/vanilla'
import React from 'react'

import { TripSearchForm } from './index'

const meta = {
    title: 'Features/TripSearchForm',
    component: TripSearchForm,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => {
            const store = createStore()
            return (
                <Provider store={store}>
                    <div style={{ width: '100%' }}>
                        <Story />
                    </div>
                </Provider>
            )
        },
    ],
    argTypes: {
        whiteLabel: { control: 'boolean' },
        onSubmit: { action: 'submit' },
    },
    args: {
        whiteLabel: false,
    },
} satisfies Meta<typeof TripSearchForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WhiteLabel: Story = {
    args: {
        whiteLabel: true,
    },
}
