import type { Meta, StoryObj } from '@storybook/react-vite';
import { PassengerProfile } from './index';

const meta: Meta<typeof PassengerProfile> = {
	title: 'Widgets/PassengerProfile',
	component: PassengerProfile,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
