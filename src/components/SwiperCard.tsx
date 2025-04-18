'use client';

import React, { FC } from "react";

import SwipeCardButton from "./buttons/SwipeCardButton";

type Props = {
	idx: number;
	bgUrl: string;
	title: string;
	text: string;
	date: string;
	getIdx: (idxItem: number) => void;
	toggleModal: () => void;
}

const SwiperCard: FC<Props> = ({ idx, bgUrl, title, text, date, getIdx, toggleModal }) => {
	const handleClick = () => {
		toggleModal();
		if (idx) {
			getIdx(idx);
		};
	};
	return (
		<>
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
		</>
	);
};

export default SwiperCard;