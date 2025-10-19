import type { InputHTMLAttributes, Ref } from 'react';

export type InputProps = {
	variant?: 'primary' | 'code' | 'visa';
	label?: string;
	error?: string;
	success?: string;
	inputClassName?: string;
	ref?: Ref<HTMLInputElement>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
