import { ReactNode, FC } from 'react';

import SportHeader from '@/components/SportHeader';
import { FootballProvider } from '@/contexts/FootballContext';

type Props = {
	children: ReactNode
};

const FootballLayout: FC<Props> = ({ children }) => {

	return (
		<div className='w-full flex flex-col items-center bg-main-dark'>
			<FootballProvider>
				<SportHeader />
				<div className='w-full h-[1px] -mx-[16px] lg:mt-5 md:mt-0 bg-block-grey'></div>
				{children}
			</FootballProvider>
		</div>
	);
};
export default FootballLayout;

