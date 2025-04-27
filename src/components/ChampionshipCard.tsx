"use client";

import {
	FC,
	useState,
	useRef,
	useEffect
} from "react";
import Image from "next/image";

import TableTitle from "./TableTitle";
import ChampionshipTable from "./ChampionshipTable";
import { setTableColDisplacemet1 } from "@/utils/setTableColDisplacemet1";
// import { setTableColDisplacemet2 } from "@/utils/setTableColDisplacemet2";
import useWindowWidth from "@/helpers/windowsSize";
import { SkyChampioship } from '@/globaltypes/types';

type Props = {
	isOpened: boolean,
	onToggle: () => void,
	cardRef?: React.RefObject<HTMLDivElement | null>;
	championship: SkyChampioship;
};

let count = 0;
// let count2 = 0;
const numberShifts = 3;

const ChampionshipCard: FC<Props> = ({
	championship,
	isOpened,
	onToggle,
	cardRef
}) => {

	const [extra, setExtra] = useState('')
	// const [extra2, setExtra2] = useState('');
	const tableRef1 = useRef<HTMLTableElement | null>(null);
	// const tableRef2 = useRef<HTMLTableElement | null>(null);
	const [countIcon, setCountIcon] = useState(0);
	// const [countIcon2, setCountIcon2] = useState(0);
	const [isXS, setIsXS] = useState(false);
	const withWindow = useWindowWidth();

	let xStart: number | null = null;
	let yStart: number | null = null;

	const handleTouchStart = (e: React.TouchEvent<HTMLTableElement>): void => {
		// determine start touch coordinates 
		if (tableRef1?.current?.contains(event?.target as Node)) {
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

		if (tableRef1?.current?.contains(event?.target as Node)) {
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
						if (0 <= count && count <= 2) {
							if (isXS) {
								setTableColDisplacemet1(count, 140);
								setExtra('swiperOnMoveTable1');
							} else {
								setTableColDisplacemet1(count, 146);
								setExtra('swiperOnMoveTable1');
							}
						}
					} else {
						if (count < 2) {
							setCountIcon(count + 1);
							count = count + 1;
						};
						if (0 <= count && count <= 2) {
							if (isXS) {
								setTableColDisplacemet1(count, 140);
								setExtra('swiperOnMoveTable1');
							} else {
								setTableColDisplacemet1(count, 146);
								setExtra('swiperOnMoveTable1');
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
					<h3 className={`md:w-full mb-[6px] md:mb-0 text-left ${isOpened && 'md:text-center'} font-display text-lg md:text-xl lg:text-[22px] font-semibold md:font-bold lg:tracking-[0.5%]`}>{championship.name}</h3>
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
					<TableTitle numberShifts={numberShifts} extra={countIcon}>Турнірна таблиця</TableTitle>
					<ChampionshipTable handleTouchStart={handleTouchStart} handleTouchEnd={handleTouchEnd} ref={tableRef1} extra={extra} participants={championship.participants} />
				</div>
			</div>
		</div>
	);
};

export default ChampionshipCard;