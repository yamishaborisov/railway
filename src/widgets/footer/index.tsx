import { memo } from 'react'
import { ABOUT_LINKS, COMMUNITY_LINKS, SOCIALS_LINKS } from '@/shared'
import styles from './styles.module.scss'

export const Footer = memo(() => {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brandColumn}>
                    <a href="/" className={styles.brand}>
                        <img
                            src="/images/railway-white.png"
                            alt="Railway"
                            className={styles.logo}
                        />
                        <span className={styles.brandName}>Railway</span>
                    </a>
                </div>

                <nav className={styles.nav} aria-label="Footer navigation">
                    <div className={styles.navGroup}>
                        <h3 className={styles.navTitle}>About</h3>
                        <ul className={styles.navList}>
                            {ABOUT_LINKS.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className={styles.navLink}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.navGroup}>
                        <h3 className={styles.navTitle}>Community</h3>
                        <ul className={styles.navList}>
                            {COMMUNITY_LINKS.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className={styles.navLink}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.navGroup}>
                        <h3 className={styles.navTitle}>Socials</h3>
                        <ul className={styles.navList}>
                            {SOCIALS_LINKS.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className={styles.navLink}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <p className={styles.copy}>©2025 Railway. All rights reserved</p>
            </div>
        </footer>
    )
})
