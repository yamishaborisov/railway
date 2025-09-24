import type { InputHTMLAttributes } from 'react';

export type InputProps = {
	variant?: 'primary' | 'code' | 'visa';
	label?: string;
	error?: string;
	success?: string;
	inputClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
