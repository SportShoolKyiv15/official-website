"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from 'next/navigation';

import { FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT } from "@/data/constants";
import { FOOTBALL_CHAMPIONSHIP_KYIV_RESULT } from "@/data/constants";
import FootballChampionshipCard from "./FootballChampionshipCard";


const FootballComandsList: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const cardRefs = useRef<React.RefObject<HTMLLIElement | null>[]>([]);
	const searchParams = useSearchParams();
	const router = useRouter();

	if (cardRefs.current.length === 0) {
		FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.forEach(() => {
			cardRefs.current.push(React.createRef<HTMLLIElement>());
		});
	};

	useEffect(() => {
		const teamFromURL = searchParams.get("team");
		if (teamFromURL) {
			const index = FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.findIndex(
				(item) => item.name === teamFromURL
			);
			if (index !== -1) {
				setActiveIndex(index);
				router.replace("/football/championships", { scroll: false });
			}
		}
	}, [searchParams, router]);

	useEffect(() => {
		if (activeIndex !== null && cardRefs.current[activeIndex]?.current) {
			setTimeout(() => {
				cardRefs.current[activeIndex]?.current?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}, 400);
		}
	}, [activeIndex]);

	return (
		<ul className="w-full flex flex-col gap-4">
			{FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.length &&
				FOOTBALL_CHAMPIONSHIP_DUFLU_RESULT.map((_, idx) => (
					<li key={idx} ref={cardRefs.current[idx]} className="flex flex-col px-2 md:px-5 py-2 md:pt-[13px] md:pb-[15px] bg-block-dark rounded-sm relative">
						<FootballChampionshipCard
							isOpened={activeIndex === idx}
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