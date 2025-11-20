import './app.scss';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { TrainsList } from '@/pages/trains-list';
import { StartPage } from '@/pages/start-page';
import '@/shared/styles/global.scss';

export default function App() {
	// return <TrainsList />;
	return <StartPage />;
}
