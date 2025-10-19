// src/components/InputList/InputList.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputList } from './index';

// Если стили PrimeReact уже импортированы в .storybook/preview.ts,
// эти импорты можно удалить из файла историй:
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
			<div style={{ width: 360, background: 'grey', padding: 16 }}>
				<Story />
			</div>
		),
	],
	// 👇 control для placeholder
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

// export const Default: Story = {};

export const TwoFields: Story = {
	name: 'Два поля: Откуда / Куда',
	render: () => (
		// <div style={{ display: 'grid', gap: 12, width: 360 }}>
		// 	<label style={{ display: 'grid', gap: 4 }}>
		// 		<span style={{ fontSize: 12 }}>Откуда</span>
		// 		<InputList />
		// 	</label>
		// 	<label style={{ display: 'grid', gap: 4 }}>
		// 		<span style={{ fontSize: 12 }}>Куда</span>
		// 		<InputList />
		// 	</label>
		// </div>
		<InputList />
	),
};
