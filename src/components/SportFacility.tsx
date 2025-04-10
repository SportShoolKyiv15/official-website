import { FC } from "react";


type Props = {
	bgUrl: string;

};

const SportFacility: FC<Props> = ({ bgUrl }) => {

	return (
		<div>
			<div className='min-w-[300px] xs:w-[356px] sm:w-[375px] md:w-[680] lg:w-[1296px] h-[302px] md:h-[227px] lg:h-[428px] relative'>
				<div className="absolute inset-0  bg-lightgray"></div>
				<div className={`absolute inset-0 ${bgUrl} bg-cover bg-center bg-no-repeat`}></div>
			</div></div>
	)
};

export default SportFacility;