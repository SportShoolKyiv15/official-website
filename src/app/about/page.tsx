import Title from "@/components/Title";

const AboutPage: React.FC = () => {
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
			<div>
				<p className="mb-[50px] text-[22px] font-diplay font-semibold text-button-swipe-card">Історія школи</p>
			</div>
		</section>
	);
};

export default AboutPage;