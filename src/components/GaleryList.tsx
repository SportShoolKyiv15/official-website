"use client";

import { FC } from "react";

import GaleryCard from "@/components/GalaryCard";

type Props = {
	toggleModal: (i: string) => void;
	visibleCount: number;
	galery: string[];
}

const GaleryList: FC<Props> = ({ toggleModal, visibleCount, galery
}) => {
	return (
		<div className="flex flex-wrap w-full gap-[10px] md:gap-4 lg:gap-6">
			{galery.length && galery.slice(0, visibleCount).map((item, idx) => (
				<GaleryCard key={idx} idx={idx} item={item} toggleModal={toggleModal} />
			))}
		</div>
	);
};

export default GaleryList;