import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Input } from './index';

const meta: Meta<typeof Input> = {
	title: 'Shared/Input',
	component: Input,

	argTypes: {
		label: { control: 'text' },
		placeholder: { control: 'text' },
		required: { control: 'boolean' },
		variant: { control: 'radio', options: ['primary', 'code', 'visa', 'date'] },
	},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {
	name: 'Input',
	args: {
		label: 'Label text',
		placeholder: '+7 Inside text',
		required: false,
		variant: 'primary',
	},
	render: args => (
		<div
			style={{
				display: 'grid',
				gap: 16,
				width: 320,
				backgroundColor: 'lightgrey',
			}}
		>
			<Input {...args} />
			<Input {...args} />
		</div>
	),
};
