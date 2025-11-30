import { atom, useAtom } from 'jotai'
import { CityInput } from '@/entities/cities-input'
import { Button, DateInput } from '@/shared'
import { TripBar } from '@/widgets'
import { tripSearchFormAtom } from '../model/atoms'
import { type TripSearchFormValue } from '../model/types'
import styles from './styles.module.scss'

type TripSearchFormProps = {
    onSubmit?: (value: TripSearchFormValue) => void
    whiteLabel?: boolean
}

export const TripSearchForm = ({ onSubmit, whiteLabel = false }: TripSearchFormProps) => {
    const [form, setForm] = useAtom(tripSearchFormAtom)

    const handleSubmit = () => {
        onSubmit?.(form)
    }

    return (
        <div className={styles.sectionTop}>
            <TripBar
                variantD="desktop"
                tripVariant={form.tripVariant}
                onTripVariantChange={(nextVariant) =>
                    setForm((prev) => ({ ...prev, tripVariant: nextVariant }))
                }
                passengers={form.passengers}
                onPassengersChange={(nextPassengers) =>
                    setForm((prev) => ({ ...prev, passengers: nextPassengers }))
                }
            />

            <div className={styles.inputListWrap}>
                <CityInput
                    label="Departure"
                    placeholder="Your City/Station"
                    className={styles.inputList}
                    value={form.fromCity}
                    onChange={(nextCity) => setForm((prev) => ({ ...prev, fromCity: nextCity }))}
                    whiteLabel={whiteLabel}
                />

                <CityInput
                    label="Arrival"
                    placeholder="Where to?"
                    className={styles.inputList}
                    value={form.toCity}
                    onChange={(nextCity) => setForm((prev) => ({ ...prev, toCity: nextCity }))}
                    whiteLabel={whiteLabel}
                />
            </div>

            <DateInput
                label="Pick your lucky day"
                className={styles.dateInput}
                inputClassName="desktop"
                value={form.dateRange}
                onChange={(nextRange) => setForm((prev) => ({ ...prev, dateRange: nextRange }))}
            />

            <Button
                variant="solid"
                tone="brand"
                size="lg"
                density="wide"
                weight="bold"
                onClick={handleSubmit}
            >
                Ticket, Please!
            </Button>
        </div>
    )
}
