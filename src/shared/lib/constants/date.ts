export const dateFmt = new Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
});

export const startOfMonth = (d: Date) =>
	new Date(d.getFullYear(), d.getMonth(), 1);
