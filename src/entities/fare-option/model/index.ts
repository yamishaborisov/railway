export type Availability = 'AVL' | 'WL' | 'RAC' | 'LOW';
export type Quota = 'GEN' | 'TQ' | 'LD' | 'PT' | 'HO';

export type FareClassCode = '1A' | '2A' | '3A' | 'SL' | 'CC' | 'EC' | '2S';

export type FareOption = {
	classCode: FareClassCode;
	status: Availability;
	count?: number;
	quota?: Quota;
	price: number;
};
