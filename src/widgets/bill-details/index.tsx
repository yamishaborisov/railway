import clsx from 'clsx'
import { Card } from '@/shared'
import styles from './styles.module.scss'

export type BillItem = {
    label: string
    amount: number
}

export type BillDetailsProps = {
    items: BillItem[]
    currency?: string
    className?: string
}

export const BillDetails = ({ items, currency = '₹', className }: BillDetailsProps) => {
    const total = items.reduce((sum, item) => sum + item.amount, 0)

    const formatAmount = (amount: number) => {
        const isDiscount = amount < 0
        const formatted = `${currency}${Math.abs(amount).toFixed(2)}`
        return isDiscount ? `-${formatted}` : formatted
    }

    return (
        <Card size="normal" bg="white" border="solid" className={clsx(styles.card, className)}>
            <h3 className={styles.title}>Bill details</h3>
            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.label} className={styles.item}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={clsx(styles.amount, item.amount < 0 && styles.discount)}>
                            {formatAmount(item.amount)}
                        </span>
                    </li>
                ))}
            </ul>
            <div className={styles.total}>
                <span>Total Charge</span>
                <span>
                    {currency}
                    {total.toFixed(2)}
                </span>
            </div>
        </Card>
    )
}
