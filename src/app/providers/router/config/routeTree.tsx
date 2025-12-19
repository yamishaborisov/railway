import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { BookedInfo, Payment, ReviewBooking, StartPage, TrainsList } from '@/pages'

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
    path: '/oe',
    component: ReviewBooking,
})
const PaymentRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/sdf',
    component: Payment,
})

const BookedRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: BookedInfo,
})

export const routeTree = rootRoute.addChildren([
    indexRoute,
    trainsRoute,
    reviewBookingRoute,
    PaymentRoute,
    BookedRoute,
])
