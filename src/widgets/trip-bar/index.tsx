import { RadioBtn } from '@/shared/ui/radio-button';
import { Counter } from '@/shared/ui/counter';
import { useState } from 'react';
import styles from './styles.module.scss';

type TripBarProps = {
	variantD: 'desktop' | 'mobile';
};
type TripVariant = 'round' | 'one-way';

export const TripBar = ({ variantD, ...props }: TripBarProps) => {
	const [tripVariant, setTripVariant] = useState<TripVariant>('round');
	const [value, setValue] = useState<number>(1);
	return (
		<article className={styles.article}>
			<RadioBtn
				name='trip-variant'
				value='round'
				label='Round trip'
				checked={tripVariant === 'round'}
				onChange={v => setTripVariant(v as TripVariant)}
			/>
			<RadioBtn
				name='trip-variant'
				value='one-way'
				label='One way'
				checked={tripVariant === 'one-way'}
				onChange={v => setTripVariant(v as TripVariant)}
			/>
			<div className={styles.inputCounterGroup}>
				<span>
					<img className={styles.personImg} src='/public/images/person.svg' />
				</span>
				<Counter
					value={value}
					onChange={setValue}
					min={0}
					max={9}
					className={styles.counterSmall}
				/>
			</div>
		</article>
	);
};
