import {
	useState,
	useRef,
	useEffect,
	type MouseEvent,
	type PointerEvent as ReactPointerEvent,
} from 'react';
import clsx from 'clsx';
import { OverlayPanel } from 'primereact/overlaypanel';
import type { OverlayPanel as OverlayPanelRef } from 'primereact/overlaypanel';
import { Calendar, type CalendarViewChangeEvent } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

import { Button } from '../button';
import { dateFmt, startOfMonth } from '../..//lib/constants/date';
import type { DateRange } from './types';
import styles from './styles.module.scss';

type DateRangeInputProps = {
	value: DateRange;
	onChange: (value: DateRange) => void;

	placeholderFrom?: string;
	placeholderTo?: string;

	className?: string;
	label?: string;
	inputClassName?: 'mobile' | 'desktop';
};

addLocale('one-letter-monday', {
	firstDayOfWeek: 1,
	dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
});

export const DateInput = ({
	value,
	onChange,
	placeholderFrom = 'Depart',
	placeholderTo = 'Return',
	className,
	inputClassName,
	label,
}: DateRangeInputProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const op = useRef<OverlayPanelRef>(null);

	const [draft, setDraft] = useState<Date[] | null>(null);

	const [viewDate, setViewDate] = useState<Date>(() =>
		startOfMonth(new Date())
	);

	const [isOpen, setIsOpen] = useState(false);
	const selectingRef = useRef(false);

	useEffect(() => {
		const onDocPointerDown = (ev: PointerEvent) => {
			const wrap = wrapperRef.current;
			if (!wrap) return;
			if (!wrap.contains(ev.target as Node)) {
				op.current?.hide();
				setIsOpen(false);
			}
		};

		document.addEventListener('pointerdown', onDocPointerDown);
		return () => document.removeEventListener('pointerdown', onDocPointerDown);
	}, []);

	const openPanel = (e: ReactPointerEvent<HTMLInputElement>) => {
		const anchor = wrapperRef.current ?? (e.currentTarget as HTMLElement);
		op.current?.show(e as unknown as MouseEvent, anchor);

		const base = value.from ?? new Date();
		setViewDate(startOfMonth(base));

		const arr: Date[] = [];
		if (value.from) arr.push(value.from);
		if (value.to) arr.push(value.to);
		setDraft(arr.length ? arr : null);

		requestAnimationFrame(() => op.current?.align?.());
	};

	const onCalendarChange = (e: any) => {
		selectingRef.current = true;
		setDraft(e.value as Date[] | null);
		setTimeout(() => {
			selectingRef.current = false;
		}, 0);
	};

	const normalizeDraftToRange = (
		draft: Date[] | null
	): { from: Date | null; to: Date | null } => {
		if (!draft || draft.length === 0) return { from: null, to: null };

		const firstPick = draft[0];
		const secondPick = draft[1];

		if (!secondPick) return { from: firstPick, to: null };

		return firstPick <= secondPick
			? { from: firstPick, to: secondPick }
			: { from: secondPick, to: firstPick };
	};

	const handleApply = () => {
		const { from, to } = normalizeDraftToRange(draft);
		onChange({ from, to });
		setIsOpen(false);
		op.current?.hide();
	};

	const handleReset = () => {
		setDraft(null);
		onChange({ from: null, to: null });
	};

	const calendarFooter = () => (
		<div className={styles.calendarFooter}>
			<Button size='sm' variant='ghost' tone='neutral' onClick={handleReset}>
				Reset
			</Button>
			<Button size='sm' onClick={handleApply}>
				Apply
			</Button>
		</div>
	);

	const shownFrom = isOpen ? draft?.[0] ?? value.from : value.from;
	const shownTo = isOpen ? draft?.[1] ?? value.to : value.to;

	const handleViewDateChange = (e: CalendarViewChangeEvent) => {
		if (!selectingRef.current) {
			setViewDate(startOfMonth(e.value as Date));
		}
	};

	return (
		<article
			ref={wrapperRef}
			className={clsx(styles.dateInputWrapper, className)}
		>
			{label && <div className={styles.label}>{label}</div>}

			<div className={styles.inputsRow}>
				<div className={styles.inputCol}>
					<input
						placeholder={placeholderFrom}
						className={clsx(
							styles.input,
							inputClassName && styles[inputClassName]
						)}
						onPointerDown={openPanel}
						readOnly
						value={shownFrom ? dateFmt.format(shownFrom) : ''}
					/>
				</div>

				<div className={styles.inputCol}>
					<input
						placeholder={placeholderTo}
						className={clsx(
							styles.input,
							inputClassName && styles[inputClassName]
						)}
						onPointerDown={openPanel}
						readOnly
						value={shownTo ? dateFmt.format(shownTo) : ''}
					/>
				</div>
			</div>

			<OverlayPanel
				ref={op}
				dismissable={false}
				showCloseIcon={false}
				appendTo='self'
				onShow={() => setIsOpen(true)}
			>
				<Calendar
					locale='one-letter-monday'
					inline
					numberOfMonths={2}
					showOtherMonths={false}
					selectionMode='range'
					value={draft}
					onChange={onCalendarChange}
					footerTemplate={calendarFooter}
					viewDate={viewDate}
					onViewDateChange={handleViewDateChange}
				/>
			</OverlayPanel>
		</article>
	);
};
