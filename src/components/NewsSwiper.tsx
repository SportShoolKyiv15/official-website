"use client";

import React, { useState, FC } from "react";
import { useEffect } from "react";

import { setSliderDisplacement } from "@/utils/setSliderDisplacement";
import SwiperCard from "./SwiperCard";
import useWindowWidth from "@/helpers/windowsSize";
// import ArrowIconLeft from "./ArrowIconLeft";
// import ArrowIconRight from "./ArrowIconRight";
import { NEWS_ITEMS } from "@/data/constants";
import NewsModal from "./modals/NewsModal";

let count = 0;

const NewsSwiper: FC = () => {
	const [extra, setExtra] = useState("");
	const [isTablet, setIsTablet] = useState(false);
	const [isXS, setIsXS] = useState(false);
	const [isActiveRight, setIsActiveRight] = useState(false);
	const [isActiveLeft, setIsActiveLeft] = useState(true);
	const [idx, setIdx] = useState<number>();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [IsVisible, setIsVisible] = useState(false);
	const withWindow = useWindowWidth();

	let xStart: number | null = null;
	let yStart: number | null = null;

	const getIdx = (itenIdx: number) => {
		setIdx(itenIdx);
	}

	const hanleClickLeft = (): void => {
		if (isTablet) {
			// verify extreme swiper element for tablet
			if (count > 0) {
				count = count - 1;
			};
			if (0 <= count && count <= 2) {
				setIsActiveRight(false);
				setSliderDisplacement(count, 706);
				setExtra('swiperOnMoveMobile');
			};
			// change direction of swiper movement for tablet
			if (count === 0) {
				setIsActiveLeft(true);
				setIsActiveRight(false);
			};
		} else {
			// verify extreme swiper element for extra small screen and mobile
			if (count > 0) {
				count = count - 1;
			};
			if (isXS) {
				// change number of swiper element for extra small screen
				if (0 <= count && count <= 5) {
					setIsActiveRight(false);
					setSliderDisplacement(count, 358);
					setExtra('swiperOnMoveMobile');
				};
			} else {
				// change number of swiper element for mobile
				if (0 <= count && count <= 5) {
					setIsActiveRight(false);
					setSliderDisplacement(count, 367);
					setExtra('swiperOnMoveMobile');
				};
			};
			// change direction of swiper movement for extra small screen and mobile
			if (count === 0) {
				setIsActiveLeft(true);
				setIsActiveRight(false);
			};
		}
	};

	const hanleClickRight = (): void => {
		if (isTablet) {
			// verify extreme swiper element for tablet
			if (count < 2) {
				count = count + 1
			};
			// change number of swiper element for tablet
			if (0 <= count && count <= 2) {
				setIsActiveLeft(false);
				setSliderDisplacement(count, 706);
				setExtra('swiperOnMoveMobile');
			};
			if (count === 2) {
				// change direction of swiper movement for tablet
				setIsActiveLeft(false);
				setIsActiveRight(true);
			};
		} else {
			// verify extreme swiper element for extra small screen and mobile
			if (count < 5) {
				count = count + 1
			};
			if (isXS) {
				// change number of swiper element for extra small screen
				if (0 <= count && count <= 5) {
					setIsActiveLeft(false);
					setSliderDisplacement(count, 358);
					setExtra('swiperOnMoveMobile');
				};
			} else {
				// change number of swiper element for mobile
				if (0 <= count && count <= 5) {
					setIsActiveLeft(false);
					setSliderDisplacement(count, 367);
					setExtra('swiperOnMoveMobile');
				};
			}
			// change direction of swiper movement for extra small screen and mobile
			if (count === 5) {
				setIsActiveLeft(false);
				setIsActiveRight(true);
			};
		}
	};

	const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>): void => {
		// determine start touch coordinates 
		const firstTouch = e.touches[0];
		xStart = firstTouch.clientX;
		yStart = firstTouch.clientY;
	};

	const handleTouchEnd = (e: React.TouchEvent<HTMLUListElement>): void => {
		if (!xStart || !yStart) {
			// return if there weren't any touch
			return;
		};

		let xEnd = 0;
		let yEnd = 0;

		xEnd = e.changedTouches[0].clientX;
		yEnd = e.changedTouches[0].clientY;

		//determine horizontaal swipe
		const xDiff = xEnd - xStart;
		//determine vertical swipe
		const yDiff = yEnd - yStart;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			// if swipe is horizontal
			if (xDiff > 0) {
				// verify extreme swiper element
				if (count > 0) {
					count = count - 1;
				};
				if (isTablet) {
					// change number of swiper element for tablet
					if (0 <= count && count <= 2) {
						setIsActiveRight(false);
						setSliderDisplacement(count, 706);
						setExtra('swiperOnMoveMobile');
					}
					// change direction of swiper movement for tablet
					if (count === 0) {
						setIsActiveLeft(true);
						setIsActiveRight(false);
					};
				} else {
					if (isXS) {
						// change number of swiper element for extra small screen
						if (0 <= count && count <= 5) {
							setIsActiveRight(false);
							setSliderDisplacement(count, 358);
							setExtra('swiperOnMoveMobile');
						}
					} else {
						// change number of swiper element for mobile
						if (0 <= count && count <= 5) {
							setIsActiveRight(false);
							setSliderDisplacement(count, 367);
							setExtra('swiperOnMoveMobile');
						}
					}
					// change direction of swiper movement for extra small screen and mobile
					if (count === 0) {
						setIsActiveLeft(true);
						setIsActiveRight(false);
					};
				}
			} else {
				if (isTablet) {
					// verify extreme swiper element for tablet
					if (count < 2) {
						count = count + 1
					};
					// change number of swiper element for tablet
					if (0 <= count && count <= 2) {
						setIsActiveLeft(false);
						setSliderDisplacement(count, 706);
						setExtra('swiperOnMoveMobile');
					};
					// change direction of swiper movement for tablet
					if (count === 2) {
						setIsActiveLeft(false);
						setIsActiveRight(true);
					};
				} else {
					// verify extreme swiper element for extra small screen and mobile
					if (count < 5) {
						count = count + 1
					};
					if (isXS) {
						// change number of swiper element for extra small screen
						if (0 <= count && count <= 5) {
							setIsActiveLeft(false);
							setSliderDisplacement(count, 358);
							setExtra('swiperOnMoveMobile');
						};
					} else {
						// change number of swiper element for mobile
						if (0 <= count && count <= 5) {
							setIsActiveLeft(false);
							setSliderDisplacement(count, 367);
							setExtra('swiperOnMoveMobile');
						};
					}
					// change direction of swiper movement for extra small screen and mobile
					if (count === 5) {
						setIsActiveLeft(false);
						setIsActiveRight(true);
					};
				}
			};
		};
		xStart = null;
		yStart = null;
	};

	const toggleModal = () => {
		if (isModalOpen) {
			setIsVisible(false);
			setTimeout(() => {
				setIsModalOpen(false);
			}, 300)
		} else {
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

	// determine screen width
	useEffect(() => {
		if (withWindow !== undefined && 720 <= withWindow && withWindow < 1440) {
			setIsTablet(true);
		} else {
			setIsTablet(false);
		};
		if (withWindow !== undefined && withWindow < 375) {
			setIsXS(true);
		} else {
			setIsXS(false);
		};
	}, [withWindow]);

	useEffect(() => {
		setIdx(0);
	}, [])

	console.log('Index-OUT', idx)
	return (
		<>
			<div className="lg:w-full relative mx-auto">
				<div className="flex gap-3 absolute right-[15px] md:right-[20px] top-[-30px]">
					<button
						type="button"
						className={`lg:hidden cursor-pointer `}
						onClick={hanleClickLeft}
						disabled={isActiveLeft}
					>
						{/* <ArrowIconLeft color={`${!isActiveLeft ? 'arrow-active' : 'arrow'}`} /> */}
						<svg className={`${!isActiveLeft ? 'text-arrow-active' : 'text-arrow'}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.125 9L1.875 9M1.875 9L7.125 14.25M1.875 9L7.125 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>

					<button
						type="button"
						className={`lg:hidden cursor-pointer `}
						onClick={hanleClickRight}
						disabled={isActiveRight}
					>
						{/* <ArrowIconRight color={`${!isActiveRight ? 'arrow-active' : 'arrow'}`} /> */}
						<svg className={`${!isActiveRight ? 'text-arrow-active' : 'text-arrow'}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.875 9L16.125 9M16.125 9L10.875 14.25M16.125 9L10.875 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
			</div>

			<div className="my-container mx-auto overflow-hidden">
				<ul onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className={`flex lg:flex-wrap lg:items-center lg:justify-center gap-x-[22px] md:gap-x-6 ${extra}`}>
					{NEWS_ITEMS[0] && NEWS_ITEMS.map((item, idx) => (
						<SwiperCard
							key={idx}
							idx={idx}
							bgUrl={item.bgUrl}
							title={item.title}
							text={item.text} date={item.date}
							toggleModal={toggleModal}
							getIdx={getIdx} />
					))}
				</ul>
				{idx !== undefined &&
					<NewsModal
						isModalOpen={isModalOpen}
						closeModal={closeModal}
						IsVisible={IsVisible}
						bgUrl={NEWS_ITEMS[idx].bgUrl}
						title={NEWS_ITEMS[idx].title}
						text={NEWS_ITEMS[idx].text}
						date={NEWS_ITEMS[idx].date} />}
			</div>
		</>
	);
};

export default NewsSwiper;


