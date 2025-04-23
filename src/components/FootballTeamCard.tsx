"use client";

import { FC } from "react";
import Image from "next/image";
import ResultButton from "./buttons/ResultsButton";

type Props = {
	isOpened: boolean,
	onToggle: () => void,
	team: {
		coaches: {
			bgUrl: string,
			name: string,
			discription: string,
			autobiography: string
		}[],
		name: string,
		bgUrl: string,
	};
}

const FootballTeamCard: FC<Props> = ({ team, isOpened, onToggle }) => {

	return (
		<>
			<button onClick={onToggle} className="flex justify-between items-center px-1 cursor-pointer">
				<div className="flex flex-col md:flex-row md:items-center w-[297px] md:w-full">
					<h3 className="md:w-[140px] mb-[6px] md:mb-0 md:mr-[47px] lg:mr-[70px] font-display text-lg md:text-xl lg:text-[22px] text-left font-semibold md:font-bold lg:tracking-[0.5%]">{team.name}</h3>
					<p className="md:mr-[63px] text-left leading-[120%]">{`Головний тренер: ${team?.coaches[0]?.name}`}</p>
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
			<div className={`flex flex-col lg:flex-row md:flex-wrap md:justify-between lg:justify-start lg:gap-[71px] md:px-5 lg:px-0 ${isOpened ? 'item-opened mt-5 md:mt-6 md:pb-[9px] lg:pb-[118px]' : 'item-closed'}`}>
				<div className="hidden md:block absolute left-[49px] lg:left-[360px] bottom-[13px] lg:bottom-[88px] w-[569px] lg:w-[914px] md:h-[358px] lg:h-[318px] bg-drop-menu"></div>
				<Image
					src={team.bgUrl}
					alt='Team foto'
					width={327}
					height={219}
					className="md:hidden mb-[29px] z-9"
				/>
				<Image
					src={team.bgUrl}
					alt='Team foto'
					width={343}
					height={184}
					className="hidden md:block lg:hidden mb-[29px] z-9"
				/>
				<Image
					src={team.bgUrl}
					alt='Team foto'
					width={675}
					height={361}
					className="hidden lg:block mb-0 z-9"
				/>
				<div className="md:flex md:h-[213px] self-end lg:self-start">
					<div className="flex gap-[9px] lg:gap-6 md:order-2 mb-10">
						<div
							className='w-[159px] lg:w-[232px] h-[213px] lg:h-[311px] relative rounded-xs overflow-hidden'
						>
							<div className="absolute inset-0  bg-lightgray"></div>
							<div className={`absolute inset-0 ${team.coaches[0].bgUrl} bg-cover bg-center bg-no-repeat`}></div>
							<div className="absolute inset-0 hero-background-gadient"></div>
							<div className="absolute w-[147px] lg:w-[206px] left-[6px]] lg:left-3 bottom-[6px] lg:bottom-3 text-white font-display font-semibold text-sm lg:font-base leading-[150%]">Головний тренер:<br /> {team.coaches[0].name}</div>
						</div>
						<div
							className='w-[159px]  lg:w-[232px] h-[213px] lg:h-[311px] relative rounded-xs overflow-hidden'
						>
							<div className="absolute inset-0  bg-lightgray"></div>
							<div className={`absolute inset-0 ${team.coaches[0].bgUrl} bg-cover bg-center bg-no-repeat`}></div>
							<div className="absolute inset-0 hero-background-gadient"></div>
							<div className="absolute w-[147px] lg:w-[206px] left-[6px] lg:left-3 bottom-[6px] lg:bottom-3 text-white font-display font-semibold text-sm lg:font-base leading-[150%]">Tренер:<br />{team.coaches[0].name}</div>
						</div>
					</div>
					<div className="md:order-1 self-end md:mr-[21px] lg:absolute lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2">
						<ResultButton />
					</div>
				</div>
			</div>
		</>
	);
};

export default FootballTeamCard;