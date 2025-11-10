import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputList } from './index';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const meta: Meta<typeof InputList> = {
	title: 'Components/InputList',
	component: InputList,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Поле ввода с выпадающим списком на базе PrimeReact AutoComplete для выбора города.',
			},
		},
	},
	decorators: [
		Story => (
			<div style={{ width: 400, background: 'grey', padding: 16 }}>
				<Story />
			</div>
		),
	],

	argTypes: {
		placeholder: {
			control: { type: 'select' },
			options: ['Your City/Station', 'Where to?'],
		},
	},
	args: {
		placeholder: 'Your City/Station',
	},
};

export default meta;
type Story = StoryObj<typeof InputList>;

export const TwoFields: Story = {
	name: 'Два поля: Откуда / Куда',
	render: () => <InputList />,
};
