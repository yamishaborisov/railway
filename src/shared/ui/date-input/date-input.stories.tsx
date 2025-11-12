import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput } from './index';
import type { DateRange } from './types';

const meta: Meta<typeof DateInput> = {
	title: 'shared/DateInput',
	component: DateInput,
	args: {
		label: 'Pick your lucky day',
		placeholderFrom: 'Depart',
		placeholderTo: 'Return',
		inputClassName: 'desktop',
	},
	argTypes: {
		label: { control: 'text' },
		placeholderFrom: { control: 'text' },
		placeholderTo: { control: 'text' },
		inputClassName: {
			control: 'inline-radio',
			options: ['mobile', 'desktop'],
		},
	},
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
	name: 'date-input',
	render: args => {
		const [value, setValue] = useState<DateRange>({
			from: null,
			to: null,
		});

		return (
			<div
				style={{
					display: 'grid',
					gap: 16,
					backgroundColor: 'lightgrey',
					padding: 20,
					overflow: 'visible',
					position: 'relative',
				}}
			>
				<DateInput {...args} value={value} onChange={next => setValue(next)} />
			</div>
		);
	},
};
