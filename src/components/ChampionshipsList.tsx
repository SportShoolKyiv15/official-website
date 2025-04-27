"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from 'next/navigation';

import ChampionshipCard from "./ChampionshipCard";
import { SkyChampioship } from '@/globaltypes/types';

type Props = {
	championships: SkyChampioship[];
}

const ChampionshipsList: FC<Props> = ({ championships }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const cardRefs = useRef<React.RefObject<HTMLLIElement | null>[]>([]);
	const searchParams = useSearchParams();
	const router = useRouter();

	if (cardRefs.current.length === 0) {
		championships.forEach(() => {
			cardRefs.current.push(React.createRef<HTMLLIElement>());
		});
	};

	useEffect(() => {
		const teamFromURL = searchParams.get("team");
		if (teamFromURL) {
			const index = championships.findIndex(
				(item) => item.name === teamFromURL
			);
			if (index !== -1) {
				setActiveIndex(index);
				router.replace("/football/championships", { scroll: false });
			}
		}
	}, [searchParams, router, championships]);

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
			{championships.length &&
				championships.map((_, idx) => (
					<li key={idx} ref={cardRefs.current[idx]} className="flex flex-col px-2 md:px-5 py-2 md:pt-[13px] md:pb-[15px] bg-block-dark rounded-sm relative">
						<ChampionshipCard
							isOpened={activeIndex === idx}
							onToggle={() =>
								setActiveIndex((prev) => (prev === idx ? null : idx))}
							championship={championships[idx]} />
					</li>
				))}
		</ul>
	);
};

export default ChampionshipsList;