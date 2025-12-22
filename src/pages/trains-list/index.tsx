import { useNavigate } from '@tanstack/react-router'
import { type TripSearchFormValue } from '@/features/trip-search-form/model/types'
import { TripSearchForm } from '@/features/trip-search-form/ui'
import { Footer, Header, PromoCard, TrainResult } from '@/widgets'
import { demoTrains, promoCardsMock } from './mock'
import styles from './styles.module.scss'

export const TrainsList = () => {
    const handleSearch = (form: TripSearchFormValue) => {
        // console.log('Search form:', form)
    }
    const navigate = useNavigate()

    const handleClick = () => {
        navigate({ to: '/review' })
    }

    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <section className={styles.sectionTop}>
                    <h1 className={styles.title}>Search Results</h1>
                    <TripSearchForm onSubmit={handleSearch} />
                </section>

                <section className={styles.middleSection}>
                    {promoCardsMock.map((promo) => (
                        <PromoCard key={promo.id} title={promo.title} image={promo.image} />
                    ))}
                    <p className={styles.aboutTrains}>
                        Our trains don't just transport people, they transport emotions and stories!
                        From the mountains of Darjeeling to the beaches of Goa, we connect more than
                        just stations. As Raj Koothrappali would say, "In India, we don't just ride
                        trains, we experience cosmic journeys with occasional cow delays." Book now
                        and embrace the colorful chaos!
                    </p>
                </section>

                <section className={styles.sectionOffers}>
                    <h3 className={styles.sectionOffersTitle}>Available Trains</h3>

                    {demoTrains.map((train) => (
                        <TrainResult
                            key={train.id}
                            title={train.title}
                            runsOn={train.runsOn}
                            from={train.from}
                            to={train.to}
                            duration={train.duration}
                            fares={train.fares}
                            onClick={handleClick}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )
}
