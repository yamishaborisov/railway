import { Card } from '@/shared/ui';
import type { FareOption } from '../model';

import styles from './styles.module.scss';

type FareOptionProps = {
	option: FareOption;
	bg: 'green' | 'yellow' | 'red';
};

export const FareOptionCard = ({ option, bg }: FareOptionProps) => {
	const { classCode, status, count, quota, price } = option;
	const statusText = count != null ? `${status} – ${count}` : status;

	return (
		<Card size='mini' bg={bg} border='none' className={styles.card}>
			<div className={styles.rowTop}>
				<span className={styles.class}>{classCode}</span>
				<span className={styles.status}>{statusText}</span>
			</div>
			<div className={styles.rowBottom}>
				{/* сделал просто для ускорения процесса */}
				<span className={styles.rowMid}>
					{quota === 'TQ' ? 'Tatkal' : quota}
				</span>
				<span className={styles.rowPrice}>₹{price}</span>
			</div>
		</Card>
	);
};
