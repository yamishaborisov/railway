import { type City } from '@/entities/cities-input';
import { type TripVariant } from '@/widgets';

type DateRange = {
	from: Date | null;
	to: Date | null;
};

export type TripSearchFormValue = {
	fromCity: City | null;
	toCity: City | null;
	tripVariant: TripVariant;
	passengers: number;
	dateRange: DateRange;
};
