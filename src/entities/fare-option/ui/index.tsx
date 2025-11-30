import { MappedCard } from '@/shared'
import type { FareOption } from '../model'

type FareOptionProps = {
    option: FareOption
    bg: 'green' | 'yellow' | 'red'
}

export const FareOptionCard = ({ option, bg }: FareOptionProps) => {
    const { classCode, status, count, quota, price } = option
    const statusText = count != null ? `${status} – ${count}` : status
    const quotaText = quota === 'TQ' ? 'Tatkal' : quota

    return (
        <MappedCard
            bg={bg}
            top={{
                keyText: classCode,
                valueText: statusText,
            }}
            bottom={{
                keyText: quotaText,
                valueText: `₹${price}`,
            }}
        />
    )
}
