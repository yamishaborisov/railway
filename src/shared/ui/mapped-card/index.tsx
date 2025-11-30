import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Card } from '@/shared'
import styles from './styles.module.scss'

type RowProps = {
    keyText: ReactNode
    valueText: ReactNode
}

type MappedCardProps = {
    top: RowProps
    bottom: RowProps
    bg: 'green' | 'yellow' | 'red'
    className?: string
}

export const MappedCard = ({ top, bottom, bg, className }: MappedCardProps) => {
    return (
        <Card size="mini" bg={bg} border="none" className={clsx(styles.card, className)}>
            <div className={styles.rowTop}>
                <span className={styles.key}>{top.keyText}</span>
                <span className={styles.value}>{top.valueText}</span>
            </div>

            <div className={styles.rowBottom}>
                <span className={styles.key}>{bottom.keyText}</span>
                <span className={styles.value}>{bottom.valueText}</span>
            </div>
        </Card>
    )
}
