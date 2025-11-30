import clsx from 'clsx'
import {
    AutoComplete,
    type AutoCompleteChangeEvent,
    type AutoCompleteCompleteEvent,
} from 'primereact/autocomplete'
import { useId, useState } from 'react'
import styles from './styles.module.scss'

export type Option = { label: string; value: string }

type InputListProps = {
    value: Option | null
    onChange: (value: Option | null) => void
    items: Option[]
    label?: string
    placeholder?: string
    className?: string
    inputClassName?: string
    whiteLabel?: boolean
}

export const InputList = ({
    value,
    onChange,
    items,
    label,
    placeholder,
    className,
    inputClassName,
    whiteLabel = false,
}: InputListProps) => {
    const [suggestions, setSuggestions] = useState<Option[]>([])

    const id = useId()

    const handleComplete = (e: AutoCompleteCompleteEvent) => {
        const q = e.query.trim().toLowerCase()

        const filtered = !q ? items : items.filter((item) => item.label.toLowerCase().includes(q))

        setSuggestions(filtered)
    }

    const handleChange = (e: AutoCompleteChangeEvent) => {
        onChange(e.value as Option | null)
    }

    return (
        <article className={clsx(styles.article, className)}>
            <label className={clsx(styles.label, whiteLabel && styles.labelWhite)} htmlFor={id}>
                {label}
            </label>
            <AutoComplete
                id={id}
                className={clsx(styles.input, inputClassName)}
                value={value}
                suggestions={suggestions}
                completeMethod={handleComplete}
                onChange={handleChange}
                field="label"
                panelStyle={{ marginTop: '12px' }}
                onDropdownClick={() => setSuggestions(items)}
                placeholder={placeholder}
            />
        </article>
    )
}
