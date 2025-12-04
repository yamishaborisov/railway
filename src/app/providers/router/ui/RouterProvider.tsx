import { RouterProvider as TanStackRouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '../config/routeTree'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export const RouterProvider = () => <TanStackRouterProvider router={router} />
