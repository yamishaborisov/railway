import type { Meta, StoryObj } from '@storybook/react-vite';
import { TripBar } from './index';

const meta = {
	title: 'Trip/TripBar',
	component: TripBar,
	tags: ['autodocs'],
	argTypes: {
		variantD: {
			control: { type: 'inline-radio' },
			options: ['desktop', 'mobile'],
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof TripBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
	args: { variantD: 'desktop' },
	render: args => (
		<div style={{ width: '640px' }}>
			<TripBar {...args} />
		</div>
	),
};
