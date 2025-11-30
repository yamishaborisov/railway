import { Button, Card, Icons } from '@/shared'
import s from './styles.module.scss'
import { type Offer } from './types'

type OffersProps = {
    title?: string
    offers: Offer[]
    onApply?: (offer: Offer) => void
    onRemove?: (offer: Offer) => void
    className?: string
}

export function Offers({ title = 'Offers', offers, onApply, onRemove }: OffersProps) {
    return (
        <article aria-label={title}>
            <Card size="normal" bg="white" border="dashed" className={s.box}>
                <h3 className={s.header}>{title}</h3>

                <ul className={s.list}>
                    {offers.map((o) => {
                        const action = o.applied ? 'Remove' : 'Apply'
                        const handleClick = () => (o.applied ? onRemove?.(o) : onApply?.(o))

                        return (
                            <li key={o.id} className={s.item}>
                                <div className={s.textWrapper}>
                                    <Icons.Offer size={20} />
                                    <div className={s.text}>
                                        <span className={s.desc}>{o.description}</span>
                                        <span className={s.code}>
                                            {' '}
                                            | Use code <b>{o.code}</b>
                                        </span>
                                    </div>
                                </div>

                                <Button
                                    type="button"
                                    onClick={handleClick}
                                    size="md"
                                    variant="ghost"
                                    tone={o.applied ? 'danger' : 'brand'}
                                    aria-label={`${action} code ${o.code}`}
                                >
                                    {action}
                                </Button>
                            </li>
                        )
                    })}
                </ul>
            </Card>
        </article>
    )
}
