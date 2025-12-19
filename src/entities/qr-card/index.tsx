import { Button, Card } from '@/shared'
import styles from './styles.module.scss'

export const QRCard = () => {
    return (
        <Card size="normal" bg="white" border="solid" className={styles.card}>
            <img src="/images/qr.png" alt="QR code" className={styles.qr} />
            <div className={styles.buttons}>
                <Button size="lg" variant="solid">
                    Book another ticket
                </Button>
                <Button size="lg" variant="solid">
                    Download Ticket
                </Button>
            </div>
        </Card>
    )
}
