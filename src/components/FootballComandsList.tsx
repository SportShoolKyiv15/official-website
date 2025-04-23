"use client";

import { FC, useState } from "react";

import { FOOTBALL_TEAMS } from "@/data/constants";
import FootballTeamCard from "./FootballTeamCard";

const FootballComandsList: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<ul className="w-full flex flex-col gap-4">
			{FOOTBALL_TEAMS &&
				FOOTBALL_TEAMS.map((item, idx) => (
					<li key={idx} className="flex flex-col px-2 md:px-5 py-2 md:pt-[13px] md:pb-[15px] bg-block-dark rounded-sm relative overflow-hidden">
						<FootballTeamCard
							isOpened={activeIndex === idx}
							onToggle={() =>
								setActiveIndex((prev) => (prev === idx ? null : idx))}
							team={FOOTBALL_TEAMS[idx]} />
					</li>
				))}
		</ul>
	);
};

export default FootballComandsList;