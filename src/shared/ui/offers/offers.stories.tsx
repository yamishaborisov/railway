import type { Meta, StoryObj } from '@storybook/react-vite';
import { Offers, demoOffers } from './index';

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
			// <div style={{ width: 560 }}>
			<S />
			// </div>
		),
	],
};
export default meta;
type Story = StoryObj<typeof Offers>;

export const Playground: Story = {};
