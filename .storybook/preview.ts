import type { Preview } from '@storybook/react-vite';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../src/shared/styles/variables.scss';
import '../src/shared/styles/global.scss';

const preview: Preview = {
	tags: ['autodocs'],
};

export default preview;
