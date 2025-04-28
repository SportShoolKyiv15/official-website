"use client";

import { FC } from "react";

import Image from "next/image";
type Props = {
	toggleModal: (i: string) => void;
	idx: number;
	item: string;
	key: number;
}

const GaleryCard: FC<Props> = ({ toggleModal, idx, item, key
}) => {



	return (
		<button key={key} onClick={() => toggleModal(item)}
			className={`relative cursor-pointer animate-fade-in active-foto
						 ${idx % 5 === 0 && "w-full md:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] h-[239px] md:h-[151px] lg:h-[290px]"}
						 ${(idx - 1) % 5 === 0 && "w-[calc(50%-5px)] md:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] h-[116px] md:h-[151px] lg:h-[290px]"}
						 ${(idx - 2) % 5 === 0 && "w-[calc(50%-5px)] md:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] h-[116px] md:h-[151px] lg:h-[290px]"}
						${(idx - 3) % 5 === 0 && "w-[calc(100%/3-5px)] md:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] h-[116px] md:h-[245px] lg:h-[468px]"}
							${(idx - 4) % 5 === 0 && "w-[calc(100%/3*2-5px)] md:w-[calc((100%-10px)/3*2)] lg:w-[calc((100%-16px)/3*2)] h-[116px] md:h-[245px] lg:h-[468px]"}
						 `}>
			<Image
				src={item}
				alt={`Photo ${idx + 1}`}
				fill
				style={{ objectFit: "cover" }}
				sizes="100vw"
			/>
		</button>
	);
};

export default GaleryCard;