import type { Meta, StoryObj } from '@storybook/react-vite';
import { Offers } from './index';
import { type Offer } from './types';

const demoOffers: Offer[] = [
	{
		id: 'o1',
		description: '50% off up to ₹100',
		code: 'BOOKNOW',
		applied: true,
	},
	{ id: 'o2', description: '20% off', code: 'FIRSTTIME' },
];

const meta: Meta<typeof Offers> = {
	title: 'Components/Offers',
	component: Offers,
	parameters: { layout: 'centered' },
	args: {
		offers: demoOffers,
	},
	argTypes: {
		onApply: { action: 'apply' },
		onRemove: { action: 'remove' },
	},
	decorators: [
		S => (
			<div style={{ width: 320 }}>
				<S />
			</div>
		),
	],
};
export default meta;
type Story = StoryObj<typeof Offers>;

export const Playground: Story = {};
