import { Card } from '@/shared';
import styles from './styles.module.scss';
import clsx from 'clsx';

type BoardingPoint = {
	date: string;
	time: string;
	location: string;
};

export type BoardingDetailsProps = {
	title: string;
	from: BoardingPoint;
	to: BoardingPoint;
	duration: string;
	runsOn?: string;
	classInfo?: string;
	className?: string;
};

export const BoardingDetails = ({
	title,
	from,
	to,
	duration,
	runsOn,
	classInfo = 'Class 2A & Tatkal Quota',
	className,
}: BoardingDetailsProps) => {
	return (
		<Card
			size='normal'
			bg='purple'
			border='solid'
			className={clsx(styles.card, className)}
		>
			<header className={styles.header}>
				<h1 className={styles.head}>Boarding Details</h1>
				<div className={styles.inf}>
					<p className={styles.title}>{title}</p>
					<p className={styles.classInfo}>{classInfo}</p>
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
		</Card>
	);
};
