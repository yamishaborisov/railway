import { Counter, Icons, RadioBtn } from '@/shared'
import styles from './styles.module.scss'

export type TripVariant = 'round' | 'one-way'

type TripBarProps = {
    variantD: 'desktop' | 'mobile'
    tripVariant: TripVariant
    onTripVariantChange: (value: TripVariant) => void
    passengers: number
    onPassengersChange: (value: number) => void
}

export const TripBar = ({
    variantD,
    tripVariant,
    onTripVariantChange,
    passengers,
    onPassengersChange,
}: TripBarProps) => {
    return (
        <article className={styles.article}>
            <RadioBtn
                name="trip-variant"
                value="round"
                label="Round trip"
                checked={tripVariant === 'round'}
                onChange={(v) => onTripVariantChange(v as TripVariant)}
            />
            <RadioBtn
                name="trip-variant"
                value="one-way"
                label="One way"
                checked={tripVariant === 'one-way'}
                onChange={(v) => onTripVariantChange(v as TripVariant)}
            />

            <div className={styles.inputCounterGroup}>
                <Icons.Person size={32} fill="var(--primary-blue)" className={styles.personImg} />
                <Counter
                    value={passengers}
                    onChange={onPassengersChange}
                    min={1}
                    max={9}
                    className={styles.counterSmall}
                />
            </div>
        </article>
    )
}
