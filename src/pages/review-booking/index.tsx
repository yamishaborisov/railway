import { ApplyCode } from '@/entities/apply-code'
import { ExtraBaggage } from '@/entities/extra-baggage'
import { MealCard } from '@/entities/meal-card'
import { mealsMock } from '@/entities/meal-card/mock'
import { Button } from '@/shared'
import { BoardingDetails, Footer, Header, Offers, PassengerProfile } from '@/widgets'
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
                <section className={styles.mealsSection}>
                    <div className={styles.mealsWrapper}>
                        {mealsMock.map((meal) => (
                            <MealCard
                                key={meal.title}
                                {...meal}
                                onAddToTicket={() => console.debug('added:', meal.title)}
                            />
                        ))}
                    </div>

                    <Button className={styles.viewBtn} size="md" variant="ghost">
                        View more
                    </Button>
                </section>
                <section className={styles.offersSection}>
                    <Offers className={styles.offers} offers={demoOffers} />
                </section>
                <section className={styles.promoSection}>
                    <ApplyCode />
                    <ExtraBaggage />
                </section>
            </main>
            <Footer />
        </div>
    )
}
