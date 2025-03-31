import React, { ReactNode, FC } from "react";

type Props = {
	children: ReactNode;
	idx: string
}

const SwiperCard: FC<Props> = ({ children, idx }) => {
	return (
		<li
			key={idx}
			className="swiperCard"
		>
			{children}
		</li>
	);
};

export default SwiperCard;