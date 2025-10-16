import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput } from './index';

const meta: Meta<typeof DateInput> = {
	title: 'shared/DateInput',
	component: DateInput,
	args: {
		placeholder: 'Depart',
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
	args: {
		className: 'desctop',
	},
	render: args => (
		<div
			style={{
				display: 'grid',
				gap: 16,
				// width: 320,
				backgroundColor: 'lightgrey',
				padding: 20,
				overflow: 'visible', // 👈 вот это добавь
				position: 'relative', // 👈 для контекста позиционирования
			}}
		>
			<DateInput {...args} />
		</div>
	),
};
