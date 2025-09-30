import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput } from './index';

const meta: Meta<typeof DateInput> = {
	title: 'shared/DateInput',
	component: DateInput,
	args: {
		placeholder: 'ДД/ММ/ГГГГ',
	},
	argTypes: {
		placeholder: { control: 'text' },
	},
};
export default meta;

type Story = StoryObj<typeof DateInput>;

// export const Default: Story = {};

export const WithCustomIcon: Story = {
	name: 'date-input',
};
