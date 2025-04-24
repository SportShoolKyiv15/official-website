'use client';

import { FC, useState, useRef } from "react";

import Title from "@/components/Title";
import FootballServicesTable from "@/components/FootballServicesTable";
import SkyServicesTable from "@/components/SkyServicesTable";
import ServicesTableTitle from "@/components/ServicesTableTitle";

const ServicesPage: FC = () => {
	const [extra, setExtra] = useState('swiperOnMoveTableRight');
	const [extra2, setExtra2] = useState('swiperOnMoveTableRight');
	const tableRef1 = useRef<HTMLTableElement | null>(null);
	const tableRef2 = useRef<HTMLTableElement | null>(null);

	let xStart: number | null = null;
	let yStart: number | null = null;

	const handleTouchStart = (e: React.TouchEvent<HTMLTableElement>): void => {
		// determine start touch coordinates 
		if (tableRef1?.current?.contains(event?.target as Node) || tableRef2?.current?.contains(event?.target as Node)) {
			const firstTouch = e.touches[0];
			xStart = firstTouch.clientX;
			yStart = firstTouch.clientY;
		}
	};

	const handleTouchEnd = (e: React.TouchEvent<HTMLTableElement>): void => {
		if (!xStart || !yStart) {
			// return if there weren't any touch
			return;
		};

		if (tableRef1?.current?.contains(event?.target as Node) || tableRef2?.current?.contains(event?.target as Node)) {
			let xEnd = 0;
			let yEnd = 0;

			xEnd = e.changedTouches[0].clientX;
			yEnd = e.changedTouches[0].clientY;

			//determine horizontaal swipe
			const xDiff = xEnd - xStart;
			//determine vertical swipe
			const yDiff = yEnd - yStart;

			if (tableRef1?.current?.contains(event?.target as Node)) {
				if (Math.abs(xDiff) > Math.abs(yDiff)) {
					if (xDiff > 0 && extra === 'swiperOnMoveTableLeft') {
						setExtra('swiperOnMoveTableRight');
					};
					if (xDiff < 0 && extra === 'swiperOnMoveTableRight') {
						setExtra('swiperOnMoveTableLeft');
					};
				};
			};

			if (tableRef2?.current?.contains(event?.target as Node)) {
				if (Math.abs(xDiff) > Math.abs(yDiff)) {
					if (xDiff > 0 && extra2 === 'swiperOnMoveTableLeft') {
						setExtra2('swiperOnMoveTableRight');
					};
					if (xDiff < 0 && extra2 === 'swiperOnMoveTableRight') {
						setExtra2('swiperOnMoveTableLeft');
					};
				};
			};
		};
		xStart = null;
		yStart = null;
	};

	return (
		<section className="page-wrap lg:w-[1296px]">
			<div className="page-container w-full lg:px-5">
				<div className="text-center md:text-left mb-6 md:mb-[28px] lg:mb-8">
					<Title type='page-title'>Платні послуги</Title>
				</div>
				<h2 className="mb-5 md:mb-10 text-center font-display text-xl md:text-2xl font-bold">Футбол</h2>
				<p className="w-full flex flex-col md:flex-row items-center md:justify-end mb-[18px] md:mb-[14px] text-right font-display font-semibold text-sm lg:text-lg leading-[150%]"><span className="block text-center md:inline" >Київ</span><span className="hidden md:block">,&nbsp;</span >Голосіївский район, вул. Героїв Маріуполя, 7а</p>
				<ServicesTableTitle extra={extra} />
				<FootballServicesTable handleTouchStart={handleTouchStart} handleTouchEnd={handleTouchEnd} ref={tableRef1} extra={extra} />
			</div>
			<div className="page-container w-full mb-[50px] md:mb-20 lg:mb-25 lg:px-5">
				<h2 className="mb-5 md:mb-10 text-center font-display text-xl md:text-2xl font-bold">Лижні види спорту</h2>
				<p className="w-full flex justify-center md:justify-end mb-[18px] md:mb-[14px] text-right font-display font-semibold text-sm lg:text-lg leading-[150%]"><span className="md:block text-center md:inline" >Київ</span><span className="inline md:block">,&nbsp;</span >Голосіївский район, вул. Ягідна, 2</p>
				<ServicesTableTitle extra={extra2} />
				<SkyServicesTable handleTouchStart={handleTouchStart} handleTouchEnd={handleTouchEnd} ref={tableRef2} extra={extra2} />
			</div>
		</section>
	);
};

export default ServicesPage;