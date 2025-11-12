import { useId, forwardRef, type ChangeEvent } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import type { BaseInputProps } from '../types';

export const PrimaryInput = forwardRef<HTMLInputElement, BaseInputProps>(
	(
		{
			label,
			error,
			success,
			required,
			onChange,
			className,
			inputClassName,
			value,
			...props
		},
		ref
	) => {
		const uniqueId = useId();

		const describedById = error || success ? `${uniqueId}-message` : undefined;

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			onChange(e.target.value);
		};

		return (
			<article className={clsx(styles.textInputWrapper, className)}>
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
					onChange={handleChange}
					required={required}
					aria-invalid={!!error}
					aria-describedby={describedById}
					{...props}
				/>

				{error ? (
					<div id={describedById} className={styles.error}>
						{error}
					</div>
				) : success ? (
					<div id={describedById} className={styles.success}>
						{success}
					</div>
				) : null}
			</article>
		);
	}
);
