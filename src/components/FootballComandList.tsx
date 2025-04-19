"use client";

import { FC } from "react";

import { FOOTBALL_TEAMS } from "@/data/constants";
import FootballTeamCard from "./FootballTeamCard";

const FootballComandList: FC = () => {
	return (
		<ul className="w-full flex flex-col gap-4">
			{FOOTBALL_TEAMS &&
				FOOTBALL_TEAMS.map((item, idx) => (
					<li key={idx} className="flex flex-col px-3 md:px-5 py-2 md:pt-[13px] md:pb-[15px] bg-block-dark rounded-sm">
						<FootballTeamCard team={FOOTBALL_TEAMS[idx]} />
					</li>
				))}
		</ul>
	);
};

export default FootballComandList;