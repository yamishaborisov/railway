import { useRef, useState } from 'react';
import { Card, Input } from '@/shared';
import styles from './styles.module.scss';

export const PassengerProfile = () => {
	const [card, setCard] = useState({
		part1: '',
		part2: '',
		part3: '',
		part4: '',
	});

	const part1Ref = useRef<HTMLInputElement | null>(null);
	const part2Ref = useRef<HTMLInputElement | null>(null);
	const part3Ref = useRef<HTMLInputElement | null>(null);
	const part4Ref = useRef<HTMLInputElement | null>(null);

	const handleChangePart = (key: keyof typeof card) => (value: string) => {
		setCard(prev => ({ ...prev, [key]: value }));
	};

	return (
		<Card size='normal' bg='white' border='solid' className={styles.card}>
			<header className={styles.head}>
				<h3>Passenger 1</h3>
				<p className={styles.headPls}>Please enter your contact info</p>
			</header>

			<section className={styles.information}>
				<div className={styles.visaGroup}>
					<Input
						variant='primary'
						name='card-part-1'
						value={card.part1}
						label='Full Name'
						placeholder='Your name'
						onChange={handleChangePart('part1')}
						ref={part1Ref}
						inputClassName={styles.fieldInput}
					/>
					<Input
						variant='primary'
						label='Phone Number'
						placeholder='+91'
						name='card-part-2'
						value={card.part2}
						onChange={handleChangePart('part2')}
						ref={part2Ref}
						inputClassName={styles.fieldInput}
					/>
					<Input
						variant='primary'
						name='card-part-3'
						label='Email'
						placeholder='john.doe@company.com'
						value={card.part3}
						onChange={handleChangePart('part3')}
						ref={part3Ref}
						inputClassName={styles.fieldInput}
					/>
					<Input
						variant='primary'
						name='card-part-4'
						label='Date of birth'
						placeholder='12.12.1975'
						value={card.part4}
						onChange={handleChangePart('part4')}
						ref={part4Ref}
						inputClassName={styles.fieldInput}
					/>
				</div>
			</section>
		</Card>
	);
};
