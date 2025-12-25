import clsx from 'clsx'
import { Card } from '@/shared'
import styles from './styles.module.scss'

type BoardingPoint = {
    date: string
    time: string
    location: string
}

type TravellerItem = {
    label: string
    value: string | number
}

type TravellerDetails = {
    name: string
    age: number
    items?: readonly TravellerItem[]
    email?: string
}

export type BoardingDetailsProps = {
    variant?: 'booking' | 'confirmation'
    title: string
    from: BoardingPoint
    to: BoardingPoint
    duration: string
    runsOn?: string
    classInfo?: string
    className?: string
    traveller?: TravellerDetails
    pnr?: string
    transactionId?: string
    totalFare?: number
}

export const BoardingDetails = ({
    variant = 'booking',
    title,
    from,
    to,
    duration,
    runsOn,
    classInfo = 'Class 2A & Tatkal Quota',
    className,
    traveller,
    pnr,
    transactionId,
    totalFare,
}: BoardingDetailsProps) => {
    const isConfirmation = variant === 'confirmation'

    return (
        <Card
            size="normal"
            bg={isConfirmation ? 'white' : 'purple'}
            border="solid"
            className={clsx(styles.card, className)}
        >
            <header className={styles.header}>
                {isConfirmation ? (
                    <p className={styles.headRow}>
                        <span>PNR No: {pnr}</span>
                        <span>Transaction ID : {transactionId}</span>
                    </p>
                ) : (
                    <h1 className={styles.head}>Boarding Details</h1>
                )}
                <div className={styles.inf}>
                    <p className={styles.title}>{title}</p>
                    {!isConfirmation && <p className={styles.classInfo}>{classInfo}</p>}
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

            {traveller && (
                <section className={styles.traveller}>
                    <h2 className={styles.travellerHead}>Traveller Details</h2>
                    <div className={styles.travellerRow}>
                        <span>{traveller.name}</span>
                        {!isConfirmation && <span>{traveller.age} Yrs</span>}
                    </div>
                    {traveller.items?.map((item) => (
                        <div
                            key={item.label}
                            className={clsx(
                                styles.travellerRow,
                                isConfirmation && styles.travellerRowInline,
                            )}
                        >
                            {isConfirmation ? (
                                <span>
                                    {item.label}: {item.value}
                                </span>
                            ) : (
                                <>
                                    <span>{item.label}</span>
                                    <span>{item.value}</span>
                                </>
                            )}
                        </div>
                    ))}
                    {traveller.email && (
                        <div className={styles.travellerEmailRow}>
                            <span>
                                E-Tickets {isConfirmation ? 'has been' : 'will be'} sent to:
                            </span>
                            <span>{traveller.email}</span>
                        </div>
                    )}
                </section>
            )}

            {isConfirmation && totalFare !== undefined && (
                <section className={styles.totalFare}>
                    <span>Total Fare</span>
                    <span>₹{totalFare.toFixed(2)}</span>
                </section>
            )}
        </Card>
    )
}
