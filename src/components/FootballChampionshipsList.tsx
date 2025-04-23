"use client";

import { FC, useState } from "react";

import { FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT } from "@/data/constants";
import { FOOTBALL_CHAMPIONSHIP_KYIV_RESULT } from "@/data/constants";
import FootballChampionshipCard from "./FootballChampionshipCard";

const FootballComandsList: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	// const [IsVisible, setIsVisible] = useState(false);

	return (
		<ul className="w-full flex flex-col gap-4">
			{FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.length &&
				FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.map((item, idx) => (
					<li key={idx} className="flex flex-col px-2 md:px-5 py-2 md:pt-[13px] md:pb-[15px] bg-block-dark rounded-sm relative">
						<FootballChampionshipCard
							isOpened={activeIndex === idx}
							// isVisible={IsVisible}
							// onToggle={() => {
							// 	if (activeIndex === idx) {
							// 		setIsVisible(false);
							// 		setTimeout(() => {
							// 			setActiveIndex(null);
							// 		}, 500)
							// 	} else {
							// 		setIsVisible(true);
							// 		setActiveIndex(idx);
							// 	}
							// }}
							onToggle={() =>
								setActiveIndex((prev) => (prev === idx ? null : idx))}
							championshipDuflu={FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT[idx]}
							championshipKyiv={FOOTBALL_CHAMPIONSHIP_KYIV_RESULT[idx]} />
					</li>
				))}
		</ul>
	);
};

export default FootballComandsList;