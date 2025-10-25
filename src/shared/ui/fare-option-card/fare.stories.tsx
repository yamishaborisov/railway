import type { Meta, StoryObj } from '@storybook/react-vite';
import { FareOptionCard, type FareOption } from './index';

const meta: Meta<typeof FareOptionCard> = {
	title: 'Components/FareOptionCard',
	component: FareOptionCard,
	parameters: { layout: 'centered' },
	decorators: [
		S => (
			<div style={{ width: 320 }}>
				<S />
			</div>
		),
	],
	argTypes: {
		option: { control: 'object' },
		onSelect: { action: 'select' },
	},
	args: {
		option: {
			classCode: '3A',
			status: 'AVL',
			quota: 'TQ',
			count: 46,
			price: 800,
			// currency: 'INR',
			// selected: false,
			// disabled: false,
		} satisfies FareOption,
	},
};

export default meta;
type Story = StoryObj<typeof FareOptionCard>;

export const Playground: Story = {};
