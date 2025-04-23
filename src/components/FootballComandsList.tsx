"use client";

import React, { FC, useState, useRef, useEffect } from "react";

import { FOOTBALL_TEAMS } from "@/data/constants";
import FootballTeamCard from "./FootballTeamCard";

const FootballComandsList: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const cardRefs = useRef<React.RefObject<HTMLDivElement | null>[]>([]);

	if (cardRefs.current.length === 0) {
		FOOTBALL_TEAMS.forEach(() => {
			cardRefs.current.push(React.createRef<HTMLDivElement>());
		});
	};

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
			{FOOTBALL_TEAMS.length &&
				FOOTBALL_TEAMS.map((item, idx) => (
					<li key={idx} className="flex flex-col px-2 md:px-5 py-2 md:pt-[13px] md:pb-[15px] bg-block-dark rounded-sm relative overflow-hidden">
						<FootballTeamCard
							isOpened={activeIndex === idx}
							onToggle={() =>
								setActiveIndex((prev) => (prev === idx ? null : idx))}
							cardRef={cardRefs.current[idx]}
							team={FOOTBALL_TEAMS[idx]} />
					</li>
				))}
		</ul>
	);
};

export default FootballComandsList;