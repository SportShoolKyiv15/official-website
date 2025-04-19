"use client";

import { FC, useState } from "react";
import Image from "next/image";

type Props = {
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

const FootballTeamCard: FC<Props> = ({ team }) => {

	const [isOpened, setIsOpened] = useState(false);

	const handleClick = () => {
		setIsOpened(isOpened => !isOpened);
	};
	return (
		<>
			<div className="flex justify-between items-center">
				<div className="flex flex-col md:flex-row md:items-center w-[297px] md:w-full">
					<h3 className="md:w-[126px] text-xl mb-[6px] md:mb-0 md:mr-[47px] font-bold font-display">{team.name}</h3>
					<p className="md:mr-[63px] leading-[120%]">{`Головний тренер: ${team?.coaches[0]?.name}`}</p>
				</div>
				<button onClick={handleClick} className="w-[22px] h-[22px] cursor-pointer">
					<Image
						src='/svg/arrow-down.svg'
						alt='Arrow'
						width={22}
						height={22}
						className={`${isOpened && "rotate-180"}`} />
				</button>
			</div>
			{isOpened &&
				<div className=" mt-5">
					Good!
				</div>}
		</>
	);
};

export default FootballTeamCard;