import { Card } from '../card'

type TrainResultLabelProps = {
    timing: string
    className?: string
}

export const TrainResultLabel = ({ timing, className }: TrainResultLabelProps) => {
    return (
        <Card size="label" border="primary" className={className}>
            {timing}
        </Card>
    )
}
