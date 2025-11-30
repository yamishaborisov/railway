import { forwardRef } from 'react'
import { CodeInput } from './code'
import { PrimaryInput } from './primary'
import type { InputProps } from './types'
import { VisaInput } from './visa'

const inputs = {
    primary: PrimaryInput,
    code: CodeInput,
    visa: VisaInput,
} as const

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ variant = 'primary', ...props }, ref) => {
        const Component = inputs[variant]

        return <Component {...props} ref={ref} />
    },
)
