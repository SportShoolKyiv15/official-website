import { ReactNode, FC } from 'react';

import SportHeader from '@/components/SportHeader';

type Props = {
	children: ReactNode
};

const SkyRacingLayout: FC<Props> = ({ children }) => {
	return (
		<main className='w-full flex flex-col items-center bg-main-dark'>
			<SportHeader />
			<div className='w-full h-[1px] -mx-[16px] mb-[32px] mt-[22px] lg:mt-5 md:mt-0 bg-block-grey'></div>
			<section className=''>
				{children}
			</section>
		</main>
	);
};
export default SkyRacingLayout;