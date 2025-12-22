import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { BookedInfo, NotFoundPage, Payment, ReviewBooking, StartPage, TrainsList } from '@/pages'

const rootRoute = createRootRoute({
    component: () => <Outlet />,
    notFoundComponent: NotFoundPage,
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: StartPage,
})

const trainsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/trains',
    component: TrainsList,
})
const reviewBookingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/review',
    component: ReviewBooking,
})
const PaymentRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/payment',
    component: Payment,
})

const BookedRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/booked',
    component: BookedInfo,
})

// const NotFoundRoute = createRoute({
// 	getParentRoute: () => rootRoute,
// 	path: '*',
// 	component: NotFoundPage,
// });

export const routeTree = rootRoute.addChildren([
    indexRoute,
    trainsRoute,
    reviewBookingRoute,
    PaymentRoute,
    BookedRoute,
    // NotFoundRofute,
])
