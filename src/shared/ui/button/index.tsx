import {
	Button as PButton,
	type ButtonProps as PBtnProps,
} from 'primereact/button';
import clsx from 'clsx';
import styles from './styles.module.scss';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import type { Variant, Tone, Size, Density, Weight } from './types';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: Variant;
	tone?: Tone;
	size?: Size;
	density?: Density;
	weight?: Weight;
	children?: ReactNode;
};

export const Button = ({
	variant = 'solid',
	tone = 'brand',
	size = 'md',
	density = 'default',
	weight,
	className,
	children,
	...props
}: ButtonProps) => {
	const sizeKey = `size${size}` as keyof typeof styles;

	const rootClass = clsx(
		styles.btn,
		styles[variant],
		styles[tone],
		styles[sizeKey],
		weight && styles[weight],
		density !== 'default' && styles[density],
		className
	);

	return (
		<PButton
			unstyled
			className={rootClass}
			{...props}
			label={typeof children === 'string' ? children : undefined}
		/>
	);
};
