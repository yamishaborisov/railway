import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './index';

const meta: Meta<typeof Card> = {
	title: 'UI/Card (minimal)',
	component: Card,
	parameters: { layout: 'padded' },
	argTypes: {
		size: {
			control: { type: 'inline-radio' },
			options: ['normal', 'mobile', 'mini'],
		},
		credit: { control: { type: 'boolean' } },
		bg: {
			control: { type: 'select' },
			options: ['white', 'grey', 'red', 'green', 'yellow'],
		},
		border: {
			control: { type: 'inline-radio' },
			options: ['none', 'solid', 'dashed'],
		},
		className: { control: false },
		id: { control: 'text' },
		children: { control: 'text' },
	},
	args: {
		size: 'normal',
		credit: false,
		bg: 'white',
		border: 'solid',
		children: 'Editable content — change me in Controls',
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
