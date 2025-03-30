import React, { ReactNode, FC } from "react";

type Props = {
	children: ReactNode;
	idx: string
}

const SwiperCard: FC<Props> = ({ children, idx }) => {
	return (
		<li
			key={idx}
			className="min-w-[345px] md:min-w-[328px] lg:min-w-[416px] h-[320px] md:h-[292px] lg:h-[368px] rounded-1 flex flex-col gap-[22px] items-center relative"
		>
			{children}
		</li>
	);
};

export default SwiperCard;