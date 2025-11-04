import type { Meta, StoryObj } from '@storybook/react-vite';

import { Footer } from './index'; // или './index', если там реэкспорт

const meta = {
	title: 'Components/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen', // чтобы футер тянулся на всю ширину, как в макете
	},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
