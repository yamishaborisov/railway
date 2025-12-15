import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Card } from '../card'
import styles from './styles.module.scss'

type ActionCardProps = {
    title: string
    children: ReactNode
    className?: string
}

export const ActionCard = ({ title, children, className }: ActionCardProps) => {
    return (
        <Card bg="white" border="solid" size="normal" className={clsx(styles.card, className)}>
            <div className={styles.wrapper}>
                <p className={styles.title}>{title}</p>
                {children}
            </div>
        </Card>
    )
}
