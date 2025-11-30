import { atom } from 'jotai';
import type { TripSearchFormValue } from './types';

const initialTripSearchFormValue: TripSearchFormValue = {
	fromCity: null,
	toCity: null,
	tripVariant: 'round',
	passengers: 1,
	dateRange: { from: null, to: null },
};

export const tripSearchFormAtom = atom<TripSearchFormValue>(
	initialTripSearchFormValue
);
