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
			</div>
		</button>
	)
}

export default SwipeCardButton
