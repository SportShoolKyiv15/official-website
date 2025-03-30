import React, { ReactNode, FC } from 'react';

import ArrowIconRight from '../ArrowIconRight';

type Props = {
	children: ReactNode;
};

const SwipeCardButton: FC<Props> = ({ children }) => {
	return (
		<button className="flex gap-2 text-base text-button-swipe-card font-display font-medium cursor-pointer transform transition-transform duration-200 hover:scale-105">
			<p>{children}</p>
			<div className="-rotate-[43.611deg]">
				<ArrowIconRight color='arrow-active' />
				{/* <svg className={`text-arrow-active`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.875 9L16.125 9M16.125 9L10.875 14.25M16.125 9L10.875 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg> */}
			</div>
		</button>
	)
}

export default SwipeCardButton
