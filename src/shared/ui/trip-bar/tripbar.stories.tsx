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
			// description: 'Вёрстка/поведение под разные брейкпоинты',
		},
	},
	parameters: {
		// если хочешь, можно оставить layout тут, вместо preview.ts
		layout: 'centered',
	},
} satisfies Meta<typeof TripBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
	args: { variantD: 'desktop' },
};

// export const Mobile: Story = {
// 	args: { variant: 'mobile' },
// Если используешь addon-viewport, можно раскомментировать:
// parameters: { viewport: { defaultViewport: 'iphonex' } },
// };

// export const Playground: Story = {
// 	args: { variant: 'desktop' },
// };
