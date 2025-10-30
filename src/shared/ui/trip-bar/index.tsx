import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { useId, useState } from 'react';
import styles from './styles.module.scss';

type TripBarProps = {
	variantD: 'desktop' | 'mobile';
};
type TripVariant = 'round' | 'one-way';

export const TripBar = ({ variantD, ...props }: TripBarProps) => {
	const roundTripId = useId();
	const owTripId = useId();
	const [tripVariant, setTripVariant] = useState<TripVariant>('round');
	const [value, setValue] = useState<number>(1);
	return (
		<article className={styles.article}>
			<div className={styles.inputCont}>
				<RadioButton
					inputId={roundTripId}
					name='trip-variant'
					value='round'
					variant='filled'
					onChange={e => setTripVariant(e.value)}
					checked={tripVariant === 'round'}
				/>
				<label className={styles.inputLabel} htmlFor={roundTripId}>
					Round trip
				</label>
			</div>
			<div className={styles.inputCont}>
				<RadioButton
					inputId={owTripId}
					name='trip-variant'
					value='one-way'
					variant='filled'
					onChange={e => setTripVariant(e.value)}
					checked={tripVariant === 'one-way'}
				/>
				<label className={styles.inputLabel} htmlFor={owTripId}>
					One way
				</label>
			</div>
			<div className={styles.inputCounterGroup}>
				<span>
					<img className={styles.personImg} src='/public/images/person.svg' />
				</span>
				<InputNumber
					value={value}
					onValueChange={e => setValue(e.value ?? 0)}
					showButtons
					buttonLayout='horizontal'
					incrementButtonIcon='myicon myicon-plus'
					decrementButtonIcon='myicon myicon-minus'
					step={1}
					min={0}
					max={9}
					// className={styles.pasInput}
					decrementButtonClassName='p-button-text p-button-plain'
					incrementButtonClassName='p-button-text'
				/>
			</div>
		</article>
	);
};
