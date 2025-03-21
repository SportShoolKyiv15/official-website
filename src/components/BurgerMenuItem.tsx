'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { BURGER_MENU_ITEMS } from '@/data/constants';
import Link from 'next/link';

type Props = {
	index: number;
	item: string;
	key: number;
	closeModal: () => void;
};

const BurgerMenuItem: React.FC<Props> = ({ index, item, key, closeModal }) => {
	const [isOpened, setIsOpend] = useState(false);

	const onClick = () => {
		setIsOpend(isOpened => !isOpened);
	}
	return (
		<li key={key} className='text-lg'>
			<div className='flex justify-between'>
				<Link href={Object.values(BURGER_MENU_ITEMS)[index].path} onClick={closeModal}>
					{item}
				</Link>
				{isOpened &&
					<button>
						<Image
							src='/svg/iconUpArrow.svg'
							alt='Arrow'
							width={22}
							height={22}
							onClick={onClick}
						/>
					</button>}
				{!isOpened && Object.values(BURGER_MENU_ITEMS)[index].subItems.length > 0 &&
					<button>
						<Image
							src='/svg/iconDownArrow.svg'
							alt='Arrow'
							width={22}
							height={22}
							onClick={onClick}
						/></button>}
			</div>
			{isOpened && Object.values(BURGER_MENU_ITEMS)[index].subItems.length > 0 && <ul className='flex flex-col gap-[18px] md:gap-5 pt-[30px] pl-[14px] md:pl-5'>
				{Object.values(BURGER_MENU_ITEMS)[index].subItems.map((item, index) => (
					<li key={index} className='text-base'>
						<Link href={item[1]} onClick={closeModal}>
							{item[0]}
						</Link>
					</li>
				))}
			</ul>}
		</li>
	);
};

export default BurgerMenuItem;

// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';

// import { BURGER_ITEMS, BURGER_MENU_ITEMS } from '@/data/constants';

// type Props = {
// 	index: number;
// 	item: string;
// 	key: number;
// };

// const BurgerMenuItem: React.FC<Props> = ({ index, item, key }) => {
// 	const [isOpened, setIsOpend] = useState(false);

// 	const onClick = () => {
// 		setIsOpend(isOpened => !isOpened);
// 	}
// 	return (
// 		<li key={key} className='text-lg'>
// 			<div className='flex justify-between'>
// 				{item}
// 				{isOpened &&
// 					<button>
// 						<Image
// 							src='/svg/iconUpArrow.svg'
// 							alt='Arrow'
// 							width={22}
// 							height={22}
// 							onClick={onClick}
// 						/>
// 					</button>}
// 				{!isOpened && Object.values(BURGER_ITEMS)[index].length > 0 &&
// 					<button>
// 						<Image
// 							src='/svg/iconDownArrow.svg'
// 							alt='Arrow'
// 							width={22}
// 							height={22}
// 							onClick={onClick}
// 						/></button>}
// 			</div>
// 			{isOpened && Object.values(BURGER_ITEMS)[index].length > 0 && <ul className='flex flex-col gap-[18px] md:gap-5 pt-[30px] pl-[14px] md:pl-5'>
// 				{Object.values(BURGER_ITEMS)[index].map((item, index) => (
// 					<li key={index} className='text-base'>
// 						{item}
// 					</li>
// 				))}
// 			</ul>}
// 		</li>
// 	);
// };

// export default BurgerMenuItem;
