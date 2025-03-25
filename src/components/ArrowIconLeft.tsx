import React from 'react';

type Props = {
	color: string;
}

const ArrowIconLeft: React.FC<Props> = ({ color }) => {
	return (
		<svg className={`text-${color}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M16.125 9L1.875 9M1.875 9L7.125 14.25M1.875 9L7.125 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export default ArrowIconLeft
