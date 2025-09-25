import { type JSX } from 'react';
import { PrimaryInput } from './primary';
import { CodeInput } from './code';
import { VisaInput } from './visa';
import type { InputProps } from './types';

export const Input = ({ variant = 'primary', ref, ...props }: InputProps) => {
	const InputComponent = inputs[variant];

	return <InputComponent {...props} variant={variant} ref={ref} />;
};

const inputs: Record<
	NonNullable<InputProps['variant']>,
	(p: any) => JSX.Element
> = {
	primary: PrimaryInput,
	code: CodeInput,
	visa: VisaInput,
};
