import React from 'react';

type Props = {
	color: string;
}

const ArrowIconRight: React.FC<Props> = ({ color }) => {
	return (
		<svg className={`text-${color}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.875 9L16.125 9M16.125 9L10.875 14.25M16.125 9L10.875 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export default ArrowIconRight;
