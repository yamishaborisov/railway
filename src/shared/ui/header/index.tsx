import styles from './styles.module.scss';
import clsx from 'clsx';

type HeaderProps = {
	bg?: 'light' | 'dark';
};

export const Header = ({ bg = 'light', ...props }: HeaderProps) => {
	return (
		<div className={clsx(styles.headerWrapper, styles[bg])}>
			<header>
				<a className={styles.headerBrand} href='#'>
					<img src='/public/images/railway.svg' className={styles.headerLogo} />

					<span className={styles.headerBrandName}>Railway</span>
				</a>

				<nav className={styles.headerNav}>
					<ul className={styles.headerNavList}>
						<li className={styles.headerNavItem}>
							<a href='#' className={styles.headerNavLink}>
								Mobile App
							</a>
						</li>
						<li className={styles.headerNavItem}>
							<a href='#' className={styles.headerNavLink}>
								FAQs
							</a>
						</li>
						<li className={styles.headerNavItem}>
							<a href='#' className={styles.headerNavLink}>
								Contact
							</a>
						</li>
						<li className={styles.headerNavItem}>
							<a
								href='#'
								className={clsx(styles.headerNavLink, styles.headerCta)}
							>
								Sign Up
							</a>
						</li>
					</ul>
				</nav>
				<button
					type='button'
					className={styles.headerBurger}
					aria-label='Open menu'
				></button>
			</header>
		</div>
	);
};
