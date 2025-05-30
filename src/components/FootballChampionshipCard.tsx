"use client";

import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";

import TableTitle from "./TableTitle";
import FootballChampionshipTable from "./FootballChampionshipTable";
import { setTableColDisplacemet1 } from "@/utils/setTableColDisplacemet1";
import { setTableColDisplacemet2 } from "@/utils/setTableColDisplacemet2";
import useWindowWidth from "@/helpers/windowsSize";
import { FootballChampioship } from '@/globaltypes/types';

type Props = {
	isOpened: boolean,
	onToggle: () => void,
	cardRef?: React.RefObject<HTMLDivElement | null>;
	championshipDuflu: FootballChampioship;
	championshipKyiv: FootballChampioship;
};

let count = 0;
let count2 = 0;
const numberShifts = 4;

const FootballTeamCard: FC<Props> = ({
	championshipDuflu,
	championshipKyiv,
	isOpened,
	onToggle,
	cardRef
}) => {

	const [extra, setExtra] = useState('')
	const [extra2, setExtra2] = useState('');
	const tableRef1 = useRef<HTMLTableElement | null>(null);
	const tableRef2 = useRef<HTMLTableElement | null>(null);
	const [countIcon, setCountIcon] = useState(0);
	const [countIcon2, setCountIcon2] = useState(0);
	const [isXS, setIsXS] = useState(false);
	const withWindow = useWindowWidth();

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
						if (0 <= count && count <= 3) {
							if (isXS) {
								setTableColDisplacemet1(count, 100);
								setExtra('swiperOnMoveTable1');
							} else {
								setTableColDisplacemet1(count, 103);
								setExtra('swiperOnMoveTable1');
							}
						}
					} else {
						if (count < 3) {
							setCountIcon(count + 1);
							count = count + 1;
						};
						if (0 <= count && count <= 3) {
							if (isXS) {
								setTableColDisplacemet1(count, 100);
								setExtra('swiperOnMoveTable1');
							} else {
								setTableColDisplacemet1(count, 103);
								setExtra('swiperOnMoveTable1');
							}
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
						if (0 <= count2 && count2 <= 3) {
							if (isXS) {
								setTableColDisplacemet2(count2, 100);
								setExtra2('swiperOnMoveTable2');
							} else {
								setTableColDisplacemet2(count2, 103);
								setExtra2('swiperOnMoveTable2');
							}
						}
					} else {
						if (count2 < 3) {
							setCountIcon2(count2 + 1);
							count2 = count2 + 1;
						};
						if (0 <= count2 && count2 <= 3) {
							if (isXS) {
								setTableColDisplacemet2(count2, 100);
								setExtra2('swiperOnMoveTable2');
							} else {
								setTableColDisplacemet2(count2, 103);
								setExtra2('swiperOnMoveTable2');
							}
						};
					}
				};
			};
		};
		xStart = null;
		yStart = null;
	};

	// determine screen width
	useEffect(() => {
		if (withWindow !== undefined && withWindow < 375) {
			setIsXS(true);
		} else {
			setIsXS(false);
		};
	}, [withWindow]);

	return (
		<div ref={cardRef}>
			<button onClick={onToggle} className="flex justify-between w-full items-center px-1 cursor-pointer">
				<div className="flex md:items-center w-[297px] md:w-full">
					<h3 className="md:w-[140px] mb-[6px] md:mb-0 md:mr-[47px] lg:mr-[70px] font-display text-lg md:text-xl lg:text-[22px] font-semibold md:font-bold lg:tracking-[0.5%]">{championshipDuflu.name}</h3>
				</div>
				<div className="w-[22px] h-[22px]">
					<Image
						src='/svg/arrow-down.svg'
						alt='Arrow'
						width={22}
						height={22}
						className={`${isOpened && "rotate-180"}`} />
				</div>
			</button>
			<div className={`flex flex-col md:justify-between lg:justify-start gap-[50px] lg:gap-[60px] ${isOpened ? 'item-opened mt-5 md:mt-6  md:pb-[9px] lg:pb-5' : 'item-closed'}`}>
				<div>
					<p className="mb-[18px] text-center lg:text-lg font-display font-semibold">Чемпіонат ДЮФЛУ</p>
					<TableTitle numberShifts={numberShifts} extra={countIcon}>Турнірна таблиця</TableTitle>
					<FootballChampionshipTable handleTouchStart={handleTouchStart} handleTouchEnd={handleTouchEnd} ref={tableRef1} extra={extra} comands={championshipDuflu.comands} />
				</div>
				<div>
					<p className="mb-[18px] text-center lg:text-lg font-display font-semibold">Чемпіонат Києва</p>
					<TableTitle numberShifts={numberShifts} extra={countIcon2}>Турнірна таблиця</TableTitle>
					<FootballChampionshipTable handleTouchStart={handleTouchStart} handleTouchEnd={handleTouchEnd} ref={tableRef2} extra={extra2} comands={championshipKyiv.comands} />
				</div>
			</div>
		</div>
	);
};

export default FootballTeamCard;