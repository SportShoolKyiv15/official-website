import { FC } from "react";

import Title from "@/components/Title";
import ChampionshipsList from "@/components/ChampionshipsList";
import { SKY_RACING_CHAMPIONSHIPS_RESULTS } from "@/data/constants";

const SkyRacingChampionshipsPage: FC = () => {
	return (
		<section className="page-wrap gap-6 md:gap-8 mt-8 md:mt-10 lg:mt-[50px] mb-[50px] md:mb-[80px] lg:mb-[100px] xs:px-[10px] sm:px-4 md:px-[20px] lg:px-[72px] pt-0">
			<div>
				<Title type='section-subtitle'>Чемпіонати</Title>
			</div>
			<ChampionshipsList championships={SKY_RACING_CHAMPIONSHIPS_RESULTS} />
		</section>
	);
};

export default SkyRacingChampionshipsPage;