import { type FareOption } from '@/entities/fare-option/model';

export const demoFares: Array<{
	option: FareOption;
	bg: 'green' | 'yellow' | 'red';
}> = [
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
