"use client";

import { FC } from "react";

import Title from "@/components/Title";
import FootballCoachTeam from "@/components/FootballCoachTeam";

const FootballCoachTeamPage: FC = () => {
	return (
		<section className="page-wrap gap-6 md:gap-9 lg:gap-10 mt-8 md:mt-10 lg:mt-[50px] mb-[50px] md:mb-[80px] lg:mb-[100px] px-4 md:px-[18px] lg:px-[127px] py-4 md:py-8 lg:py[28px] bg-block-dark">
			<div>
				<Title type='section-subtitle'>Тренерський склад</Title>
			</div>
			<FootballCoachTeam />
		</section>
	);
};

export default FootballCoachTeamPage;
