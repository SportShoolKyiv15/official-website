export function setTableColDisplacemet2(count: number, width: number) {
	const root = document.documentElement;
	root.style.setProperty('--displacementTable2', -count * width + 'px');
};