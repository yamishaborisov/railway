import { useState } from 'react';
import { Button, DateInput } from '@/shared/ui';
import { CityInput, type City } from '@/entities/cities-input';
import { TripBar, type TripVariant } from '@/widgets';
import styles from './styles.module.scss';

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

type TripSearchFormProps = {
	onSubmit?: (value: TripSearchFormValue) => void;
};

export const TripSearchForm = ({ onSubmit }: TripSearchFormProps) => {
	const [fromCity, setFromCity] = useState<City | null>(null);
	const [toCity, setToCity] = useState<City | null>(null);
	const [tripVariant, setTripVariant] = useState<TripVariant>('round');
	const [passengers, setPassengers] = useState<number>(1);
	const [dateRange, setDateRange] = useState<DateRange>({
		from: null,
		to: null,
	});

	const handleSubmit = () => {
		const payload: TripSearchFormValue = {
			fromCity,
			toCity,
			tripVariant,
			passengers,
			dateRange,
		};

		onSubmit?.(payload);
	};

	return (
		<div className={styles.sectionTop}>
			<TripBar
				variantD='desktop'
				tripVariant={tripVariant}
				onTripVariantChange={setTripVariant}
				passengers={passengers}
				onPassengersChange={setPassengers}
			/>

			<div className={styles.inputListWrap}>
				<CityInput
					label='Departure'
					placeholder='Your City/Station'
					className={styles.inputList}
					value={fromCity}
					onChange={setFromCity}
				/>

				<CityInput
					label='Arrival'
					placeholder='Where to?'
					className={styles.inputList}
					value={toCity}
					onChange={setToCity}
				/>
			</div>

			<DateInput
				label='Pick your lucky day'
				className={styles.dateInput}
				inputClassName='desktop'
				value={dateRange}
				onChange={next => setDateRange(next)}
			/>

			<Button
				variant='solid'
				tone='brand'
				size='lg'
				density='wide'
				weight='bold'
				onClick={handleSubmit}
			>
				Ticket, Please!
			</Button>
		</div>
	);
};
