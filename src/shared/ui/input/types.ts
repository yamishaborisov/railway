import type { InputHTMLAttributes } from 'react';

export type BaseInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
> & {
	label?: string;
	error?: string;
	success?: string;
	inputClassName?: string;
	value: string;
	onChange: (value: string) => void;
};

export type InputVariant = 'primary' | 'code' | 'visa';

export type InputProps = BaseInputProps & {
	variant?: InputVariant;
};
