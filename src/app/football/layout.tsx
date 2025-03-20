import { ReactNode, FC } from 'react';

import PageNav from '@/components/PageNav';

type Props = {
	children: ReactNode
};

const FootballLayout: FC<Props> = ({ children }) => {

	return (
		<main className='w-full flex flex-col items-center bg-main-dark'>
			<PageNav />
			<div className='w-full h-[1px] -mx-[16px] mb-[32px] mt-[22px] lg:mt-5 md:mt-0 bg-block-grey'></div>
			<section className=''>
				{children}
			</section>
		</main>
	);
};
export default FootballLayout;

