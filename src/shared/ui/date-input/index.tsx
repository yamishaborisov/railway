import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Button } from '../button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
type DateRangeInputProps = {
	// placeholder?: string;
	className?: string;
	// label?: string;
	inputClassName?: 'mobile' | 'desktop';
};
addLocale('one-letter-monday', {
	firstDayOfWeek: 1,
	dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
});

const dateFmt = new Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
});
const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
type Range = { from: Date | null; to: Date | null };
export const DateInput = ({
	// placeholder,
	className,
	inputClassName,
}: // label,
DateRangeInputProps) => {
	// const departId = useId();
	// const returnId = useId();
	const wrapperRef = useRef<HTMLDivElement>(null);
	const op = useRef<any>(null);
	const [value, setValue] = useState<Range>({ from: null, to: null });
	const [draft, setDraft] = useState<Date[] | null>(null);
	const [viewDate, setViewDate] = useState<Date>(startOfMonth(new Date()));
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

	const openPanel = (e: any) => {
		op.current?.show(e);
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
		setValue({ from, to });
		setIsOpen(false);
		op.current?.hide();
	};
	const handleReset = () => {
		setDraft(null);
		setValue({ from: null, to: null });
	};
	const calendarFooter = () => (
		<div className={styles.calendarFooter}>
			<Button
				size='sm'
				variant='ghost'
				tone='neutral'
				onClick={handleReset}
				label='Reset'
			/>
			<Button size='sm' onClick={handleApply} label='Apply' />
		</div>
	);
	const shownFrom = isOpen ? draft?.[0] ?? value.from : value.from;
	const shownTo = isOpen ? draft?.[1] ?? value.to : value.to;
	return (
		<article
			ref={wrapperRef}
			className={clsx(styles.dateInputWrapper, className)}
		>
			<div className='label'>Pick your lucky day</div>
			<div className={styles.inputsRow}>
				<div className={styles.inputCol}>
					<input
						// id={departId}
						placeholder='Depart'
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
						// id={returnId}
						placeholder='Return'
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
				onShow={() => {
					setIsOpen(true);
				}}
			>
				<Calendar
					locale='one-letter-monday'
					inline
					numberOfMonths={2}
					showOtherMonths={false}
					selectionMode='range'
					value={draft as any}
					onChange={onCalendarChange}
					footerTemplate={calendarFooter}
					viewDate={viewDate}
					onViewDateChange={e => {
						if (!selectingRef.current) setViewDate(startOfMonth(e.value));
					}}
				/>
			</OverlayPanel>
		</article>
	);
};
