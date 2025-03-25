"use client";

import React, { useState } from "react";

import { setSliderDisplacement } from "@/utils/setSliderDisplacement";
import SwiperCard from "./SwiperCard";
import ArrowIconLeft from "./ArrowIconLeft";
import ArrowIconRight from "./ArrowIconRight";

let count = 0;

const NewsSwiper: React.FC = () => {
	const [extra, setExtra] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [isActiveRight, setIsActiveRight] = useState(false);
	const [isActiveLeft, setIsActiveLeft] = useState(true);

	let xStart: number | null = null;
	let yStart: number | null = null;

	const hanleClick = (): void => {
		if (extra === "") {
			setExtra("swiperOnMove");
			setIsActive(true);
		} else {
			setExtra("");
			setIsActive(false);
		};
	};

	const hanleClickLeft = (): void => {
		if (count > 0) {
			count = count - 1;
		};
		if (0 <= count && count <= 5) {
			setIsActiveRight(false);
			setSliderDisplacement(count, 370);
			setExtra('swiperOnMoveMobile');
		};
		if (count === 0) {
			setIsActiveLeft(true);
			setIsActiveRight(false);
		};
	};

	const hanleClickRight = (): void => {
		if (count < 5) {
			count = count + 1
		};
		if (0 <= count && count <= 5) {
			setIsActiveLeft(false);
			setSliderDisplacement(count, 370);
			setExtra('swiperOnMoveMobile');
		};
		if (count === 5) {
			setIsActiveLeft(false);
			setIsActiveRight(true);
		};
	};

	const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>): void => {
		const firstTouch = e.touches[0];
		xStart = firstTouch.clientX;
		yStart = firstTouch.clientY;
	};

	const handleTouchEnd = (e: React.TouchEvent<HTMLUListElement>): void => {

		if (!xStart || !yStart) {
			return;
		};

		let xEnd = 0;
		let yEnd = 0;

		xEnd = e.changedTouches[0].clientX;
		yEnd = e.changedTouches[0].clientY;

		const xDiff = xEnd - xStart;
		const yDiff = yEnd - yStart;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0) {
				if (count > 0) {
					count = count - 1;
				};
				if (0 <= count && count <= 5) {
					setIsActiveRight(false);
					setSliderDisplacement(count, 370);
					setExtra('swiperOnMoveMobile');
				}
				if (count === 0) {
					setIsActiveLeft(true);
					setIsActiveRight(false);
				};
			} else {
				if (count < 5) {
					count = count + 1
				};
				if (0 <= count && count <= 5) {
					setIsActiveLeft(false);
					setSliderDisplacement(count, 370);
					setExtra('swiperOnMoveMobile');
				};
				if (count === 5) {
					setIsActiveLeft(false);
					setIsActiveRight(true);
				};
			};
		};
		xStart = null;
		yStart = null;
	};

	return (
		<>
			<div className="container lg:w-[998px] xl:w-full relative mx-auto">
				<div className="flex gap-3 absolute right-0 top-[-30px]">
					<button
						type="button"
						className={`hidden lg:block cursor-pointer`}
						onClick={hanleClick}
						disabled={!isActive}
					>
						<ArrowIconLeft color={`${!isActive ? 'arrow-active' : 'arrow'}`} />
					</button>
					<button
						type="button"
						className={`hidden lg:block cursor-pointer `}
						onClick={hanleClick}
						disabled={isActive}
					>
						<ArrowIconRight color={`${isActive ? 'arrow-active' : 'arrow'}`} />
					</button>

					<button
						type="button"
						className={`md:hidden cursor-pointer `}
						onClick={hanleClickLeft}
						disabled={isActiveLeft}
					>
						<ArrowIconLeft color={`${!isActiveLeft ? 'arrow-active' : 'arrow'}`} />
					</button>

					<button
						type="button"
						className={`md:hidden cursor-pointer `}
						onClick={hanleClickRight}
						disabled={isActiveRight}
					>
						<ArrowIconRight color={`${!isActiveRight ? 'arrow-active' : 'arrow'}`} />
					</button>
				</div>
			</div>

			<div className="lg:w-[998px] xl:w-full overflow-hidden mx-auto  ">
				<ul onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} id='sliderAdvantages' className={`flex md:flex-wrap lg:flex-nowrap gap-6 ${extra} swiperTransition`}>
					<SwiperCard idx="1">
						<div>
							<div className="absolute inset-0  bg-lightgray"></div>
							<div className=" absolute inset-0 bg-[url('/img/newsImg1.jpg')] bg-cover bg-center bg-no-repeat"></div>
							<div className="absolute inset-0 news-bg-gradient"></div>
							<div className="swiperCardContent">
								<p className="swiperCardText">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi nemo corrupti dolorum est! Architecto, quod odio? Maxime unde iure at illo rem, asperiores velit a. Assumenda soluta molestiae alias velit fugit iure rerum, a in itaque. Unde, doloribus magnam voluptatem nisi, eius, sit quaerat modi omnis iure ipsa maiores.
								</p>
							</div>
						</div>
					</SwiperCard>
					<SwiperCard idx="2">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg2.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem, temporibus soluta quas recusandae laboriosam impedit odio ea cum officiis reiciendis qui aspernatur tempore architecto obcaecati minima numquam a quis assumenda. Dignissimos nam sit quam corrupti quod ipsam rem deleniti debitis magni, delectus distinctio tempore eveniet magnam nihil hic modi obcaecati corporis culpa provident ratione alias odio inventore. Reiciendis, repellat!
							</p>
						</div>
					</SwiperCard>
					<SwiperCard idx="3">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg1.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius blanditiis sit, dignissimos quam nobis eveniet, quisquam excepturi autem eaque ullam nemo voluptatem nesciunt. Ut doloribus voluptatum corporis minima laboriosam.
							</p>
						</div>
					</SwiperCard>
					<SwiperCard idx="4">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg2.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias corrupti, voluptatum quia magnam quod nisi iure est, voluptas cupiditate ratione laborum tempore veniam iste, quidem voluptates ab voluptatem architecto autem quasi accusantium eos illum? Numquam sapiente consequatur ratione nam.
							</p>
						</div>
					</SwiperCard>
					<SwiperCard idx="5">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg1.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque ex ab dignissimos adipisci mollitia corrupti, odio beatae totam provident ipsa possimus voluptatum rem molestiae, autem vel, sit velit sunt voluptate quisquam nemo. Eligendi iusto recusandae ipsum unde earum necessitatibus eveniet sapiente dignissimos autem, minus nostrum ut aut accusantium itaque minima veritatis voluptatum in, impedit repudiandae iure sunt temporibus saepe! Enim id quisquam modi maxime nostrum provident, quibusdam voluptatum. Error eos deleniti eaque eius ullam iusto consectetur blanditiis omnis consequatur!
							</p>
						</div>
					</SwiperCard>
					<SwiperCard idx="6">
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/newsImg2.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 news-bg-gradient"></div>
						<div className="swiperCardContent">
							<p className="swiperCardText">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos.
							</p>
						</div>
					</SwiperCard>
				</ul>
			</div>
		</>
	);
};

export default NewsSwiper;


