import React, { ReactNode } from "react";

type Props = {
	children: ReactNode;
	idx: string
}

const SwiperCard: React.FC<Props> = ({ children, idx }) => {
	return (
		<li
			key={idx}
			className="min-w-[345px] h-[240px] rounded-1 flex flex-col gap-[22px] items-center relative"
		>
			{children}
		</li>
	);
};

export default SwiperCard;