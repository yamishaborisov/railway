import { forwardRef, type ForwardRefExoticComponent } from 'react';
import { PrimaryInput } from './primary';
import { CodeInput } from './code';
import { VisaInput } from './visa';
import type { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ variant = 'primary', ...props }, ref) => {
		const InputComponent = inputs[variant];

		return <InputComponent {...props} variant={variant} ref={ref} />;
	}
);

const inputs: Record<
	NonNullable<InputProps['variant']>,
	ForwardRefExoticComponent<any>
> = {
	primary: PrimaryInput,
	code: CodeInput,
	visa: VisaInput,
};
