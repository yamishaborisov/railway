import clsx from 'clsx'
import { InputNumber } from 'primereact/inputnumber'
import styles from './styles.module.scss'

type CounterProps = {
    value: number
    onChange: (value: number) => void
    min?: number
    max?: number
    step?: number
    className?: string
}

export const Counter = ({
    value,
    onChange,
    min = 0,
    max = 9,
    step = 1,
    className,
}: CounterProps) => {
    const isAtMin = value <= min
    const isAtMax = value >= max

    return (
        <InputNumber
            value={value}
            onValueChange={(e) => onChange(e.value ?? 0)}
            showButtons
            buttonLayout="horizontal"
            incrementButtonIcon="myicon myicon-plus"
            decrementButtonIcon="myicon myicon-minus"
            step={step}
            min={min}
            max={max}
            decrementButtonClassName={clsx(
                'p-button-text',
                'p-button-plain',
                isAtMin && styles.decrementDisabled,
            )}
            incrementButtonClassName={clsx(
                'p-button-text',
                'p-button-plain',
                isAtMax && styles.incrementDisabled,
            )}
            className={clsx(className, styles.input)}
        />
    )
}
