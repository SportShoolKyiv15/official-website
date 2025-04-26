import GalleryNav from "@/components/GalleryNav";
import Title from "@/components/Title";
import Image from "next/image";

import { FOOTBALL_FOTO_GALERY } from "@/data/constants";

const AlpineSkiingGaleryFotoPage: React.FC = () => {
	const galery = FOOTBALL_FOTO_GALERY;
	return (
		<section className="page-wrap gap-6 md:gap-8 mt-8 md:mt-10 lg:mt-[50px] mb-[50px] md:mb-[80px] lg:mb-[100px] xs:px-[10px] sm:px-4 md:px-[20px] lg:px-[72px] pt-0">
			<div className="flex flex-col gap-8 md:gap-10 items-center">
				<Title type='section-subtitle'>Галерея</Title>
				<GalleryNav />
			</div>
			<div className="flex w-full flex-col gap-[10px] md:gap-4 lg:gap-6">
				<div className="md:hidden relative h-[239px]">
					<Image
						src={galery[0]}
						alt='Team foto'
						fill
						style={{ objectFit: "cover" }}
						sizes="100vw"
					/>
				</div>
				<div className="flex w-full gap-[10px] md:gap-4 lg:gap-6">
					<div className="hidden md:block w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] relative h-[151px] lg:h-[290px]">
						<Image
							src={galery[0]}
							alt='Team foto'
							fill
							style={{ objectFit: "cover" }}
							sizes="100vw"
						/>
					</div>
					<div className="relative w-[calc(50%-5px)] md:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] h-[116px] md:h-[151px] lg:h-[290px]">
						<Image
							src={galery[1]}
							alt="Photo 1"
							fill
							style={{ objectFit: "cover" }}
							sizes="50vw"
						/>
					</div>
					<div className="relative w-[calc(50%-5px)] md:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] h-[116px] md:h-[151px] lg:h-[290px]">
						<Image
							src={galery[2]}
							alt="Photo 2"
							fill
							style={{ objectFit: "cover" }}
							sizes="50vw"
						/>
					</div>
				</div>
				<div className="flex w-full gap-[10px] md:gap-4 lg:gap-6">
					<div className="relative w-[calc(100%/3-5px)] md:w-[calc((100%-2*16px)/3)] md:w-[calc((100%-2*24px)/3)] h-[116px] md:h-[245px] lg:h-[468px]">
						<Image
							src={galery[3]}
							alt="Photo 1"
							fill
							style={{ objectFit: "cover" }}
							sizes="50vw"
						/>
					</div>
					<div className="relative w-[calc(100%/3*2-5px)] md:grow h-[116px] md:h-[245px] lg:h-[468px]">
						<Image
							src={galery[4]}
							alt="Photo 2"
							fill
							style={{ objectFit: "cover" }}
							sizes="50vw"
						/>
					</div>
				</div>
				<div className="md:hidden relative h-[239px]">
					<Image
						src={galery[6]}
						alt='Team foto'
						fill
						style={{ objectFit: "cover" }}
						sizes="100vw"
					/>
				</div>
				<div className="flex w-full gap-[10px] md:gap-4 lg:gap-6">
					<div className="hidden md:block w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] relative h-[151px] lg:h-[290px]">
						<Image
							src={galery[6]}
							alt='Team foto'
							fill
							style={{ objectFit: "cover" }}
							sizes="100vw"
						/>
					</div>
					<div className="relative w-[calc(50%-5px)] md:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] h-[116px] md:h-[151px] lg:h-[290px]">
						<Image
							src={galery[5]}
							alt="Photo 1"
							fill
							style={{ objectFit: "cover" }}
							sizes="50vw"
						/>
					</div>
					<div className="relative w-[calc(50%-5px)] md:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] h-[116px] md:h-[151px] lg:h-[290px]">
						<Image
							src={galery[8]}
							alt="Photo 2"
							fill
							style={{ objectFit: "cover" }}
							sizes="50vw"
						/>
					</div>
				</div>
				<div className="flex w-full gap-[10px] md:gap-4 lg:gap-6">
					<div className="relative w-[calc(100%/3-5px)] md:grow h-[116px] md:h-[245px] lg:h-[468px]">
						<Image
							src={galery[9]}
							alt="Photo 1"
							fill
							style={{ objectFit: "cover" }}
							sizes="50vw"
						/>
					</div>
					<div className="relative w-[calc(100%/3*2-5px)] md:w-[calc((100%-2*16px)/3)] lg:w-[calc((100%-2*24px)/3)] h-[116px] md:h-[245px] lg:h-[468px]">
						<Image
							src={galery[7]}
							alt="Photo 2"
							fill
							style={{ objectFit: "cover" }}
							sizes="50vw"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AlpineSkiingGaleryFotoPage;