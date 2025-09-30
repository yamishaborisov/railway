// src/shared/ui/DateInput/DateInput.tsx
import { useState } from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputMask, type InputMaskChangeEvent } from 'primereact/inputmask';

type DateInputProps = {
	placeholder?: string;
};

export const DateInput = ({
	placeholder = 'dd/mm/yyyy',
	...props
}: DateInputProps) => {
	const [value, setValue] = useState<string | null>(null);

	return (
		<IconField iconPosition='left'>
			<InputIcon>
				<img src='/images/calendar.svg' alt='' aria-hidden />
			</InputIcon>

			<InputMask
				value={value}
				onChange={(e: InputMaskChangeEvent) => setValue(e.value ?? null)} // e.value: string | null
				mask='99/99/9999'
				placeholder={placeholder}
				// slotChar={placeholder}
			/>
		</IconField>
	);
};
