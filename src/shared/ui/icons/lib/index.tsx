import { type JSX, type ReactElement } from 'react'

type IconProps<T> = {
    size?: number | string
    fill?: string
    strokeWidth?: number
    className?: string
} & T

export type IconType<T> = (props: IconProps<T>) => ReactElement | null

export const withDefaultProps =
    <T extends any>(Icon: IconType<T>) =>
    ({ size = 16, fill = 'currentColor', ...props }: IconProps<T>): JSX.Element => (
        <Icon size={size} fill={fill} {...(props as IconProps<T>)} />
    )
