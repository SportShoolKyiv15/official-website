'use client';

import { useState, FC } from "react";

import Title from "@/components/Title";
import Image from "next/image";


const AboutPage: FC = () => {
	const [isOpened, setIsOpened] = useState(false);

	const handleClick = () => {
		setIsOpened(isOpened => !isOpened);
	}

	return (
		<section className="page-wrap">
			<div className="w-full">
				<div className="page-container w-full pb-6">
					<Title type='page-title'>Про нас</Title>
				</div>
				<div className="bg-block-dark">
					<div className="w-full h-[269px] mb-[28px] bg-[url('/img/aboutBgImg1.jpg')] bg-cover bg-lightgray"></div>
					<div className="page-container">
						<p className="mb-6 leading-[150%]">Ласкаво просимо до ДЮСШ №15 – місця, де народжуються чемпіони! Ми – сучасна дитяча спортивна школа, яка об’єднує дітей різного віку, допомагаючи їм розкрити свій потенціал у спорті та виховати в собі силу, дисципліну і командний дух</p>
						<h4 className="pb-[6px] text-lg font-semibold font-display">Про нас</h4>
						<p className="pb-[18px] leading-[150%]">Ми прагнемо не лише навчати дітей спортивним навичкам, а й формувати у них любов до активного способу життя, витривалість та прагнення до саморозвитку. У нашій школі кожна дитина отримує можливість проявити свої здібності, розвивати характер і досягати нових висот.</p>
					</div>
				</div>
			</div>
			<div className="w-full">
				<div className="page-container w-full pb-[22px]">
					<Title type='modal-title'>Наші переваги</Title>
				</div>
				<div className="bg-block-dark">
					<div className="w-full h-[269px] mb-[28px] bg-[url('/img/aboutBgImg2.jpg')] bg-cover bg-lightgray"></div>
					<div className="page-container">
						<p className="mb-6 leading-[150%]">Ласкаво просимо до ДЮСШ №15 – місця, де народжуються чемпіони! Ми – сучасна дитяча спортивна школа, яка об’єднує дітей різного віку, допомагаючи їм розкрити свій потенціал у спорті та виховати в собі силу, дисципліну і командний дух</p>
						<h4 className="pb-[6px] text-lg font-semibold font-display">Про нас</h4>
						<p className="pb-[18px] leading-[150%]">Ми прагнемо не лише навчати дітей спортивним навичкам, а й формувати у них любов до активного способу життя, витривалість та прагнення до саморозвитку. У нашій школі кожна дитина отримує можливість проявити свої здібності, розвивати характер і досягати нових висот.</p>
					</div>
				</div>
			</div>
			<div className="w-full">
				<div className="page-container w-full pb-[22px]">
					<Title type='modal-title'>Наші переваги</Title>
				</div>
				<div className="bg-block-dark">
					<div className="w-full h-[269px] mb-[28px] bg-[url('/img/aboutBgImg3.jpg')] bg-cover bg-lightgray"></div>
					<div className="page-container">
						<p className="mb-6 leading-[150%]">Ласкаво просимо до ДЮСШ №15 – місця, де народжуються чемпіони! Ми – сучасна дитяча спортивна школа, яка об’єднує дітей різного віку, допомагаючи їм розкрити свій потенціал у спорті та виховати в собі силу, дисципліну і командний дух</p>
						<h4 className="pb-[6px] text-lg font-semibold font-display">Про нас</h4>
						<p className="pb-[18px] leading-[150%]">Ми прагнемо не лише навчати дітей спортивним навичкам, а й формувати у них любов до активного способу життя, витривалість та прагнення до саморозвитку. У нашій школі кожна дитина отримує можливість проявити свої здібності, розвивати характер і досягати нових висот.</p>
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
				<div className="page-container">
					<div className="mb-[10px]">
						<Title type="page-title">2000 рік</Title>
					</div>
					<p className="mb-6 leading-[150%]">
						Наша спортивна школа відкрила свої двері для перших учнів. Метою створення було популяризація здорового способу життя та виховання юних спортсменів. У перші роки функціонувало лише кілька секцій, але вже тоді ми заклали фундамент для майбутнього розвитку.
					</p>
					<p className="mb-6 leading-[150%]">
						Завдяки ентузіазму перших тренерів та підтримці батьків, школа швидко стала популярною серед дітей, які мріяли про великі спортивні досягнення. Ми розпочали активну роботу з розвитку методик тренувань, щоб зробити навчальний процес ефективним і доступним для всіх.
					</p>
					<div className="mb-[42px]">
						<Image
							src="/img/historyImg1.jpg"
							alt="history foto"
							width={343}
							height={215}
						/>
					</div>
					<div className="flex justify-end items-end mb-4">
						<Image
							src="/svg/historyDividingParagrafsIcon.svg"
							alt="icon dividing"
							width={15}
							height={47}
							className="mr-[26px]"
						/>
						<div>
							<Title type="page-title">2010 рік</Title>
						</div>
					</div>
					<p className="mb-6 leading-[150%]">
						Школа активно розширювалася, відкрилися нові секції з футболу, легкої атлетики та гімнастики. Наші вихованці почали брати участь у міських та обласних змаганнях, виборюючи перші медалі та нагороди.
					</p>
					<p className="mb-6 leading-[150%]">
						Попит на заняття стрімко зростав, тому ми інвестували в оновлення спортивного інвентарю та розширення тренерського складу. Саме в цей період школа почала співпрацювати з місцевими спортивними федераціями, що дало змогу брати участь у більшій кількості змагань і популяризувати нашу діяльність серед молоді
					</p>
					<div className="mb-[42px]">
						<Image
							src="/img/historyImg2.jpg"
							alt="history foto"
							width={343}
							height={215}
						/>
					</div>
					<div className="flex justify-start items-end mb-4">
						<Image
							src="/svg/historyDividingParagrafsIcon.svg"
							alt="icon dividing"
							width={15}
							height={47}
							className="mr-[26px]"
						/>
						<div>
							<Title type="page-title">2025 рік</Title>
						</div>
					</div>
					<p className="mb-6 leading-[150%]">
						Сьогодні ми – одна з провідних дитячих спортивних шкіл регіону. Наші вихованці представляють Україну на міжнародних змаганнях, виборюючи престижні нагороди. Ми продовжуємо розвиватися, відкривати нові напрямки та допомагати дітям досягати своїх мрій у спорті!
					</p>
					<p className="mb-6 leading-[150%]">
						Наша школа активно співпрацює з європейськими та світовими спортивними організаціями, що дозволяє нашим вихованцям тренуватися за сучасними методиками та брати участь у міжнародних тренувальних зборах. Ми пишаємося тим, що змогли виховати спортсменів, які стають прикладом для молодших поколінь
					</p>
					<div className="mb-[42px]">
						<Image
							src="/img/historyImg3.jpg"
							alt="history foto"
							width={343}
							height={215}
						/>
					</div>
				</div>}
		</section>
	);
};

export default AboutPage;