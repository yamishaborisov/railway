import { useId, useState } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

type DateInputProps = {
	placeholder?: string;
	className?: string;
	label?: string;
	inputClassName?: 'mobile' | 'desktop';
};

export const DateInput = ({
	placeholder,
	className,
	inputClassName,
	label,
	...props
}: DateInputProps) => {
	const uniqueId = useId();

	return (
		<article className={clsx(styles.dateInputWrapper, className)}>
			{label && <label className={styles.label}>{label}</label>}
			<input
				placeholder={placeholder}
				className={clsx(styles.input, inputClassName && styles[inputClassName])}
				id={uniqueId}
			/>
		</article>
	);
};
