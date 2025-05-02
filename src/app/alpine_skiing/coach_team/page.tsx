"use client";

import { FC } from "react";

import Title from "@/components/Title";
import { SkyCoach } from "@/globaltypes/types";
import { ALPINE_SKIING_COACH_TEAM } from "@/data/constants";
import SkyCoachList from "@/components/SkyCoachList";

const AlpineSkiingCoachTeamPage: FC = () => {
	const teamCoaches: SkyCoach[] = ALPINE_SKIING_COACH_TEAM;
	return (
		<section className="page-wrap gap-0 mt-8 md:mt-10 lg:mt-[50px] mb-[50px] md:mb-[80px] lg:mb-[100px] px-4 md:px-[18px] lg:pl-[239px] lg:pr-[170px] pt-0">
			<div className="mb-5 md:mb-6 lg:mb-9">
				<Title type='section-subtitle'>Тренерський склад</Title>
			</div>
			<SkyCoachList coaches={teamCoaches} />
		</section>
	);
};

export default AlpineSkiingCoachTeamPage;