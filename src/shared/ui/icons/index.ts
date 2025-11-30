import * as Interface from './ui/interface'

export type { IconType } from './lib'

export const Icons = {
    ...Interface,
}

export type IconKey = keyof typeof Icons
