import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { ReviewBooking, StartPage, TrainsList } from '@/pages'

const rootRoute = createRootRoute({ component: () => <Outlet /> })

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/ae',
    component: StartPage,
})

const trainsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'trains',
    component: TrainsList,
})
const reviewBookingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: ReviewBooking,
})

export const routeTree = rootRoute.addChildren([indexRoute, trainsRoute, reviewBookingRoute])
