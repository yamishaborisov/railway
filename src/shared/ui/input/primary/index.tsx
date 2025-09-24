import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import type { InputProps } from '../types';

export const PrimaryInput = forwardRef<HTMLInputElement, InputProps>(
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

		return (
			<div className={clsx(styles.textInputWrapper, className)}>
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
