import {
	Button as PButton,
	type ButtonProps as PBtnProps,
} from 'primereact/button';
import clsx from 'clsx';
import styles from './styles.module.scss';
import type { ButtonHTMLAttributes } from 'react';
import type { Variant, Tone, Size, Density, Weight } from './types';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: Variant;
	tone?: Tone;
	size?: Size;
	density?: Density;
	weight?: Weight;
	label?: string;
};

export const Button = ({
	variant = 'solid',
	tone = 'brand',
	size = 'md',
	density = 'default',
	weight,
	className,
	label,
	...props
}: ButtonProps) => {
	const rootClass = clsx(
		styles.btn,
		styles[variant],
		styles[tone],
		styles[`size${size}`],
		weight && styles[weight],
		density !== 'default' && styles[density],
		className
	);

	return <PButton unstyled className={rootClass} {...props} label={label} />;
};
