import type { Meta, StoryObj } from '@storybook/react-vite'
import { PromoCard } from './index'

const meta: Meta<typeof PromoCard> = {
    title: 'Widgets/PromoCard',
    component: PromoCard,
    tags: ['autodocs'],
    args: {
        title: 'Planning your holidays',
        image: '/images/holidays-bg.jpg',
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TrainTourism: Story = {
    args: {
        title: 'Train tourism packages',
        image: '/images/holidays-bg.jpg',
    },
}

export const TwoCards: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                maxWidth: 600,
            }}
        >
            <PromoCard title="Planning your holidays" image="/images/holidays-bg.jpg" />
            <PromoCard title="Train tourism packages" image="/images/holidays-bg.jpg" />
        </div>
    ),
}
