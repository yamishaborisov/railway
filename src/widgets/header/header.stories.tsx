import type { Meta, StoryObj } from '@storybook/react-vite'
import {
    createMemoryHistory,
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
    RouterProvider,
} from '@tanstack/react-router'
import React from 'react'
import { Header } from './index'

const meta = {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#111318' },
            ],
        },
    },
    argTypes: {
        bg: {
            control: { type: 'inline-radio' },
            options: ['light', 'dark'],
        },
    },
    args: {
        bg: 'light',
    },

    decorators: [
        (Story, context) => {
            const initialEntries = context.parameters?.router?.initialEntries ?? ['/']

            const rootRoute = createRootRoute({
                component: () => <Outlet />,
            })

            const StoryWrap = () => <Story />

            const indexRoute = createRoute({
                getParentRoute: () => rootRoute,
                path: '/',
                component: StoryWrap,
            })
            const trainsRoute = createRoute({
                getParentRoute: () => rootRoute,
                path: 'trains',
                component: StoryWrap,
            })
            const reviewRoute = createRoute({
                getParentRoute: () => rootRoute,
                path: 'review',
                component: StoryWrap,
            })
            const paymentRoute = createRoute({
                getParentRoute: () => rootRoute,
                path: 'payment',
                component: StoryWrap,
            })
            const bookedRoute = createRoute({
                getParentRoute: () => rootRoute,
                path: 'booked',
                component: StoryWrap,
            })

            const splatRoute = createRoute({
                getParentRoute: () => rootRoute,
                path: '$',
                component: StoryWrap,
            })

            const routeTree = rootRoute.addChildren([
                indexRoute,
                trainsRoute,
                reviewRoute,
                paymentRoute,
                bookedRoute,
                splatRoute,
            ])

            const router = createRouter({
                routeTree,
                history: createMemoryHistory({ initialEntries }),
            })

            return <RouterProvider router={router} />
        },
    ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: { bg: 'light' },
    parameters: {
        backgrounds: { default: 'light' },
        router: { initialEntries: ['/'] },
    },
}

export const Dark: Story = {
    args: { bg: 'dark' },
    parameters: {
        backgrounds: { default: 'dark' },
        router: { initialEntries: ['/'] },
    },
}
