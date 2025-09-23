import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Input } from '.';

const meta: Meta<typeof Input> = {
	title: 'Shared/Input',
	component: Input,
	argTypes: {
		label: { control: 'text' },
		placeholder: { control: 'text' },
		required: { type: 'boolean' },
		size: { control: 'select' },
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

const styles = {
	width: '300px',
	marginTop: '20px',
};

export const InputStory: Story = {
	render: props => (
		<div style={styles}>
			<Input {...props} />
			<Input {...props} />
		</div>
	),
	name: 'Input',
	args: {
		label: 'Label text',
		placeholder: '+7 Inside text',
		required: false,
	},
};
