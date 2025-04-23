export function setTableColDisplacemet1(count: number, width: number) {
	const root = document.documentElement;
	root.style.setProperty('--displacementTable1', -count * width + 'px');
};