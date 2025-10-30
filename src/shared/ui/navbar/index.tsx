import styles from './styles.module.css';
import clsx from 'clsx';

type NavbarProps = {
	variant: 'desktop' | 'mobile';
};

export const Navbar = ({ variant, ...props }: NavbarProps) => {
	return (
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
					<a href='#' className={clsx(styles.headerNavLink, styles.headerCta)}>
						Sign Up
					</a>
				</li>
			</ul>
		</nav>
	);
	// <button
	// 	type='button'
	// 	className={styles.headerBurger}
	// 	aria-label='Open menu'
	// ></button>
};
