import { InputNumber } from 'primereact/inputnumber';
import clsx from 'clsx';
import styles from './styles.module.scss';

type CounterProps = {
	value: number;
	onChange: (value: number) => void;
	min?: number;
	max?: number;
	step?: number;
	className?: string;
};

export const Counter = ({
	value,
	onChange,
	min = 0,
	max,
	step = 1,
	className,
}: CounterProps) => {
	return (
		<InputNumber
			value={value}
			onValueChange={e => onChange(e.value ?? 0)}
			showButtons
			buttonLayout='horizontal'
			incrementButtonIcon='myicon myicon-plus'
			decrementButtonIcon='myicon myicon-minus'
			step={step}
			min={min}
			max={max}
			decrementButtonClassName='p-button-text p-button-plain'
			incrementButtonClassName='p-button-text'
			className={clsx(className, styles.input)}
		/>
	);
};
