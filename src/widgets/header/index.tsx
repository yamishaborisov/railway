import styles from './styles.module.scss';
import clsx from 'clsx';
import { HEADER_NAV } from '@/shared/lib/';

type HeaderProps = {
	className?: string;
	bg?: 'light' | 'dark';
};

export const Header = ({ className, bg = 'light', ...props }: HeaderProps) => {
	const isDark = bg === 'dark';

	const img = (name: string) => `/images/${name}${isDark ? '-white' : ''}.svg`;

	return (
		<header className={clsx(styles.header, styles[bg], className)}>
			<div className={styles.inner}>
				<a className={styles.headerBrand} href='#'>
					<img src={img('railway')} className={styles.headerLogo} />
					<span className={styles.headerBrandName}>Railway</span>
				</a>

				<nav className={styles.headerNav}>
					<ul className={styles.headerNavList}>
						{HEADER_NAV.map(item => (
							<li key={item.name} className={styles.headerNavItem}>
								<a
									href={item.link}
									className={clsx(styles.link, item.cta && styles.cta)}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<button
					type='button'
					className={clsx(
						styles.headerBurger,
						isDark ? styles.headerBurgerDark : styles.headerBurgerLight
					)}
					aria-label='Open menu'
				></button>
			</div>
		</header>
	);
};
