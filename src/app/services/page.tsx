'use client';

import { FC, useState, useRef } from "react";

import Title from "@/components/Title";
import Image from "next/image";

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
		}


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
				<div className="flex pl-10 md:pl-0 md:justify-center items-center w-full h-[50px] bg-button-press relative">
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
				<table onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={tableRef1} className="border-collapse w-[336px] sm:w-[345px] md:w-[680px] lg:w-[1256px] text-sm md:text-base overflow-hidden">
					<thead>
						<tr className="flex md:table-row text-center w-[336px] sm:w-[345px] md:w-[680px] lg:w-[1256px] h-[50px] text-black-text bg-table-title overflow-hidde">
							<th className="hidden md:table-cell w-[29px] lg:w-[39px] border-r border-arrow bg-table-title">#</th>
							<th className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] lg:w-[702px] align-middle border-r border-arrow bg-table-title z-9"><span className="">Назва послуги</span></th>
							<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] lg:w-[267px]  border-r border-arrow bg-table-title ${extra}`}>Тривалість <span className="hidden md:inline">послуги</span></th>
							<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] lg:w-[248px] bg-table-title ${extra}`}>Вартість <span className="hidden md:inline">послуги</span></th>
						</tr>
					</thead>
					<tbody>
						<tr className="flex md:table-row text-center w-[334px] sm:w-[343px] md:w-[680px] overflow-hidde">
							<td className="hidden md:table-cell w[29px] border-x border-arrow">1</td>
							<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-arrow bg-main-dark z-9">Надання спортивних споруд для проведення спортивно-видовищних заходів, занять з фізичної культури та спорту на майданчику 98*65</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-arrow ${extra}`}>1 година 30 хв.</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-arrow ${extra}`}>2500 грн.</td>
						</tr>
						<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
							<td className="hidden md:table-cell border border-arrow">2</td>
							<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Надання спортивних споруд для проведення спортивно-видовищних заходів, занять з фізичної культури та спорту на майданчику 60*40</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>1 година 30 хв.</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>1200 грн.</td>
						</tr>
						<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
							<td className="hidden md:table-cell border border-arrow">3</td>
							<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Реалізація абонементів на відвідування сауни</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>2 години</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>500 грн.</td>
						</tr>
						<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
							<td className="hidden md:table-cell border border-arrow">4</td>
							<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Проведення групових та індивідуальних занять з фізичної культури і спорту</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>1 година 30 хв.</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>250 грн.</td>
						</tr>
						<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
							<td className="hidden md:table-cell border border-arrow">5</td>
							<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left  border-x border-y border-arrow bg-main-dark z-9">Надання спортивних споруд учасникам спортивних заходів приміщень пристосованих для тимчасового проживання</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-y border-arrow ${extra}`}>1 місяць</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-y border-arrow ${extra}`}>1200 грн.</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="page-container w-full mb-[50px] md:mb-20 lg:mb-25 lg:px-5">
				<h2 className="mb-5 md:mb-10 text-center font-display text-xl md:text-2xl font-bold">Лижні види спорту</h2>
				<p className="w-full flex justify-center md:justify-end mb-[18px] md:mb-[14px] text-right font-display font-semibold text-sm lg:text-lg leading-[150%]"><span className="md:block text-center md:inline" >Київ</span><span className="inline md:block">,&nbsp;</span >Голосіївский район, вул. Ягідна, 2</p>
				<div className="flex pl-10 md:pl-0 md:justify-center items-center w-full h-[50px] bg-button-press relative">
					<p className="text-lg font-semibold rounded-t-xs">Вартість платних послуг</p>
					<div className="md:hidden absolute top-1/2 -translate-y-1/2 right-[32px] flex justify-between items-center w-5">
						<Image
							src='/svg/activeCirclMarkTable.svg'
							alt='mark'
							width={10}
							height={10}
							className={`${extra2 === 'swiperOnMoveTableLeft' && 'order-2'}`}
						/>
						<Image
							src='/svg/circlMarkTable.svg'
							alt='mark'
							width={6}
							height={6}
							className={`${extra2 === 'swiperOnMoveTableLeft' && 'order-1'}`}
						/>
					</div>
				</div>
				<table onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={tableRef2} className="border-collapse w-[336px] sm:w-[345px] md:w-[680px] lg:w-[1256px] text-sm md:text-base overflow-hidden">
					<thead>
						<tr className="flex md:table-row text-center w-[336px] sm:w-[345px] md:w-[680px] lg:w-[1256px] h-[50px] text-black-text bg-table-title overflow-hidde">
							<th className="hidden md:table-cell w-[29px] border-r border-arrow bg-table-title">#</th>
							<th className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] lg:w-[702px] align-middle border-r border-arrow bg-table-title z-9"><span className="">Назва послуги</span></th>
							<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] lg:w-[267px]  border-r border-arrow bg-table-title ${extra2}`}>Тривалість <span className="hidden md:inline">послуги</span></th>
							<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] lg:w-[248px] bg-table-title ${extra2}`}>Вартість <span className="hidden md:inline">послуги</span></th>
						</tr>
					</thead>
					<tbody>
						<tr className="flex md:table-row text-center w-[334px] sm:w-[343px] md:w-[680px] overflow-hidde">
							<td className="hidden md:table-cell w[29px] border-x border-arrow">1</td>
							<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-arrow bg-main-dark z-9">Надання спортивних споруд для проведення спортивно-видовищних заходів, занять з фізичної культури та спорту в спортивному залі</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px]  text-sm border-r border-arrow ${extra2}`}>1 година 30 хв.</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-arrow ${extra2}`}>400 грн.</td>
						</tr>
						<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
							<td className="hidden md:table-cell border border-arrow">2</td>
							<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Прокат спортивного спорядження, обладнання та  інвентарю-велосипеди спортивні</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra2}`}>1 година</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra2}`}>70 грн.</td>
						</tr>
						<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
							<td className="hidden md:table-cell border border-arrow">3</td>
							<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-y border-arrow bg-main-dark z-9">Прокат спортивного спорядження, обладнання та  інвентарю-лижі бігові</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-y border-arrow ${extra2}`}>1 година</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-y border-arrow ${extra2}`}>80 грн.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ServicesPage;