import { forwardRef } from 'react';
import { PrimaryInput } from './primary';
import { CodeInput } from './code';
import { VisaInput } from './visa';
import type { InputProps, InputVariant, BaseInputProps } from './types';

const inputs = {
	primary: PrimaryInput,
	code: CodeInput,
	visa: VisaInput,
} as const;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ variant = 'primary', ...props }, ref) => {
		const Component = inputs[variant];

		return <Component {...props} ref={ref} />;
	}
);
