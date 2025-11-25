import './app.scss';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '@/shared/styles/global.scss';

import { TrainsList } from '@/pages/trains-list';
import { StartPage } from '@/pages/start-page';

export default function App() {
	// return <TrainsList />;
	return <StartPage />;
}
