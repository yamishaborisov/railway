import clsx from 'clsx';
import { type ReactNode } from 'react';
import styles from './styles.module.scss';

type CardProps = {
	children: ReactNode;
	size?: 'normal' | 'mobile' | 'mini' | 'label';
	credit?: boolean;
	border?: 'none' | 'solid' | 'dashed' | 'primary';
	bg?: 'white' | 'grey' | 'red' | 'green' | 'yellow' | 'purple';
	className?: string;
	id?: string;
};

export const Card = ({
	children,
	size = 'normal',
	credit = false,
	border = 'solid',
	bg = 'white',
	className,
	id,
}: CardProps) => (
	<div
		id={id}
		className={clsx(
			styles[size],
			credit === true && styles.credit,
			styles[`bg-${bg}`],
			styles[`bd-${border}`],
			className
		)}
	>
		{children}
	</div>
);
