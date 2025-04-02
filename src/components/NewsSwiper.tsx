"use client";

import React, { useState, FC } from "react";
import { useEffect } from "react";

import { setSliderDisplacement } from "@/utils/setSliderDisplacement";
import SwiperCard from "./SwiperCard";
import SwipeCardButton from "./buttons/SwipeCardButton";
import useWindowWidth from "@/helpers/windowsSize";
import ArrowIconLeft from "./ArrowIconLeft";
import ArrowIconRight from "./ArrowIconRight";

let count = 0;

const NewsSwiper: FC = () => {
	const [extra, setExtra] = useState("");
	const [isTablet, setIsTablet] = useState(false);
	const [isXS, setIsXS] = useState(false);
	const [isActiveRight, setIsActiveRight] = useState(false);
	const [isActiveLeft, setIsActiveLeft] = useState(true);
	const withWindow = useWindowWidth();

	let xStart: number | null = null;
	let yStart: number | null = null;

	const hanleClickLeft = (): void => {

		if (isTablet) {
			// verify extreme swiper element for tablet
			if (count > 0) {
				count = count - 1;
			};
			if (0 <= count && count <= 2) {
				setIsActiveRight(false);
				setSliderDisplacement(count, 728);
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
				setSliderDisplacement(count, 728);
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
						setSliderDisplacement(count, 728);
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
						setSliderDisplacement(count, 728);
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
						<ArrowIconLeft color={`${!isActiveLeft ? 'arrow-active' : 'arrow'}`} />
						{/* <svg className={`${!isActiveLeft ? 'text-arrow-active' : 'text-arrow'}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.125 9L1.875 9M1.875 9L7.125 14.25M1.875 9L7.125 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg> */}
					</button>

					<button
						type="button"
						className={`lg:hidden cursor-pointer `}
						onClick={hanleClickRight}
						disabled={isActiveRight}
					>
						<ArrowIconRight color={`${!isActiveRight ? 'arrow-active' : 'arrow'}`} />
						{/* <svg className={`${!isActiveRight ? 'text-arrow-active' : 'text-arrow'}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.875 9L16.125 9M16.125 9L10.875 14.25M16.125 9L10.875 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg> */}
					</button>
				</div>
			</div>

			<div className="my-container mx-auto overflow-hidden">
				<ul onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className={`flex lg:flex-wrap lg:items-center lg:justify-center gap-[22px] md:gap-6 ${extra}`}>
					<SwiperCard idx="1">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className="absolute inset-0 bg-[url('/img/newsImg1.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardTitle">Стартує набір у секцію біатлону</p>
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi nemo corrupti dolorum est! Architecto, quod odio? Maxime unde iure at illo rem, asperiores velit a. Assumenda soluta molestiae alias velit fugit iure rerum, a in itaque. Unde, doloribus magnam voluptatem nisi, eius, sit quaerat modi omnis iure ipsa maiores.
							</p>
							<div className="flex justify-between">
								<SwipeCardButton>Читати далі</SwipeCardButton>
								<p className="text-sm font-display">02.02.2024</p>
							</div>
						</div>
					</SwiperCard>
					<SwiperCard idx="2">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg2.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardTitle">Стартує набір у секцію лижні гонки</p>
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem, temporibus soluta quas recusandae laboriosam impedit odio ea cum officiis reiciendis qui aspernatur tempore architecto obcaecati minima numquam a quis assumenda. Dignissimos nam sit quam corrupti quod ipsam rem deleniti debitis magni, delectus distinctio tempore eveniet magnam nihil hic modi obcaecati corporis culpa provident ratione alias odio inventore. Reiciendis, repellat!
							</p>
							<div className="flex justify-between">
								<SwipeCardButton>Читати далі</SwipeCardButton>
								<p className="text-sm font-display">02.02.2024</p>
							</div>
						</div>
					</SwiperCard>
					<div className="hidden md:block lg:hidden" >

					</div>
					<SwiperCard idx="3">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg4.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardTitle">Стартує набір у секцію футболу</p>
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius blanditiis sit, dignissimos quam nobis eveniet, quisquam excepturi autem eaque ullam nemo voluptatem nesciunt. Ut doloribus voluptatum corporis minima laboriosam.
							</p>
							<div className="flex justify-between">
								<SwipeCardButton>Читати далі</SwipeCardButton>
								<p className="text-sm font-display">02.02.2024</p>
							</div>
						</div>
					</SwiperCard>
					<SwiperCard idx="4">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg1.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardTitle">Стартує набір у секцію лижні гонки</p>
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias corrupti, voluptatum quia magnam quod nisi iure est, voluptas cupiditate ratione laborum tempore veniam iste, quidem voluptates ab voluptatem architecto autem quasi accusantium eos illum? Numquam sapiente consequatur ratione nam.
							</p>
							<div className="flex justify-between">
								<SwipeCardButton>Читати далі</SwipeCardButton>
								<p className="text-sm font-display">02.02.2024</p>
							</div>
						</div>
					</SwiperCard>
					<div className="hidden md:block lg:hidden" >

					</div>
					<SwiperCard idx="5">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg2.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardTitle">Стартує набір у секцію футболу</p>
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque ex ab dignissimos adipisci mollitia corrupti, odio beatae totam provident ipsa possimus voluptatum rem molestiae, autem vel, sit velit sunt voluptate quisquam nemo. Eligendi iusto recusandae ipsum unde earum necessitatibus eveniet sapiente dignissimos autem, minus nostrum ut aut accusantium itaque minima veritatis voluptatum in, impedit repudiandae iure sunt temporibus saepe! Enim id quisquam modi maxime nostrum provident, quibusdam voluptatum. Error eos deleniti eaque eius ullam iusto consectetur blanditiis omnis consequatur!
							</p>
							<div className="flex justify-between">
								<SwipeCardButton>Читати далі</SwipeCardButton>
								<p className="text-sm font-display">02.02.2024</p>
							</div>
						</div>
					</SwiperCard>
					<SwiperCard idx="6">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg4.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardTitle">Стартує набір у секцію лижні гонки</p>
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos.
							</p>
							<div className="flex justify-between">
								<SwipeCardButton>Читати далі</SwipeCardButton>
								<p className="text-sm font-display">02.02.2024</p>
							</div>
						</div>
					</SwiperCard>
				</ul>
			</div>
		</>
	);
};

export default NewsSwiper;


