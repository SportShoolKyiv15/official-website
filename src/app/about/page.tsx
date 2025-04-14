'use client';

import { useState, FC } from "react";

import Title from "@/components/Title";
import Image from "next/image";


const AboutPage: FC = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [IsVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		if (isOpened) {
			setIsVisible(false);
			setTimeout(() => {
				setIsOpened(false);
			}, 800)
		} else {
			setIsVisible(true);
			// setTimeout(() => {
			setIsOpened(true);
			// }, 800)
		}
	};

	return (
		<section className="page-wrap md:px-5 lg:px-0 lg:w-[1296px]">
			<div className="w-full">
				<div className="w-full mb-6 md:mb-[28px] lg:mb-8">
					<Title type='page-title'>Про нас</Title>
				</div>
				<div className="lg:flex bg-block-dark md:rounded-sm">
					<div className="lg:order-2 w-full lg:w-[636px] h-[269px] md:h-[354px] lg:h-[457] mb-[28px] md:mb-10 lg:mb-0 bg-[url('/img/aboutBgImg1.jpg')] bg-cover bg-lightgray"></div>
					<div className="lg:oder-1 lg:w-[660px] px-4  md:px-0 md:pl-3 md:pr-[152px] pb-[18px] md:pb-3 lg:pl-[70px] lg:pr-16 lg:pt-[70px]">
						<p className="mb-6 leading-[150%]">Ласкаво просимо до ДЮСШ №15 – місця, де народжуються чемпіони! Ми – сучасна дитяча спортивна школа, яка об’єднує дітей різного віку, допомагаючи їм розкрити свій потенціал у спорті та виховати в собі силу, дисципліну і командний дух</p>
						<h4 className="mb-[6px] md:mb-[8px] text-lg font-semibold font-display">Наша місія</h4>
						<p className="leading-[150%]">Ми прагнемо не лише навчати дітей спортивним навичкам, а й формувати у них любов до активного способу життя, витривалість та прагнення до саморозвитку. У нашій школі кожна дитина отримує можливість проявити свої здібності, розвивати характер і досягати нових висот.</p>
					</div>
				</div>
			</div>
			<div className="w-full">
				<div className="w-full mb-[22px] lg:mb-8 md:mb-6 text-center">
					<h2 className="text-[26px] font-semibold">Наші переваги</h2>
				</div>
				<div className="lg:flex bg-block-dark md:rounded-sm">
					<div className="w-full lg:w-[437px] h-[269px] lg:h-[371px] mb-[28px] md:mb-10 lg:mb-0 bg-[url('/img/aboutBgImg2.jpg')] bg-cover bg-lightgray"></div>
					<div className="lg:w-[859px] px-4 md:px-0 md:pl-3 md:pr-[152px] lg:pl-[70px] lg:pr-[264px] lg:pt-[60px] pb-[18px] md:pb-3">
						<p className="mb-6 leading-[150%]">Ласкаво просимо до ДЮСШ №15 – місця, де народжуються чемпіони! Ми – сучасна дитяча спортивна школа, яка об’єднує дітей різного віку, допомагаючи їм розкрити свій потенціал у спорті та виховати в собі силу, дисципліну і командний дух</p>
						<h4 className="mb-[6px] md:mb-[8px] text-lg font-semibold font-display">Наша місія</h4>
						<p className="leading-[150%]">Ми прагнемо не лише навчати дітей спортивним навичкам, а й формувати у них любов до активного способу життя, витривалість та прагнення до саморозвитку. У нашій школі кожна дитина отримує можливість проявити свої здібності, розвивати характер і досягати нових висот.</p>
					</div>
				</div>
			</div>
			<div className="w-full">
				<div className="w-full mb-[22px] md:mb-6 lg:mb-8">
					<h2 className="text-[26px] font-semibold">Наші переваги</h2>
				</div>
				<div className="lg:flex bg-block-dark md:rounded-sm">
					<div className="order-2 w-full lg:w-[754px] h-[269px] lg:h-[371px] mb-[28px] md:mb-10 lg:mb-0 bg-[url('/img/aboutBgImg3.jpg')] bg-cover bg-lightgray"></div>
					<div className="order-1 lg:w-[542px] px-4 md:px-0 md:pl-3 md:pr-[152px] lg:pl-[19px] lg:pr-6 lg:pt-15 pb-[18px] md:pb-3 ">
						<p className="mb-6 leading-[150%]">Ласкаво просимо до ДЮСШ №15 – місця, де народжуються чемпіони! Ми – сучасна дитяча спортивна школа, яка об’єднує дітей різного віку, допомагаючи їм розкрити свій потенціал у спорті та виховати в собі силу, дисципліну і командний дух</p>
						<h4 className="mb-[6px] md:mb-[8px] text-lg font-semibold font-display">Наша місія</h4>
						<p className="leading-[150%]">Ми прагнемо не лише навчати дітей спортивним навичкам, а й формувати у них любов до активного способу життя, витривалість та прагнення до саморозвитку. У нашій школі кожна дитина отримує можливість проявити свої здібності, розвивати характер і досягати нових висот.</p>
					</div>
				</div>
			</div>
			<div className={`flex items-center gap-[15px] ${!isOpened && 'mb-[50px]'}`}>
				<p className="text-[22px] font-diplay font-semibold text-button-swipe-card">Історія школи</p>
				<button onClick={handleClick} className="cursor-pointer">
					{isOpened ?
						<Image
							src="/svg/double-arrow-up.svg"
							alt="icon arrow up"
							width={24}
							height={24}
						/> :
						<Image
							src="/svg/double-arrow-down.svg"
							alt="icon arrow down"
							width={24}
							height={24}
						/>
					}
				</button>
			</div>
			{isOpened &&
				<div className={`page-container lg:px-22 ${IsVisible ? 'history-visible' : 'history-hidden'}`}>
					<div className="lg:flex lg:mb-16">
						<div className="lg:w-1/2 pr-[34px]">
							<div className="mb-[10px] relative">
								<h2 className="text-[26px] font-semibold">2000 рік</h2>
								<Image
									src="/svg/historyDividingParagrafsIconStart.svg"
									alt="icon dividing"
									width={15}
									height={47}
									className="absolute -top-[70%] left-1/2 -translate-x-1/2mr-[26px] lg:hidden"
								/>
							</div>
							<p className="mb-6 md:mb-4 leading-[150%]">
								Наша спортивна школа відкрила свої двері для перших учнів. Метою створення було популяризація здорового способу життя та виховання юних спортсменів. У перші роки функціонувало лише кілька секцій, але вже тоді ми заклали фундамент для майбутнього розвитку.
							</p>
							<p className="mb-6 md:mb-[28px] leading-[150%]">
								Завдяки ентузіазму перших тренерів та підтримці батьків, школа швидко стала популярною серед дітей, які мріяли про великі спортивні досягнення. Ми розпочали активну роботу з розвитку методик тренувань, щоб зробити навчальний процес ефективним і доступним для всіх.
							</p>
						</div>
						<div className="lg:w-1/2 h-[215px] md:h-[426px] lg:h-[351px] mb-[42px] md:mb-15 lg:mb-0 lg:mt-[95px] overflow-hidden">
							<Image
								src="/img/historyImg1.jpg"
								alt="history foto"
								width={345}
								height={215}
								className="md:hidden"
							/>
							<Image
								src="/img/historyImg1.jpg"
								alt="history foto"
								width={680}
								height={426}
								className="hidden md:block lg:hidden"
							/>
							<Image
								src="/img/historyImg1.jpg"
								alt="history foto"
								width={561}
								height={351}
								className="hidden lg:block"
							/>
						</div>
					</div>
					<div className="lg:flex  lg:pb-16">
						<div className="order-2 lg:w-1/2 lg:pl-[34px]">
							<div className="flex justify-end md:justify-center lg:justify-start items-end mb-[10px]">
								<Image
									src="/svg/historyDividingParagrafsIcon.svg"
									alt="icon dividing"
									width={15}
									height={47}
									className="md:order-2 mr-[26px] lg:hidden"
								/>
								<div className="md:order-1 md:mr-5">
									<h2 className="text-[26px] font-semibold">2010 рік</h2>
								</div>
							</div>
							<p className="mb-6 md:mb-4 leading-[150%]">
								Школа активно розширювалася, відкрилися нові секції з футболу, легкої атлетики та гімнастики. Наші вихованці почали брати участь у міських та обласних змаганнях, виборюючи перші медалі та нагороди.
							</p>
							<p className="mb-6 md:mb-[28px] leading-[150%]">
								Попит на заняття стрімко зростав, тому ми інвестували в оновлення спортивного інвентарю та розширення тренерського складу. Саме в цей період школа почала співпрацювати з місцевими спортивними федераціями, що дало змогу брати участь у більшій кількості змагань і популяризувати нашу діяльність серед молоді
							</p>
						</div>
						<div className="order-1 lg:w-1/2 h-[215px] md:h-[426px] lg:h-[351px] mb-[42px] md:mb-15 lg:mb-0 lg:mt-[95px] overflow-hidden">
							<Image
								src="/img/historyImg2.jpg"
								alt="history foto"
								width={343}
								height={215}
								className="md:hidden"
							/>
							<Image
								src="/img/historyImg2.jpg"
								alt="history foto"
								width={680}
								height={426}
								className="hidden md:block lg:hidden"
							/>
							<Image
								src="/img/historyImg2.jpg"
								alt="history foto"
								width={561}
								height={351}
								className="hidden lg:block"
							/>
						</div>
					</div>
					<div className="lg:flex lg:mb-16">
						<div className="lg:w-1/2 pr-[34px]">
							<div className="flex justify-start items-end mb-[10px]">
								<div className="mr-[26px] md:mr-[194px]">
									<h2 className="text-[26px] font-semibold">2020 рік</h2>
								</div>
								<Image
									src="/svg/historyDividingParagrafsIcon.svg"
									alt="icon dividing"
									width={15}
									height={47}
									className="lg:hidden"
								/>
							</div>
							<p className="mb-6 md:mb-4 leading-[150%]">
								Школа активно розширювалася, відкрилися нові секції з футболу, легкої атлетики та гімнастики. Наші вихованці почали брати участь у міських та обласних змаганнях, виборюючи перші медалі та нагороди.	</p>
							<p className="mb-6 md:mb-[28px] leading-[150%]">
								Попит на заняття стрімко зростав, тому ми інвестували в оновлення спортивного інвентарю та розширення тренерського складу. Саме в цей період школа почала співпрацювати з місцевими спортивними федераціями, що дало змогу брати участь у більшій кількості змагань і популяризувати нашу діяльність серед молоді.
							</p>
						</div>
						<div className="lg:w-1/2 h-[215px] lg:h-[351px] md:h-[426px] mb-[42px] md:mb-15 lg:mb-0 lg:mt-[95px] overflow-hidden">
							<Image
								src="/img/historyImg3.jpg"
								alt="history foto"
								width={343}
								height={215}
								className="md:hidden"
							/>
							<Image
								src="/img/historyImg3.jpg"
								alt="history foto"
								width={680}
								height={426}
								className="hidden md:block"
							/>
							<Image
								src="/img/historyImg3.jpg"
								alt="history foto"
								width={561}
								height={351}
								className="hidden lg:block"
							/>
						</div>
					</div>
					<div className="lg:flex  lg:pb-16">
						<div className="order-2 lg:w-1/2 lg:pl-[34px]">
							<div className="flex justify-end md:justify-center items-end mb-[10px]">
								<Image
									src="/svg/historyDividingParagrafsIcon.svg"
									alt="icon dividing"
									width={15}
									height={47}
									className="md:order-2 mr-[26px] lg:hidden"
								/>
								<div className="md:order-1 md:mr-5">
									<h2 className="text-[26px] font-semibold">2025 рік</h2>
								</div>
							</div>
							<p className="mb-6 md:mb-4 leading-[150%]">
								Сьогодні ми – одна з провідних дитячих спортивних шкіл регіону. Наші вихованці представляють Україну на міжнародних змаганнях, виборюючи престижні нагороди. Ми продовжуємо розвиватися, відкривати нові напрямки та допомагати дітям досягати своїх мрій у спорті!</p>
							<p className="mb-6 md:mb-[28px] leading-[150%]">
								Наша школа активно співпрацює з європейськими та світовими спортивними організаціями, що дозволяє нашим вихованцям тренуватися за сучасними методиками та брати участь у міжнародних тренувальних зборах. Ми пишаємося тим, що змогли виховати спортсменів, які стають прикладом для молодших поколінь.
							</p>
						</div>
						<div className="order-1 lg:w-1/2 h-[215px] md:h-[426px] lg:h-[351px] mb-[42px] md:mb-15 lg:mb-0 lg:mt-[95px] overflow-hidden">
							<Image
								src="/img/historyImg4.jpg"
								alt="history foto"
								width={343}
								height={215}
								className="md:hidden"
							/>
							<Image
								src="/img/historyImg4.jpg"
								alt="history foto"
								width={680}
								height={426}
								className="hidden md:block lg:hidden"
							/>
							<Image
								src="/img/historyImg4.jpg"
								alt="history foto"
								width={561}
								height={351}
								className="hidden lg:block"
							/>
						</div>
					</div>
				</div>
			}
		</section>
	);
};

export default AboutPage;