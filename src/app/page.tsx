import Link from "next/link";
// import Image from "next/image";

import EnrollButton from "@/components/buttons/EnrollButton";

export default function Home(): React.JSX.Element {
	return (
		<section className="flex flex-col gap-[50px] items-center pt-[28px]">
			<div className="flex flex-col items-center w-[375px] pb-[13px]">
				<Link
					href={'/football/main'}
					className="w-full aspect-[75/44] relative"
				>
					<div className="absolute inset-0  bg-lightgray"></div>
					<div className=" absolute inset-0 bg-[url('/img/footballHeroImg.jpg')] bg-cover bg-center bg-no-repeat"></div>
					<div className="absolute inset-0 hero-background-gadient"></div>
					<div className="absolute left-4 bottom-[28px] z-10 text-white font-display font-bold text-[26px]">Футбол</div>
				</Link>
				<Link
					href={'/biatlon/main'}
					className="w-full aspect-[75/44] relative"
				>
					<div className="absolute inset-0  bg-lightgray"></div>
					<div className=" absolute inset-0 bg-[url('/img/biatlonHeroImg.jpg')] bg-cover bg-center bg-no-repeat"></div>
					<div className="absolute inset-0 hero-background-gadient"></div>
					<div className="absolute left-4 bottom-[28px] z-10 text-white font-display font-bold text-[26px]">Біатлон</div>
				</Link>
				<Link
					href={'/sky_racing/main'}
					className="w-full aspect-[75/44] relative"
				>
					<div className="absolute inset-0  bg-lightgray"></div>
					<div className=" absolute inset-0 bg-[url('/img/skyRacingHeroImg.jpg')] bg-cover bg-center bg-no-repeat"></div>
					<div className="absolute inset-0  hero-background-gadient"></div>
					<div className="absolute left-4 bottom-[28px] z-10 text-white font-display font-bold text-[26px]">Лижні гонки</div>
				</Link>
				<Link
					href={'/alpine_skiing/main'}
					className="w-full aspect-[75/44] relative"
				>
					<div className="absolute inset-0  bg-lightgray"></div>
					<div className=" absolute inset-0 bg-[url('/img/alpineSkiingHeroImg.jpg')] bg-cover bg-center bg-no-repeat"></div>
					<div className="absolute inset-0  hero-background-gadient"></div>
					<div className="absolute left-4 bottom-[28px] z-10 text-white font-display font-bold text-[26px]">Гірські лижі</div>
				</Link>
				<div className="mt-4">
					<EnrollButton />
				</div>
			</div>
			<div className="flex flex-col items-center w-full mb-[50px] font-display">
				<div className="flex flex-col items-center justify-center py-5">
					<p className="text-center py-3 font-semibold text-[64px]">
						90%
					</p>
					<p className="text-center mt-3">учнів отримують розряд</p>
					<p className="text-center mt-3">Кандидат у майстри спорту</p>
				</div>
				<div className='w-full h-[1px] bg-block-grey'></div>
				<div className="flex flex-col items-center justify-center py-5">
					<p className="text-center py-3 font-semibold text-[64px]">
						500+
					</p>
					<p className="text-center mt-3">медалей вибороли наші </p>
					<p className="text-center mt-3">спортсмени на змаганнях</p>
				</div>
				<div className='w-full h-[1px] bg-block-grey'></div>
				<div className="flex flex-col items-center justify-center py-5">
					<p className="text-center py-3 font-semibold text-[64px]">
						80%
					</p>
					<p className="text-center mt-3">випускників продовжують кар&apos;єру у</p>
					<p className="text-center mt-3">професійному спорті </p>
				</div>
				<div className='w-full h-[1px] bg-block-grey'></div>
				<div className="flex flex-col items-center justify-center py-5">
					<p className="text-center py-3 font-semibold text-[64px]">
						95%
					</p>
					<p className="text-center mt-3">батьків рекомендують нашу</p>
					<p className="text-center mt-3">школу друзям</p>
				</div>
			</div>
			<div className="flex flex-col items-center w-full bg-black font-display font-semibold text-[22px]">
				<div className="relative w-[375px] h-[301px]">
					<div className="absolute bottom-0 right-0 w-[275px] h-[251px] bg-[url(/img/sportMovement.png)]">
					</div>
					<div className="absolute top-6 left-4 flex flex-col items-start z-10">
						<p className="pt-2 pb-3">Твій старт у спорті – твоя</p>
						<p>перемога в житті!</p>
					</div>
				</div>
			</div>
		</section>
	);
}

