import type { Meta, StoryObj } from '@storybook/react-vite';
import { TrainResult } from './index';
import type { FareOption } from '@/entities/fare-option/model';

const meta = {
	title: 'Widgets/TrainResultCard',
	component: TrainResult,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof TrainResult>;

export default meta;
type Story = StoryObj<typeof meta>;

// демо-данные для тарифов
const fares: Array<{ option: FareOption; bg: 'green' | 'yellow' | 'red' }> = [
	{
		option: {
			classCode: '3A',
			status: 'AVL',
			count: 46,
			quota: 'TQ',
			price: 800,
		},
		bg: 'green',
	},
	{
		option: {
			classCode: '2A',
			status: 'AVL',
			count: 6,
			quota: 'TQ',
			price: 1000,
		},
		bg: 'yellow',
	},
	{
		option: {
			classCode: '1A',
			status: 'WL',
			count: 36,
			quota: 'TQ',
			price: 1200,
		},
		bg: 'red',
	},
];

export const Default: Story = {
	args: {
		title: '22426 – VANDE BHARAT',
		runsOn: 'Everyday',
		from: {
			date: 'Nov 16',
			time: '11:25 pm',
			location: 'New Delhi – NDLS',
		},
		to: {
			date: 'Nov 17',
			time: '7:25 am',
			location: 'Lucknow – LJN',
		},
		duration: '8 hours',
		fares,
	},
	render: args => (
		<div style={{ maxWidth: 840 }}>
			<TrainResult {...args} />
		</div>
	),
};
