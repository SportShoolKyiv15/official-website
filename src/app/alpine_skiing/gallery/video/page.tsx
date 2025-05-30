import { FC } from "react";

import GalleryNav from "@/components/GalleryNav";
import Title from "@/components/Title";

const AlpineSkiingaleryVideoPage: FC = () => {
	return (
		<section className="page-wrap gap-6 md:gap-8 mt-8 md:mt-10 lg:mt-[50px] mb-[50px] md:mb-[80px] lg:mb-[100px] xs:px-[10px] sm:px-4 md:px-[20px] lg:px-[72px] pt-0" >
			<div className="flex flex-col gap-8 md:gap-10 items-center">
				<Title type='section-subtitle'>Галерея</Title>
				<GalleryNav />
			</div>
		</section>
	);
};

export default AlpineSkiingaleryVideoPage;