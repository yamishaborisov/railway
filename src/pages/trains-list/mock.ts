import { type FareOption } from '@/entities/fare-option/model'

type LegInfo = {
    date: string
    time: string
    location: string
}

export type TrainResultMock = {
    id: string
    title: string
    runsOn?: string
    from: LegInfo
    to: LegInfo
    duration?: string
    fares: typeof demoFares
}

export const demoFares: Array<{
    option: FareOption
    bg: 'green' | 'yellow' | 'red'
}> = [
    {
        option: {
            classCode: '3A',
            status: 'AVL',
            count: 46,
            quota: 'TQ',
            price: 800,
        },
        bg: 'green',
    },
    {
        option: {
            classCode: '2A',
            status: 'AVL',
            count: 6,
            quota: 'TQ',
            price: 1000,
        },
        bg: 'yellow',
    },
    {
        option: {
            classCode: '1A',
            status: 'WL',
            count: 36,
            quota: 'TQ',
            price: 1200,
        },
        bg: 'red',
    },
]

export const demoTrains: TrainResultMock[] = [
    {
        id: '22426-1',
        title: '22426 – VANDE BHARAT',
        runsOn: 'Everyday',
        from: {
            date: 'Nov 16',
            time: '11:25 pm',
            location: 'New Delhi – NDLS',
        },
        to: {
            date: 'Nov 17',
            time: '7:25 am',
            location: 'Lucknow – LJN',
        },
        duration: '8 hours',
        fares: demoFares,
    },
    {
        id: '22426-2',
        title: '22426 – VANDE BHARAT',
        runsOn: 'Everyday',
        from: {
            date: 'Nov 16',
            time: '11:25 pm',
            location: 'New Delhi – NDLS',
        },
        to: {
            date: 'Nov 17',
            time: '7:25 am',
            location: 'Lucknow – LJN',
        },
        duration: '8 hours',
        fares: demoFares,
    },
    {
        id: '22426-3',
        title: '22426 – VANDE BHARAT',
        runsOn: 'Everyday',
        from: {
            date: 'Nov 16',
            time: '11:25 pm',
            location: 'New Delhi – NDLS',
        },
        to: {
            date: 'Nov 17',
            time: '7:25 am',
            location: 'Lucknow – LJN',
        },
        duration: '8 hours',
        fares: demoFares,
    },
]

export const promoCardsMock = [
    {
        id: 'holidays',
        title: 'Planning your holidays',
        image: '/images/holidays-bg.jpg',
    },
    {
        id: 'tourism',
        title: 'Train tourism packages',
        image: '/images/promo-train-bg.jpg',
    },
]
