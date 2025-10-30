import {
	AutoComplete,
	type AutoCompleteCompleteEvent,
	type AutoCompleteChangeEvent,
} from 'primereact/autocomplete';
import { useId, useState } from 'react';
import { CITY_ITEMS } from './cities';
import styles from './styles.module.scss';

type City = { label: string; value: string };
type InputListProps = {
	placeholder?: 'Your City/Station' | 'Where to?';
	label?: 'Departure' | 'Arrival';
};

export const InputList = ({
	placeholder = 'Your City/Station',
	label = 'Departure',
	...props
}: InputListProps) => {
	const [value, setValue] = useState<City | null>(null);
	const [suggestions, setSuggestions] = useState<City[]>([]);
	const id = useId();

	const search = (e: AutoCompleteCompleteEvent) => {
		const q = e.query.trim().toLowerCase();
		setSuggestions(CITY_ITEMS.filter(c => c.label.toLowerCase().includes(q)));
	};

	return (
		<article className={styles.article}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<AutoComplete
				id={id}
				className={styles.input}
				value={value}
				suggestions={suggestions}
				completeMethod={search}
				onChange={(e: AutoCompleteChangeEvent) => setValue(e.value)}
				field='label'
				panelStyle={{ marginTop: '12px' }}
				onDropdownClick={() => setSuggestions(CITY_ITEMS)}
				placeholder={placeholder}
				// appendTo={typeof document !== 'undefined' ? document.body : undefined}
			/>
		</article>
	);
};
