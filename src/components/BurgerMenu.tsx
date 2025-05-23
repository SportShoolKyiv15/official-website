import React from 'react';

import { MENU_ITEMS } from '@/data/constants';
import BurgerMenuItem from './BurgerMenuItem';

type Props = {
	closeModal: () => void;
}

const BurgerMenu: React.FC<Props> = ({ closeModal }) => {
	return (
		<ul className='flex flex-col gap-10 pt-[90px] md:pt-[62px] px-9 md:pl-[68px] z-999'>
			{Object.keys(MENU_ITEMS).length > 0 && Object.keys(MENU_ITEMS).map((item, index) => (
				<li key={index} className='text-lg'>
					<BurgerMenuItem index={index} item={item} closeModal={closeModal} />
				</li>
			))}
		</ul>
	);
};

export default BurgerMenu;

