"use client";

import React, { FC, useEffect, useState, useRef } from "react";

import { FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT } from "@/data/constants";
import { FOOTBALL_CHAMPIONSHIP_KYIV_RESULT } from "@/data/constants";
import FootballChampionshipCard from "./FootballChampionshipCard";
import { useFootballComand } from "@/contexts/FootballContext";

const FootballComandsList: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const { comand, updateComand } = useFootballComand();
	const cardRefs = useRef<React.RefObject<HTMLDivElement | null>[]>([]);

	if (cardRefs.current.length === 0) {
		FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.forEach(() => {
			cardRefs.current.push(React.createRef<HTMLDivElement>());
		});
	};

	useEffect(() => {
		if (FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.length) {
			FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.map((item, idx) => {
				if (item.name === comand) {
					setActiveIndex(idx);
					updateComand('');
				}
			}, [comand]);
		}
	});

	useEffect(() => {
		if (activeIndex !== null && cardRefs.current[activeIndex]?.current) {
			setTimeout(() => {
				cardRefs.current[activeIndex]?.current?.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
			}, 400);
		}
	}, [activeIndex]);

	return (
		<ul className="w-full flex flex-col gap-4">
			{FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.length &&
				FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.map((item, idx) => (
					<li key={idx} className="flex flex-col px-2 md:px-5 py-2 md:pt-[13px] md:pb-[15px] bg-block-dark rounded-sm relative">
						<FootballChampionshipCard
							isOpened={activeIndex === idx}
							onToggle={() =>
								setActiveIndex((prev) => (prev === idx ? null : idx))}
							cardRef={cardRefs.current[idx]}
							championshipDuflu={FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT[idx]}
							championshipKyiv={FOOTBALL_CHAMPIONSHIP_KYIV_RESULT[idx]} />
					</li>
				))}
		</ul>
	);
};

export default FootballComandsList;