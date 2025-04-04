'use client';

import React, { FC } from "react";

import SwipeCardButton from "./buttons/SwipeCardButton";


type Props = {
	key: number;
	idx: number;
	bgUrl: string;
	title: string;
	text: string;
	date: string;
	getIdx: (idxItem: number) => void;
	toggleModal: () => void;
}

const SwiperCard: FC<Props> = ({ key, idx, bgUrl, title, text, date, getIdx, toggleModal }) => {
	const handleClick = () => {
		toggleModal();
		if (idx) {
			getIdx(idx);
		};
	};
	return (
		<li
			key={key}
			className="flex flex-col gap-[22px] min-w-[336px] sm:min-w-[345px] md:min-w-[328px] lg:min-w-[416px] h-[320px] md:h-[292px] lg:h-[368px] rounded-[4px] items-center relative"
		>
			<div className="absolute inset-0  bg-lightgray"></div>
			<div className={`absolute inset-0 ${bgUrl} bg-cover bg-center bg-no-repeat`}></div>
			<div className="absolute inset-0 news-bg-gradient"></div>
			<div className="swiperCardContent">
				<p className="swiperCardTitle">{title}</p>
				<p className="swiperCardText">{text}</p>
				<div className="flex justify-between">
					<SwipeCardButton onClick={handleClick}>Читати далі</SwipeCardButton>
					<p className="text-sm font-display">{date}</p>
				</div>
			</div>
		</li>
	);
};

export default SwiperCard;