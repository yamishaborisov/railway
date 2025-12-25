import clsx from 'clsx'
import { Button, Card } from '@/shared'
import styles from './styles.module.scss'

export type MealCardProps = {
    title: string
    price: number
    image: string
    onAddToTicket?: () => void
    className?: string
}

export const MealCard = ({ title, price, image, onAddToTicket, className }: MealCardProps) => {
    const handleClick = () => {
        onAddToTicket?.()
    }

    return (
        <div className={clsx(styles.mealCard, className)}>
            <img src={image} alt={title} className={styles.image} />

            <Card size="meal" bg="white" border="solid" className={styles.card}>
                <div className={styles.content}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.price}>₹{price.toFixed(2)}</p>

                    <Button
                        size="md"
                        variant="outline"
                        density="compact"
                        className={styles.button}
                        onClick={handleClick}
                    >
                        Add to Ticket
                    </Button>
                </div>
            </Card>
        </div>
    )
}
