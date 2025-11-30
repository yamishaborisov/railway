// TripBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { TripBar, type TripVariant } from './index'

const meta = {
    title: 'shared/TripBar',
    component: TripBar,
    render: (args) => {
        const [tripVariant, setTripVariant] = useState<TripVariant>('round')
        const [passengers, setPassengers] = useState(1)

        return (
            <TripBar
                {...args}
                tripVariant={tripVariant}
                onTripVariantChange={setTripVariant}
                passengers={passengers}
                onPassengersChange={setPassengers}
            />
        )
    },
    args: {
        variantD: 'desktop',
    },
} satisfies Meta<typeof TripBar>

export default meta

// type Story = StoryObj<typeof meta>

// export const Default: Story = {};
// export const Mobile: Story = {
// 	args: {
// 		variantD: 'mobile',
// 	},
// };
