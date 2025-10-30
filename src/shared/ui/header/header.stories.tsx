// src/components/Header/Header.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
// компонент экспортирован как `export const index`, переименуем его при импорте:
import { Header } from './index';

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	// parameters: {
	// 	layout: 'fullscreen',
	// 	docs: {
	// 		description: {
	// 			component: 'Шапка с логотипом и основной навигацией.',
	// 		},
	// 	},
	// },
	decorators: [
		Story => (
			// <div style={{ background: 'grey', padding: 24 }}>
			<Story />
			// </div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
