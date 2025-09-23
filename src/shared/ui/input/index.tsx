import {
	forwardRef,
	useId,
	// useState,
	// type ChangeEvent,
	type InputHTMLAttributes,
} from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export type InputProps = {
	label?: string;
	error?: string;
	success?: string;
	inputClassName?: string;
	size?: 'small' | 'normal';
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			error,
			success,
			required,
			onChange,
			className,
			inputClassName,
			size = 'normal',
			value,
			...props
		},
		ref
	) => {
		// const [hasValue, setHasValue] = useState(value || '');
		const uniqueId = useId();

		// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		// 	onChange?.(e);
		// 	setHasValue(e.target.value.length);
		// };

		return (
			<div className={clsx(styles.textInputWrapper, styles[size], className)}>
				{label && (
					<label className={styles.label} htmlFor={uniqueId}>
						{label} {required && <span aria-hidden='true'>*</span>}
					</label>
				)}

				<input
					ref={ref}
					id={uniqueId}
					className={clsx(styles.input, inputClassName)}
					value={value}
					// onChange={handleChange}
					aria-invalid={!!error}
					{...props}
				/>

				{error ? (
					<div className={styles.error}>{error}</div>
				) : success ? (
					<div className={styles.success}>{success}</div>
				) : null}
			</div>
		);
	}
);
