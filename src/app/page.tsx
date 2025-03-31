import Link from "next/link";

import EnrollButton from "@/components/buttons/EnrollButton";
import Title from "@/components/Title";
import NewsSwiper from "@/components/NewsSwiper";

export default function Home(): React.JSX.Element {
	return (
		<section className="flex flex-col gap-[50px] md:gap-20 items-center pt-[28px] md:pt-6">
			<div className="w-full sm:w-[375px] md:w-[680px] lg:w-[1296px]">
				<div className="flex flex-col md:flex-row items-center w-full pb-[13px] md:pb-0 overflow-hidden">
					<Link
						href={'/football/main'}
						className="hero-nav-item start-form"
					>
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className="absolute inset-0 bg-[url('/img/alpineSkiingHeroImg.jpg')] bg-cover bg-left-top bg-no-repeat"></div>
						<div className="absolute inset-0 hero-background-gadient"></div>
						<div className="absolute left-4 lg:left-[38px] bottom-[28px] text-white font-display font-bold text-[26px] md:text-[20px] lg:text-[28px]">Футбол</div>
					</Link>
					<Link
						href={'/biatlon/main'}
						className="hero-nav-item form"
					>
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/biatlonHeroImg.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0 hero-background-gadient"></div>
						<div className="absolute left-4 lg:left-[38px] bottom-[28px] text-white font-display font-bold text-[26px] md:text-[20px] lg:text-[28px]">Біатлон</div>
					</Link>
					<Link
						href={'/sky_racing/main'}
						className="hero-nav-item form"
					>
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/skyRacingHeroImg.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0  hero-background-gadient"></div>
						<div className="absolute left-4 lg:left-[38px] bottom-[28px] text-white font-display font-bold text-[26px] md:text-[20px] lg:text-[28px]">Лижні гонки</div>
					</Link>
					<Link
						href={'/alpine_skiing/main'}
						className="hero-nav-item end-form"
					>
						<div className="absolute inset-0  bg-lightgray"></div>
						<div className=" absolute inset-0 bg-[url('/img/alpineSkiingHeroImg.jpg')] bg-cover bg-center bg-no-repeat"></div>
						<div className="absolute inset-0  hero-background-gadient"></div>
						<div className="absolute left-4 lg:left-[38px] bottom-[28px] text-white font-display font-bold text-[26px] md:text-[20px] lg:text-[28px]">Гірські лижі</div>
					</Link>
				</div>
				<div className="flex justify-center items-center mt-4 md:mt-2 lg:mt-[25px]">
					<EnrollButton />
				</div>
			</div>
			<div className="my-container flex flex-col md:flex-row md:flex-wrap items-center lg:px-[28px] font-display">
				<div className="flex flex-col items-center justify-center md:w-[50%] lg:w-[25%] py-5">
					<p className="text-center py-3 font-semibold text-[64px]">
						90%
					</p>
					<p className="text-center mt-3">учнів отримують розряд</p>
					<p className="text-center mt-3">Кандидат у майстри спорту</p>
				</div>
				<div className='md:hidden w-full h-[1px] bg-block-grey'></div>
				<div className="flex flex-col items-center justify-center md:w-[50%] lg:w-[25%] py-5">
					<p className="text-center py-3 font-semibold text-[64px]">
						500+
					</p>
					<p className="text-center mt-3">медалей вибороли наші </p>
					<p className="text-center mt-3">спортсмени на змаганнях</p>
				</div>
				<div className='md:hidden w-full h-[1px] bg-block-grey'></div>
				<div className="flex flex-col items-center justify-center md:w-[50%] lg:w-[25%] py-5">
					<p className="text-center py-3 font-semibold text-[64px]">
						80%
					</p>
					<p className="text-center mt-3">випускників продовжують кар&apos;єру у</p>
					<p className="text-center mt-3">професійному спорті </p>
				</div>
				<div className='md:hidden w-full h-[1px] bg-block-grey'></div>
				<div className="flex flex-col items-center justify-center md:w-[50%] lg:w-[25%] py-5">
					<p className="text-center py-3 font-semibold text-[64px]">
						95%
					</p>
					<p className="text-center mt-3">батьків рекомендують нашу</p>
					<p className="text-center mt-3">школу друзям</p>
				</div>
			</div>
			<div className="flex flex-col items-center w-[375px] md:w-[720px] lg:w-[1440px] bg-black font-display font-semibold text-[22px] md:text-[36px]">
				<div className="relative w-full h-[301px] md:h-[352px] lg:h-[275px]">
					<div className="absolute bottom-0 lg:bottom-[50%] lg:translate-y-[50%] right-0 md:right-5 lg:right-[74px] w-[275px] md:w-[285px] lg:w-[275px] h-[251px] md:h-[269px] lg:h-[275px] bg-[url(/img/sportMovement.png)]">
					</div>
					<div className="absolute top-6 lg:top-[50%] lg:-translate-y-[50%] left-4 md:left-[46px] lg:left-[123px] flex flex-col lg:flex-row items-start lg:items-center">
						<p className="mr-2 pt-2 pb-3">Твій старт у спорті – твоя</p>
						<p>перемога в житті!</p>
					</div>
				</div>
			</div>
			<div>
				<div className="flex justify-start mx-auto w-[345px] md:w-[680px] lg:w-[1296px] mb-[22px]">
					<Title type='section-title'>Новини</Title>
				</div>
				<div className="w-[375px] md:w-[720px] lg:w-[1440] mb-[50px]">
					<NewsSwiper />
				</div>
			</div>
		</section>
	);
}

