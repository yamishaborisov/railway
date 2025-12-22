import { QRCard } from '@/entities'
import { BoardingDetails, Footer, Header } from '@/widgets'
import styles from './styles.module.scss'

const boardingDetailsData = {
    variant: 'confirmation',
    pnr: '1234567890',
    transactionId: '351511859256378',
    totalFare: 1744,
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
    traveller: {
        name: 'Raj Koothrappali',
        age: 24,
        items: [
            { label: 'Booking Status', value: 'Confirmed (CNF)' },
            { label: 'Seat/Coach no.', value: 'Class 2A & Tatkal Quota' },
            { label: 'Extra Baggage', value: 1 },
            { label: 'Paneer Tikka Rice Bowl - Mini', value: 1 },
        ],
        email: 'Koothrappali@gmail.com',
    },
} as const

export const BookedInfo = () => {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <section className={styles.sectionTop}>
                    <img className={styles.successImg} src="/images/success.png" alt="success" />
                    <h1 className={styles.title}>
                        Congratulations! <br /> You have successfully booked tickets
                    </h1>
                </section>
                <div className={styles.details}>
                    <BoardingDetails {...boardingDetailsData} />
                </div>

                <div className={styles.qr}>
                    <QRCard />
                </div>
                <nav className={styles.links}>
                    <a href="#" className={styles.link}>
                        Cancellation Policy
                    </a>
                    <a href="#" className={styles.link}>
                        Terms & Conditions
                    </a>
                    <a href="#" className={styles.link}>
                        Travel Insurance
                    </a>
                </nav>
            </main>
            <Footer />
        </div>
    )
}
