import { FC } from "react";
import Image from "next/image";

type Props = {
	extra: string;
}

const ServicesTableTitle: FC<Props> = ({ extra }) => {

	return (
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
	);
};

export default ServicesTableTitle;