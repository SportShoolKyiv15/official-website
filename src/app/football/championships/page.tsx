"use client";

import { FC } from "react";

import Title from "@/components/Title";
import FootballChampionshipsList from "@/components/FootballChampionshipsList";

const FootballChampionshipsPage: FC = () => {
	return (
		<section className="page-wrap gap-6 md:gap-8 mt-8 md:mt-10 lg:mt-[50px] mb-[50px] md:mb-[80px] lg:mb-[100px] xs:px-[10px] sm:px-4 md:px-[20px] lg:px-[72px] pt-0">
			<div>
				<Title type='section-subtitle'>Чемпіонати</Title>
			</div>
			<FootballChampionshipsList />
		</section>
	);
};

export default FootballChampionshipsPage;