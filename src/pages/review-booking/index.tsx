import { BoardingDetails, Footer, Header, PassengerProfile } from '@/widgets'

import styles from './styles.module.scss'

const boardingDetailsData = {
    title: '22426 – VANDE BHARAT',
    from: {
        date: 'Nov 16',
        time: '11:25 pm',
        location: 'New Delhi – NDLS',
    },
    to: {
        date: 'Nov 17',
        time: '7:25 am',
        location: 'Lucknow – LJN',
    },
    duration: '8 hours',
    classInfo: 'Class 2A & Tatkal Quota',
} as const

export const ReviewBooking = () => {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <section className={styles.sectionTop}>
                    <h1 className={styles.title}>Review your booking</h1>
                    <BoardingDetails {...boardingDetailsData} />
                    <PassengerProfile />
                </section>
            </main>
            <Footer />
        </div>
    )
}
