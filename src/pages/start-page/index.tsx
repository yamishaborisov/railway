import { useNavigate } from '@tanstack/react-router'
import { type TripSearchFormValue } from '@/features/trip-search-form/model/types'
import { TripSearchForm } from '@/features/trip-search-form/ui'
import { Header } from '@/widgets'
import styles from './styles.module.scss'

export const StartPage = () => {
    const navigate = useNavigate()

    const handleSubmit = (value: TripSearchFormValue) => {
        navigate({ to: '/trains' })
    }
    return (
        <div className={styles.page}>
            <Header bg="dark" />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Let's Find That Ticket</h1>
                    <p className={styles.p}>before someone else does</p>
                    <div className={styles.formWrap}>
                        <TripSearchForm whiteLabel={true} onSubmit={handleSubmit} />
                    </div>
                </section>
            </main>
        </div>
    )
}
