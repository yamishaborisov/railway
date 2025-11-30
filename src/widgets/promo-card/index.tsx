import { Card, Icons } from '@/shared'
import styles from './styles.module.scss'

type PromoCardProps = {
    title: string
    image: string
}

export const PromoCard = ({ title, image }: PromoCardProps) => {
    return (
        <Card border="none" bg="white" size="normal" className={styles.card}>
            <div className={styles.inner}>
                <img src={image} alt={title} className={styles.image} />
                <div className={styles.overlay}>
                    <span className={styles.title}>{title}</span>
                    <Icons.Arrow size={10} className={styles.arrow} />
                </div>
            </div>
        </Card>
    )
}
