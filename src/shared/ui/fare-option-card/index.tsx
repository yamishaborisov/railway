import s from './styles.module.scss';
import clsx from 'clsx';

type Availability = 'AVL' | 'WL' | 'RAC' | 'LOW';
type Quota = 'GEN' | 'TQ' | 'LD' | 'PT' | 'HO';

export type FareOption = {
	classCode: '1A' | '2A' | '3A' | 'SL' | 'CC' | 'EC' | '2S';
	status: Availability;
	count?: number;
	quota?: Quota;
	price: number;
	// currency?: string;
	// selected?: boolean;
	// disabled?: boolean;
};

export const FareOptionCard = ({
	option,
	onSelect,
}: {
	option: FareOption;
	onSelect?: (c: string) => void;
}) => {
	const { classCode, status, count, quota, price } = option;
	return (
		<article
			// type='button'
			// role='radio'
			// aria-checked={!!selected}
			// disabled={disabled}
			onClick={() => onSelect?.(classCode)}
			className={clsx(
				s.card,
				classCode === '1A' && s.cardGreen,
				classCode === '2A' && s.cardAmber,
				classCode === '3A' && s.cardRed
				// selected && s.cardSelected
			)}
		>
			<div className={s.rowTop}>
				<span className={s.class}>{classCode}</span>
				<span className={s.status}>
					{status === 'AVL' ? 'Avl' : status}
					{count != null ? ` – ${String(count).padStart(3, '0')}` : ''}
				</span>
			</div>
			<div className={s.rowBottom}>
				<span className={s.rowMid}>{quota === 'TQ' ? 'Tatkal' : quota}</span>
				<span className={s.rowPrice}>₹{price}</span>
			</div>
		</article>
	);
};
