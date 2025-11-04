import type { Meta, StoryObj } from '@storybook/react-vite';
import { FareOptionCard } from './index';
import { type FareOption } from '../model';

const meta: Meta<typeof FareOptionCard> = {
	title: 'Components/FareOptionCard',
	component: FareOptionCard,
	parameters: { layout: 'centered' },
	decorators: [
		S => (
			<div style={{ width: 160 }}>
				<S />
			</div>
		),
	],
	argTypes: {
		option: { control: 'object' },
	},
	args: {
		option: {
			classCode: '3A',
			status: 'AVL',
			quota: 'TQ',
			count: 46,
			price: 800,
		} satisfies FareOption,
		bg: 'red',
	},
};

export default meta;
type Story = StoryObj<typeof FareOptionCard>;

export const Playground: Story = {};
