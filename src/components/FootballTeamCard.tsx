"use client";

import { FC, useState } from "react";
import Image from "next/image";
import ResultButton from "./buttons/ResultsButton";
import { FootballTeam } from "@/globaltypes/types";
import CoachAutobiographyModal from './modals/CoachAutobiographyModal';

type Props = {
	isOpened: boolean,
	onToggle: () => void,
	cardRef?: React.RefObject<HTMLDivElement | null>;
	team: FootballTeam;
}

const FootballTeamCard: FC<Props> = ({ team, isOpened, onToggle, cardRef }) => {
	const [isModalOpen1, setIsModalOpen1] = useState(false);
	const [isModalOpen2, setIsModalOpen2] = useState(false);
	const [IsVisible1, setIsVisible1] = useState(false);
	const [IsVisible2, setIsVisible2] = useState(false);

	const toggleModal1 = () => {
		if (isModalOpen1) {
			setIsVisible1(false);
			setTimeout(() => {
				setIsModalOpen1(false);
			}, 300)
		} else {
			setIsVisible1(true);
			setTimeout(() => {
				setIsModalOpen1(true);
			}, 300)
			document.body.classList.add("modal-open");
		}
	};

	const closeModal1 = () => {
		setIsVisible1(false);
		setTimeout(() => {
			setIsModalOpen1(false);
		}, 300)
		document.body.classList.remove("modal-open");
	};

	const toggleModal2 = () => {
		if (isModalOpen2) {
			setIsVisible2(false);
			setTimeout(() => {
				setIsModalOpen2(false);
			}, 300)
		} else {
			setIsVisible2(true);
			setTimeout(() => {
				setIsModalOpen2(true);
			}, 300)
			document.body.classList.add("modal-open");
		}
	};

	const closeModal2 = () => {
		setIsVisible2(false);
		setTimeout(() => {
			setIsModalOpen2(false);
		}, 300)
		document.body.classList.remove("modal-open");
	};

	return (
		<div ref={cardRef}>
			<button onClick={onToggle} className="flex justify-between items-center w-full px-1 cursor-pointer">
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
				<div className="md:flex md:h-[213px] lg:self-start">
					<div className="flex gap-2 sm:gap-[9px] lg:gap-6 md:order-2 mb-10">
						<button
							onClick={toggleModal1}
							className='w-[156px] sm:w-[159px] lg:w-[232px] h-[213px] lg:h-[311px] relative rounded-xs overflow-hidden cursor-pointer hover:scale-102'
						>
							<div className="absolute inset-0  bg-lightgray"></div>
							<div className={`absolute inset-0 ${team.coaches[0].bgUrl} bg-cover bg-center bg-no-repeat`}></div>
							<div className="absolute inset-0 hero-background-gadient"></div>
							<div className="absolute w-[147px] lg:w-[206px] left-[10px] lg:left-3 bottom-[6px] lg:bottom-3 text-white font-display font-semibold text-sm lg:font-base leading-[150%]">Головний тренер:<br /> {team.coaches[0].name}</div>
						</button>
						<button
							onClick={toggleModal2}
							className='w-[156px] sm:w-[159px lg:w-[232px] h-[213px] lg:h-[311px] relative rounded-xs overflow-hidden cursor-pointer hover:scale-102'
						>
							<div className="absolute inset-0  bg-lightgray"></div>
							<div className={`absolute inset-0 ${team.coaches[1].bgUrl} bg-cover bg-center bg-no-repeat`}></div>
							<div className="absolute inset-0 hero-background-gadient"></div>
							<div className="absolute w-[147px] lg:w-[206px] left-[10px] lg:left-3 bottom-[6px] lg:bottom-3 text-white font-display font-semibold text-sm lg:font-base leading-[150%]">Tренер:<br />{team.coaches[1].name}</div>
						</button>
					</div>
					<div className="md:order-1 self-end md:mr-[21px] lg:absolute lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2 z-9">
						<ResultButton team={team.name} />
					</div>
				</div>
			</div>
			<CoachAutobiographyModal name={team.coaches[0].name} isModalOpen={isModalOpen1} closeModal={closeModal1} IsVisible={IsVisible1} />
			<CoachAutobiographyModal name={team.coaches[1].name} isModalOpen={isModalOpen2} closeModal={closeModal2} IsVisible={IsVisible2} />
		</div>
	);
};

export default FootballTeamCard;