import { ReactNode, FC } from 'react';

import SportHeader from '@/components/SportHeader';

type Props = {
	children: ReactNode
};

const SkyRacingLayout: FC<Props> = ({ children }) => {
	return (
		<div className='w-full flex flex-col items-center bg-main-dark'>
			<SportHeader />
			<div className='w-full h-[1px] -mx-[16px] lg:mt-5 md:mt-0 bg-block-grey'></div>
			{children}
		</div>
	);
};
export default SkyRacingLayout;