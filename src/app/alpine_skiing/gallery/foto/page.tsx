'use client';

import { useState, useEffect, FC, useRef } from "react";

import GalleryNav from "@/components/GalleryNav";
import Title from "@/components/Title";
import GaleryList from "@/components/GaleryList";
import FotoGaleryModal from "@/components/modals/FotoGaleryModal";

import { FOOTBALL_FOTO_GALERY } from "@/data/constants";

const AlpineSkiingGaleryFotoPage: FC = () => {
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
			<GaleryList toggleModal={toggleModal} galery={galery} visibleCount={visibleCount} />
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

export default AlpineSkiingGaleryFotoPage;

