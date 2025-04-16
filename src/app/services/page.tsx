'use client';

import { FC, useState, useRef } from "react";

import Title from "@/components/Title";
import Image from "next/image";

const ServicesPage: FC = () => {
	const [extra, setExtra] = useState('swiperOnMoveTableRight');
	const tableRef = useRef<HTMLTableElement | null>(null);

	let xStart: number | null = null;
	let yStart: number | null = null;

	const handleTouchStart = (e: React.TouchEvent<HTMLTableElement>): void => {
		// determine start touch coordinates 
		if (tableRef?.current?.contains(event?.target as Node)) {
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

		if (tableRef?.current?.contains(event?.target as Node)) {
			let xEnd = 0;
			let yEnd = 0;

			xEnd = e.changedTouches[0].clientX;
			yEnd = e.changedTouches[0].clientY;

			//determine horizontaal swipe
			const xDiff = xEnd - xStart;
			//determine vertical swipe
			const yDiff = yEnd - yStart;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {
				if (xDiff > 0 && extra === 'swiperOnMoveTableLeft') {
					setExtra('swiperOnMoveTableRight');
				};
				if (xDiff < 0 && extra === 'swiperOnMoveTableRight') {
					setExtra('swiperOnMoveTableLeft');
				};
			};
		};

		xStart = null;
		yStart = null;
	};

	return (
		<section className="page-wrap lg:w-[1296px]">
			<div className="page-container w-full">
				<div className="text-center md:text-left mb-6 md:mb-[28px] lg:mb-8">
					<Title type='page-title'>Платні послуги</Title>
				</div>
				<h2 className="mb-5 md:mb-10 text-center font-display text-xl md:text-2xl font-bold">Футбол</h2>
				<p className="w-full flex flex-col md:flex-row md:justify-end mb-[18px] md:mb-[14px] text-right font-display font-semibold text-sm leading-[150%]"><span className="block text-center md:inline" >Київ</span><span className="hidden md:block">,</span >Голосіївский район, вул. Героїв Маріуполя 7а</p>
				<div className="flex pl-10 items-center w-full h-[50px] bg-button-press relative">
					<p className="text-lg font-semibold rounded-t-xs">Вартість платних послуг</p>
					<div className="md:hidden absolute top-1/2 -translate-y-1/2 right-[32px] flex justify-between items-center w-5">
						<Image
							src='/svg/activeCirclMarkTable.svg'
							alt='mark'
							width={10}
							height={10}
							className={`${extra === 'swiperOnMoveTableLeft' && 'order-2'}`}
						/>
						<Image
							src='/svg/circlMarkTable.svg'
							alt='mark'
							width={6}
							height={6}
							className={`${extra === 'swiperOnMoveTableLeft' && 'order-1'}`}
						/>
					</div>
				</div>
				<table onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={tableRef} className="border-collapse w-[345px] md:w-[680px] overflow-hidden">
					<tr className="flex md:table-row text-center w-[344px] md:w-[680px] h-[50px] text-black-text bg-table-title overflow-hidde">
						<th className="hidden md:table-cell w-[29px] border-r border-arrow bg-table-title">#</th>
						<th className="flex justify-center items-center md:table-cell min-w-[233px] md:w-[318px] align-middle border-r border-arrow bg-table-title z-9"><span className="">Назва послуги</span></th>
						<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px]  border-r border-arrow bg-table-title ${extra}`}>Тривалість <span className="hidden md:inline">послуги</span></th>
						<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] bg-table-title ${extra}`}>Вартість <span className="hidden md:inline">послуги</span></th>
					</tr>
					<tr className="flex md:table-row text-center w-[343px] md:w-[680px] overflow-hidde">
						<td className="hidden md:table-cell w[29px] border-x border-arrow">1</td>
						<td className="flex justify-center items-center md:table-cell min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-arrow bg-main-dark z-9">Надання спортивних споруд для проведення спортивно-видовищних заходів, занять з фізичної культури та спорту на майданчику 98*65</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-arrow ${extra}`}>1 година 30 хв.</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-arrow ${extra}`}>2500 грн.</td>
					</tr>
					<tr className="flex md:table-row text-center w-[342px] md:w-[680px] overflow-hidde">
						<td className="hidden md:table-cell border border-arrow">2</td>
						<td className="flex justify-center items-center md:table-cell min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Надання спортивних споруд для проведення спортивно-видовищних заходів, занять з фізичної культури та спорту на майданчику 60*40</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>1 година 30 хв.</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>1200 грн.</td>
					</tr>
					<tr className="flex md:table-row text-center w-[342px] md:w-[680px] overflow-hidde">
						<td className="hidden md:table-cell border border-arrow">3</td>
						<td className="flex justify-center items-center md:table-cell min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Реалізація абонементів на відвідування сауни</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>2 години</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>500 грн.</td>
					</tr>
					<tr className="flex md:table-row text-center w-[342px] md:w-[680px] overflow-hidde">
						<td className="hidden md:table-cell border border-arrow">4</td>
						<td className="flex justify-center items-center md:table-cell min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Проведення групових та індивідуальних занять з фізичної культури і спорту</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>1 година 30 хв.</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>250 грн.</td>
					</tr>
					<tr className="flex md:table-row text-center w-[342px] md:w-[680px] overflow-hidde">
						<td className="hidden md:table-cell border border-arrow">5</td>
						<td className="flex justify-center items-center md:table-cell min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left  border-x border-y border-arrow bg-main-dark z-9">Надання спортивних споруд учасникам спортивних заходів приміщень пристосованих для тимчасового проживання</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-y border-arrow ${extra}`}>1 місяць</td>
						<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-y border-arrow ${extra}`}>1200 грн.</td>
					</tr>
				</table>
			</div>
		</section>
	);
};

export default ServicesPage;