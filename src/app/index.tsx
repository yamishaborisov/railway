import './app.scss'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import '@/shared/styles/global.scss'

import { StartPage } from '@/pages/start-page'
import { TrainsList } from '@/pages/trains-list'

export default function App() {
    return <TrainsList />
    // return <StartPage />;
}
