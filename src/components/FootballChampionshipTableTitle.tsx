import { FC } from "react";
import Image from "next/image";

type Props = {
	extra: number;
};


const FootballChampionshipTableTitle: FC<Props> = ({ extra }) => {

	const baseOrders = ['order-1', 'order-2', 'order-3', 'order-4'];
	const first = baseOrders[extra];
	const orderClasses = [first, ...baseOrders.filter(o => o !== first)];

	return (
		<div className="flex pl-10 md:pl-0 md:justify-center items-center w-full h-[50px] bg-button-press relative">
			<p className=" text-lg font-semibold rounded-t-xs">Турнирна таблиця</p>
			<div className="md:hidden absolute top-1/2 -translate-y-1/2 right-[18px] flex gap-1 items-center">
				{orderClasses.map((order, index) => (
					<Image
						key={index}
						src={index === 0 ? '/svg/activeCirclMarkTable.svg' : '/svg/circlMarkTable.svg'}
						alt="mark"
						width={index === 0 ? 10 : 6}
						height={index === 0 ? 10 : 6}
						className={order}
					/>
				))}
			</div>
		</div>
	);
};

export default FootballChampionshipTableTitle;
