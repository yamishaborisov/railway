import clsx from 'clsx';
import s from './styles.module.scss';
import { Button } from '../button';

export type Offer = {
	id: string;
	description: string;
	code: string;
	applied?: boolean;
};

export type OffersProps = {
	title?: string;
	offers: Offer[];
	onApply?: (offer: Offer) => void;
	onRemove?: (offer: Offer) => void;
	className?: string;
};

export function Offers({
	title = 'Offers',
	offers,
	onApply,
	onRemove,
}: OffersProps) {
	return (
		<article className={s.box} aria-label={title}>
			<h3 className={s.header}>{title}</h3>

			<ul className={s.list}>
				{offers.map(o => {
					const action = o.applied ? 'Remove' : 'Apply';
					const handleClick = () => (o.applied ? onRemove?.(o) : onApply?.(o));

					return (
						<li key={o.id} className={s.item}>
							<div className={s.textWrapper}>
								<span className={s.icon} aria-hidden='true'>
									<img src='/images/offer.svg' alt='' />
								</span>

								<div className={s.text}>
									<span className={s.desc}>{o.description}</span>
									<span className={s.code}>
										{' '}
										| Use code <b>{o.code}</b>
									</span>
								</div>
							</div>

							<Button
								type='button'
								onClick={handleClick}
								size='md'
								variant='ghost'
								tone={o.applied ? 'danger' : 'brand'}
								aria-label={`${action} code ${o.code}`}
							>
								{action}
							</Button>
						</li>
					);
				})}
			</ul>
		</article>
	);
}

export const demoOffers: Offer[] = [
	{
		id: 'o1',
		description: '50% off up to ₹100',
		code: 'BOOKNOW',
		applied: true,
	},
	{ id: 'o2', description: '20% off', code: 'FIRSTTIME' },
];
