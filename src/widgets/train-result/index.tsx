import clsx from 'clsx'
import { FareOptionCard } from '@/entities/'
import { Button, Card } from '@/shared'
import styles from './styles.module.scss'
import { type FareItem, type LegInfo } from './types'

type TrainResultCardProps = {
    title: string
    runsOn?: string
    from: LegInfo
    to: LegInfo
    duration?: string
    fares: FareItem[]
    className?: string
}

export const TrainResult = ({
    title,
    runsOn = 'Everyday',
    from,
    to,
    duration = '',
    fares,
    className,
}: TrainResultCardProps) => {
    return (
        <Card size="normal" border="solid" bg="white" className={clsx(styles.card, className)}>
            <header className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.runs}>
                    <span className={styles.runsLabel}>Runs on</span>
                    <Button size="sm" variant="outline" tone="brand" weight="regular">
                        {runsOn}
                    </Button>
                </div>
            </header>
            <section className={styles.legs}>
                <div className={styles.leg}>
                    <div className={styles.date}>{from.date}</div>
                    <div className={styles.time}>{from.time}</div>
                    <div className={styles.loc}>{from.location}</div>
                </div>

                <div className={styles.duration} aria-label="duration">
                    {duration}
                </div>

                <div className={styles.leg} style={{ textAlign: 'right' }}>
                    <div className={styles.date}>{to.date}</div>
                    <div className={styles.time}>{to.time}</div>
                    <div className={styles.loc}>{to.location}</div>
                </div>
            </section>

            <section className={styles.fares}>
                {fares.map((f) => (
                    <div className={styles.FOCwrapper}>
                        <FareOptionCard key={f.option.classCode} option={f.option} bg={f.bg} />
                    </div>
                ))}
            </section>
        </Card>
    )
}
