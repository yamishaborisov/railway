import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './index';

const meta: Meta<typeof Button> = {
	title: 'Shared/Button',
	component: Button,
	args: { children: 'Button' },
	parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof Button>;

// 1) Brand / Solid — дефолт
export const BrandSolid: Story = {
    args: {
        size: "md"
    },

    name: 'button'
};
