'use client';

import { FC, useState, useRef, useEffect } from "react";

import Title from "@/components/Title";
import TableTitle from "@/components/TableTitle";
import FootballServicesTable from "@/components/FootballServicesTable";
import SkyServicesTable from "@/components/SkyServicesTable";
import { setTableColDisplacemet1 } from "@/utils/setTableColDisplacemet1";
import { setTableColDisplacemet2 } from "@/utils/setTableColDisplacemet2";
import { useSport } from '@/contexts/SportContext';

let count = 0;
let count2 = 0;
const numberShifts = 2;

const ServicesPage: FC = () => {
	const [extra, setExtra] = useState('');
	const [extra2, setExtra2] = useState('');
	const tableRef1 = useRef<HTMLTableElement | null>(null);
	const tableRef2 = useRef<HTMLTableElement | null>(null);
	const [countIcon, setCountIcon] = useState(0);
	const [countIcon2, setCountIcon2] = useState(0);
	const { getSport } = useSport();

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
					// if swipe is horizontal
					if (xDiff > 0) {
						// verify extreme swiper element
						if (count > 0) {
							setCountIcon(count - 1);
							count = count - 1;
						};
						if (0 <= count && count <= 1) {
							setTableColDisplacemet1(count, 112);
							setExtra('swiperOnMoveTable1');
						}
					} else {
						if (count < 3) {
							setCountIcon(count + 1);
							count = count + 1;
						};
						if (0 <= count && count <= 1) {
							setTableColDisplacemet1(count, 112);
							setExtra('swiperOnMoveTable1');
						};
					}
				};
			};

			if (tableRef2?.current?.contains(event?.target as Node)) {
				if (Math.abs(xDiff) > Math.abs(yDiff)) {
					// if swipe is horizontal
					if (xDiff > 0) {
						// verify extreme swiper element
						if (count2 > 0) {
							setCountIcon2(count2 - 1);
							count2 = count2 - 1;
						};
						if (0 <= count2 && count2 <= 1) {
							setTableColDisplacemet2(count2, 112);
							setExtra2('swiperOnMoveTable2');
						}
					} else {
						if (count2 < 3) {
							setCountIcon2(count2 + 1);
							count2 = count2 + 1;
						};
						if (0 <= count2 && count2 <= 3) {
							setTableColDisplacemet2(count2, 112);
							setExtra2('swiperOnMoveTable2');
						};
					}
				};
			};
		};
		xStart = null;
		yStart = null;
	};

	useEffect(() => {
		getSport(undefined);
	}, [getSport]);

	return (
		<section className="page-wrap lg:w-[1296px]">
			<div className="page-container w-full lg:px-5">
				<div className="text-center md:text-left mb-6 md:mb-[28px] lg:mb-8">
					<Title type='page-title'>Платні послуги</Title>
				</div>
				<h2 className="mb-5 md:mb-10 text-center font-display text-xl md:text-2xl font-bold">Футбол</h2>
				<p className="w-full flex flex-col md:flex-row items-center md:justify-end mb-[18px] md:mb-[14px] text-right font-display font-semibold text-sm lg:text-lg leading-[150%]"><span className="block text-center md:inline" >Київ</span><span className="hidden md:block">,&nbsp;</span >Голосіївский район, вул. Героїв Маріуполя, 7а</p>
				<TableTitle numberShifts={numberShifts} extra={countIcon}>Вартість платних послуг</TableTitle>
				<FootballServicesTable handleTouchStart={handleTouchStart} handleTouchEnd={handleTouchEnd} ref={tableRef1} extra={extra} />
			</div>
			<div className="page-container w-full mb-[50px] md:mb-20 lg:mb-25 lg:px-5">
				<h2 className="mb-5 md:mb-10 text-center font-display text-xl md:text-2xl font-bold">Лижні види спорту</h2>
				<p className="w-full flex justify-center md:justify-end mb-[18px] md:mb-[14px] text-right font-display font-semibold text-sm lg:text-lg leading-[150%]"><span className="md:block text-center md:inline" >Київ</span><span className="inline md:block">,&nbsp;</span >Голосіївский район, вул. Ягідна, 2</p>
				<TableTitle numberShifts={numberShifts} extra={countIcon2}>Вартість платних послуг</TableTitle>
				<SkyServicesTable handleTouchStart={handleTouchStart} handleTouchEnd={handleTouchEnd} ref={tableRef2} extra={extra2} />
			</div>
		</section>
	);
};

export default ServicesPage;