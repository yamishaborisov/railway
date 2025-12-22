import clsx from 'clsx'
import { RadioButton } from 'primereact/radiobutton'
import { useId } from 'react'
import styles from './styles.module.scss'

type RadioBtnProps = {
    name: string
    value: string
    label: string
    checked: boolean
    onChange: (value: string) => void
    className?: string
    labelClassName?: string
    type?: 'usual' | 'payment'
}

export const RadioBtn = ({
    name,
    value,
    label,
    checked,
    onChange,
    className,
    labelClassName,
    type,
}: RadioBtnProps) => {
    const id = useId()

    return (
        <div className={clsx(styles.root, type === 'payment' && styles.payment, className)}>
            <div className={styles.item}>
                <RadioButton
                    inputId={id}
                    name={name}
                    value={value}
                    variant="filled"
                    onChange={(e) => onChange(e.value)}
                    checked={checked}
                />
                <label className={clsx(styles.label, labelClassName)} htmlFor={id}>
                    {label}
                </label>
            </div>
        </div>
    )
}
