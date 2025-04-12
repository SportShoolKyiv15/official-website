import { FC } from "react";
import EnrollButton from '@/components/buttons/EnrollButton';


type Props = {
	bgUrl: string;
	toggleModal: () => void;
	directionImage?: string;
};

const SportPageHero: FC<Props> = ({ bgUrl, toggleModal, directionImage }) => {

	return (
		<div className='min-w-[300px] xs:w-[336px] sm:w-[345px] md:w-[680] lg:w-[1296px] h-[254px] md:h-[227px] lg:h-[300px] relative'>
			<div className="absolute inset-0  bg-lightgray"></div>
			<div className={`absolute inset-0 ${bgUrl} bg-cover bg-center bg-no-repeat ${directionImage}`}></div>
			<div className="absolute inset-0 football-hero-gradient"></div>
			<div className="absolute left-4 md:left-[38px] top-[55px] lg:top-[94px] md:top-8 md:w-[421px] lg:w-[741px] text-light font-display font-semibold text-[22px] md:text-[26px] lg:text-[36px] tracking-[0.5%] md:tracking-[0%] leading-9">Перший крок у спорті – назавжди в русі!</div>
			<div className='absolute top-[163px] md:top-[144px] lg:top-[179px] left-1/2 -translate-x-1/2 md:left-[28px] md:-translate-x-0'>
				<EnrollButton onClick={toggleModal} />
			</div>
		</div>
	)
};

export default SportPageHero;
