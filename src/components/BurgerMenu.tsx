import React from 'react';

import { BURGER_MENU_ITEMS } from '@/data/constants';
import BurgerMenuItem from './BurgerMenuItem';

type Props = {
	closeModal: () => void;
}

const BurgerMenu: React.FC<Props> = ({ closeModal }) => {
	return (
		<ul className='flex flex-col gap-10 pt-[90px] md:pt-[62px] px-9 md:pl-[68px]'>
			{Object.keys(BURGER_MENU_ITEMS).length > 0 && Object.keys(BURGER_MENU_ITEMS).map((item, index) => (
				<BurgerMenuItem index={index} item={item} key={index} closeModal={closeModal} />
			))}
		</ul>
	);
};

export default BurgerMenu;

// import React from 'react';

// import { BURGER_ITEMS, BURGER_MENU_ITEMS } from '@/data/constants';
// import BurgerMenuItem from './BurgerMenuItem';

// const BurgerMenu: React.FC = () => {
// 	return (
// 		<ul className='flex flex-col gap-10 pt-[90px] md:pt-[62px] px-9 md:pl-[68px]'>
// 			{Object.keys(BURGER_ITEMS).length > 0 && Object.keys(BURGER_ITEMS).map((item, index) => (
// 				<BurgerMenuItem index={index} item={item} key={index} />
// 			))}
// 		</ul>
// 	);
// };

// export default BurgerMenu;
