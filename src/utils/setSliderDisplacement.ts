export function setSliderDisplacement(count: number, width: number) {
	const root = document.documentElement;
	root.style.setProperty('--displacement', -count * width + 'px');
};