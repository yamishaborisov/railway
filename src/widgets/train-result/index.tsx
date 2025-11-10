import { Card, Button } from '@/shared/ui';
import { type FareOption } from '@/entities/fare-option/model';
import { FareOptionCard } from '@/entities/';
import clsx from 'clsx';
import styles from './styles.module.scss';

type LegInfo = {
	date: string;
	time: string;
	location: string;
};

type FareItem = {
	option: FareOption;
	bg: 'green' | 'yellow' | 'red';
};

type TrainResultCardProps = {
	title: string;
	runsOn?: string;
	from: LegInfo;
	to: LegInfo;
	duration?: string;
	fares: FareItem[];
	className?: string;
};

export const TrainResult = ({
	title,
	runsOn = 'Everyday',
	from,
	to,
	duration = '',
	fares,
	className,
}: TrainResultCardProps) => {
	return (
		<Card
			size='normal'
			border='solid'
			bg='white'
			className={clsx(styles.card, className)}
		>
			<header className={styles.header}>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.runs}>
					<span className={styles.runsLabel}>Runs on</span>
					<Button
						size='sm'
						variant='outline'
						tone='brand'
						weight='regular'
						children={runsOn}
					/>
				</div>
			</header>
			<section className={styles.legs}>
				<div className={styles.leg}>
					<div className={styles.date}>{from.date}</div>
					<div className={styles.time}>{from.time}</div>
					<div className={styles.loc}>{from.location}</div>
				</div>

				<div className={styles.duration} aria-label='duration'>
					{duration}
				</div>

				<div className={styles.leg} style={{ textAlign: 'right' }}>
					<div className={styles.date}>{to.date}</div>
					<div className={styles.time}>{to.time}</div>
					<div className={styles.loc}>{to.location}</div>
				</div>
			</section>

			<section className={styles.fares}>
				{fares.map(f => (
					<div className={styles.FOCwrapper}>
						<FareOptionCard
							key={f.option.classCode}
							option={f.option}
							bg={f.bg}
						/>
					</div>
				))}
			</section>
		</Card>
	);
};
