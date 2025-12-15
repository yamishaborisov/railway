import { ActionCard, Button } from '@/shared'
import styles from './styles.module.scss'

type ExtraBaggageProps = {
    className?: string
}

export const ExtraBaggage = ({ className }: ExtraBaggageProps) => {
    return (
        <ActionCard title="Extra Baggage" className={className}>
            <Button size="md" variant="outline" className={styles.button}>
                Add to ticket
            </Button>
        </ActionCard>
    )
}
