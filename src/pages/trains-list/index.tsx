import { PromoCard, Header, Footer, TrainResult } from '@/widgets';
import { demoFares } from './mock';
import {
	TripSearchForm,
	type TripSearchFormValue,
} from '@/features/trip-search-form/ui';
import styles from './styles.module.scss';

export const TrainsList = () => {
	const handleSearch = (form: TripSearchFormValue) => {
		console.log('Search form:', form);
	};

	return (
		<div className={styles.page}>
			<Header />

			<main className={styles.main}>
				<section className={styles.sectionTop}>
					<h1 className={styles.title}>Search Results</h1>
					<TripSearchForm onSubmit={handleSearch} />
				</section>

				<section className={styles.middleSection}>
					<PromoCard
						title='Planning your holidays'
						image='/images/holidays-bg.jpg'
					/>
					<PromoCard
						title='Train tourism packages'
						image='/images/promo-train-bg.jpg'
					/>
					<p className={styles.aboutTrains}>
						Our trains don't just transport people, they transport emotions and
						stories! From the mountains of Darjeeling to the beaches of Goa, we
						connect more than just stations. As Raj Koothrappali would say, "In
						India, we don't just ride trains, we experience cosmic journeys with
						occasional cow delays." Book now and embrace the colorful chaos!
					</p>
				</section>

				<section className={styles.sectionOffers}>
					<h3 className={styles.sectionOffersTitle}>Available Trains</h3>
					<TrainResult
						fares={demoFares}
						title='22426 – VANDE BHARAT'
						runsOn='Everyday'
						from={{
							date: 'Nov 16',
							time: '11:25 pm',
							location: 'New Delhi – NDLS',
						}}
						to={{ date: 'Nov 17', time: '7:25 am', location: 'Lucknow – LJN' }}
						duration='8 hours'
					/>

					<TrainResult
						fares={demoFares}
						title='22426 – VANDE BHARAT'
						runsOn='Everyday'
						from={{
							date: 'Nov 16',
							time: '11:25 pm',
							location: 'New Delhi – NDLS',
						}}
						to={{ date: 'Nov 17', time: '7:25 am', location: 'Lucknow – LJN' }}
						duration='8 hours'
					/>
					<TrainResult
						fares={demoFares}
						title='22426 – VANDE BHARAT'
						runsOn='Everyday'
						from={{
							date: 'Nov 16',
							time: '11:25 pm',
							location: 'New Delhi – NDLS',
						}}
						to={{ date: 'Nov 17', time: '7:25 am', location: 'Lucknow – LJN' }}
						duration='8 hours'
					/>
				</section>
			</main>

			<Footer />
		</div>
	);
};
