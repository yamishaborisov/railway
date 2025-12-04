import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { StartPage, TrainsList } from '@/pages'

const rootRoute = createRootRoute({ component: () => <Outlet /> })

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: StartPage,
})

const trainsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'trains',
    component: TrainsList,
})

export const routeTree = rootRoute.addChildren([indexRoute, trainsRoute])
