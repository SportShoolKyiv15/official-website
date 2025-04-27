'use client';

import { useState, useEffect, FC, useRef } from "react";

import GalleryNav from "@/components/GalleryNav";
import Title from "@/components/Title";
import Image from "next/image";
import FotoGaleryModal from "@/components/modals/FotoGaleryModal";

import { FOOTBALL_FOTO_GALERY } from "@/data/constants";

const GaleryFotoSkyRacingPage: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [IsVisible, setIsVisible] = useState(false);
	const [url, setUrl] = useState('');
	const [visibleCount, setVisibleCount] = useState(10);
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const galery = FOOTBALL_FOTO_GALERY;

	const toggleModal = (urlString: string) => {
		if (isModalOpen) {
			setIsVisible(false);
			setTimeout(() => {
				setIsModalOpen(false);
			}, 300)
		} else {
			setUrl(urlString);
			setIsVisible(true);
			setTimeout(() => {
				setIsModalOpen(true);
			}, 300)
			document.body.classList.add("modal-open");
		}
	};

	const closeModal = () => {
		setIsVisible(false);
		setTimeout(() => {
			setIsModalOpen(false);
		}, 300)
		document.body.classList.remove("modal-open");
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const firstEntry = entries[0];
			if (firstEntry.isIntersecting) {
				setTimeout(() => {
					setVisibleCount(prev => Math.min(prev + 10, galery.length));
				}, 700)
			}
		}, {
			rootMargin: "100px",
		});

		const loader = loaderRef.current;
		if (loader) {
			observer.observe(loader);
		}

		return () => {
			if (loader) {
				observer.unobserve(loader);
			}
		};
	}, [galery.length]);

	return (
		<section className="page-wrap gap-6 md:gap-8 mt-8 md:mt-10 lg:mt-[50px] mb-[50px] md:mb-[80px] lg:mb-[100px] xs:px-[10px] sm:px-4 md:px-[20px] lg:px-[72px] pt-0">
			<div className="flex flex-col gap-8 md:gap-10 items-center">
				<Title type='section-subtitle'>Галерея</Title>
				<GalleryNav />
			</div>
			<div className="flex flex-wrap w-full gap-[10px] md:gap-4 lg:gap-6">
				{galery.length && galery.slice(0, visibleCount).map((item, idx) => (
					<button key={idx} onClick={() => toggleModal(item)}
						className={`relative cursor-pointer animate-fade-in
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
				))}
			</div>
			{visibleCount < galery.length && (
				<div ref={loaderRef} className="h-[50px] flex justify-center items-center mt-6">
					<span className="text-gray-500 animate-pulse">Завантаження...</span>
				</div>
			)}
			<FotoGaleryModal
				isModalOpen={isModalOpen}
				IsVisible={IsVisible}
				closeModal={closeModal}
				url={url} />
		</section>
	);
};

export default GaleryFotoSkyRacingPage;