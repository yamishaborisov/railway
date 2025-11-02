import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './index';

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',

		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#111318' },
			],
		},
	},
	argTypes: {
		bg: {
			control: { type: 'inline-radio' },
			options: ['light', 'dark'],
		},
	},
	args: {
		bg: 'light',
	},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Light: Story = {
	args: { bg: 'light' },
	parameters: { backgrounds: { default: 'light' } },
};

export const Dark: Story = {
	args: { bg: 'dark' },

	parameters: { backgrounds: { default: 'dark' } },
};
