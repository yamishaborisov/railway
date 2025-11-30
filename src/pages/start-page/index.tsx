import { TripSearchForm } from '@/features/trip-search-form/ui'
import { Header } from '@/widgets'
import styles from './styles.module.scss'

export const StartPage = () => {
    return (
        <div className={styles.page}>
            <Header bg="dark" />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Let's Find That Ticket</h1>
                    <p className={styles.p}>before someone else does</p>
                    <div className={styles.formWrap}>
                        <TripSearchForm whiteLabel={true} />
                    </div>
                </section>
            </main>
        </div>
    )
}
