import { ApplyCode, ExtraBaggage } from '@/entities'
import { BillDetails, BoardingDetails, Footer, Header, Offers } from '@/widgets'
import { demoOffers } from '@/widgets/offers/mocks'
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
    traveller: {
        name: 'Raj Koothrappali',
        age: 24,
        items: [
            { label: 'Extra Baggage', value: 1 },
            { label: 'Paneer Tikka Rice Bowl - Mini', value: 1 },
        ],
        email: 'Koothrappali@gmail.com',
    },
} as const

const billItems = [
    { label: 'Base Ticket Fare', amount: 1000 },
    { label: 'Paneer Tikka Rice Bowl - Mini', amount: 180 },
    { label: 'Extra Baggage', amount: 500 },
    { label: 'CGST & SGST', amount: 500 },
    { label: 'Discount', amount: -436 },
]

export const Payment = () => {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <section className={styles.sectionTop}>
                    <h1 className={styles.title}>
                        Pay <span className={styles.price}>₹1744</span> to confirm booking
                    </h1>
                    <BoardingDetails {...boardingDetailsData} />
                    <Offers className={styles.offers} offers={demoOffers} />
                </section>
                <section className={styles.promoSection}>
                    <ApplyCode />
                    <ExtraBaggage />
                </section>
                <BillDetails items={billItems} className={styles.billDet} />
            </main>
            <Footer />
        </div>
    )
}
