import type { Meta, StoryObj } from '@storybook/react-vite'
import { MealCard, type MealCardProps } from './index'

const meta: Meta<typeof MealCard> = {
    title: 'Features/MealCard',
    component: MealCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Paneer Tikka Rice Bowl - Mini',
        price: 200,
        image: '/public/images/meal-1.png', // подставь свой урл, если есть ассеты
        onAddToTicket: () => {
            console.debug('Add to Ticket clicked')
        },
    } satisfies MealCardProps,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLongTitle: Story = {
    args: {
        title: 'Grilled Tandoori Chicken With Dry Fruits',
        price: 500,
    },
}
