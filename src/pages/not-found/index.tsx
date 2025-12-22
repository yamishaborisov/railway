import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/shared/ui'
import { Header } from '@/widgets'
import styles from './styles.module.scss'

export const NotFoundPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate({ to: '/' })
    }

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.errorCode}>
                    <span className={styles.four}>4</span>
                    <img className={styles.ghost} src="/images/not-found.png" alt="Ghost" />
                    <span className={styles.four}>4</span>
                </div>
                <h1 className={styles.title}>Boo! Page missing!</h1>
                <p className={styles.subtitle}>
                    Whoops! This page must be a ghost - it's not here!
                </p>
                <Button size="lg" weight="bold" className={styles.button} onClick={handleClick}>
                    Find shelter
                </Button>
            </main>
        </div>
    )
}
