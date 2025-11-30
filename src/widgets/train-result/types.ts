import { type FareOption } from '@/entities/fare-option/model'

export type LegInfo = {
    date: string
    time: string
    location: string
}

export type FareItem = {
    option: FareOption
    bg: 'green' | 'yellow' | 'red'
}
