import Image from "next/image";
import { FC, ReactNode } from "react";

type Props = {
	extra: number;
	numberShifts: number;
	children: ReactNode;
};

const TableTitle: FC<Props> = ({ extra, numberShifts, children }) => {

	const circles = Array.from({ length: numberShifts }, (_, i) => i);

	return (
		<div className="flex pl-10 md:pl-0 md:justify-center items-center w-full h-[50px] bg-button-press relative">
			<p className="text-lg font-semibold rounded-t-xs">{children}</p>
			<div className="md:hidden absolute top-1/2 -translate-y-1/2 right-[20px] flex gap-1 items-center">
				{circles.map((_, index) => (
					<Image
						key={index}
						src={index === extra ? '/svg/activeCirclMarkTable.svg' : '/svg/circlMarkTable.svg'}
						alt="mark"
						width={index === extra ? 10 : 6}
						height={index === extra ? 10 : 6}
					/>
				))}
			</div>
		</div>
	);
};

export default TableTitle;
