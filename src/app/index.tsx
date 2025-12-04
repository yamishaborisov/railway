import './app.scss'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import '@/shared/styles/global.scss'

import { RouterProvider } from './providers/router/ui/RouterProvider'

export default function App() {
    return <RouterProvider />
}
