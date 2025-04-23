import { FC } from "react";
import Image from "next/image";

type Props = {
	extra: number;
}



const FootballChampionshipTableTitle: FC<Props> = ({ extra }) => {
	const order = extra / 103;

	let order1;
	let order2;
	let order3;
	let order4;

	if (order === 0) {
		order1 = 'order-1'
		order2 = 'order-2';
		order3 = 'order-3';
		order4 = 'order-4';
	};

	if (order === 1) {
		order1 = 'order-2'
		order2 = 'order-1';
		order3 = 'order-3';
		order4 = 'order-4';
	};

	if (order === 2) {
		order1 = 'order-3'
		order2 = 'order-1';
		order3 = 'order-2';
		order4 = 'order-4';
	};

	if (order === 3) {
		order1 = 'order-4'
		order2 = 'order-1';
		order3 = 'order-2';
		order4 = 'order-3';
	};

	return (
		<div className="flex pl-10 md:pl-0 md:justify-center items-center w-full h-[50px] bg-button-press relative">
			<p className=" text-lg font-semibold rounded-t-xs">Турнирна таблиця</p>
			<div className="md:hidden absolute top-1/2 -translate-y-1/2 right-[18px] flex gap-1 items-center">
				<Image
					src='/svg/activeCirclMarkTable.svg'
					alt='mark'
					width={10}
					height={10}
					className={`${order1}`}
				/>
				<Image
					src='/svg/circlMarkTable.svg'
					alt='mark'
					width={6}
					height={6}
					className={`${order2}`}
				/>
				<Image
					src='/svg/circlMarkTable.svg'
					alt='mark'
					width={6}
					height={6}
					className={`${order3}`}
				/>
				<Image
					src='/svg/circlMarkTable.svg'
					alt='mark'
					width={6}
					height={6}
					className={`${order4}`}
				/>
			</div>
		</div>
	);
};

export default FootballChampionshipTableTitle;