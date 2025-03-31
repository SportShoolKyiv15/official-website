'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MENU_ITEMS } from '@/data/constants';

type Props = {
	index: number;
	item: string;
	closeModal: () => void;
};

const BurgerMenuItem: React.FC<Props> = ({ index, item, closeModal }) => {
	const [isOpened, setIsOpend] = useState(false);

	const onClick = () => {
		setIsOpend(isOpened => !isOpened);
	}
	return (
		<>
			<div className='flex justify-between'>
				<Link href={Object.values(MENU_ITEMS)[index].path} onClick={closeModal}>
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
				{!isOpened && Object.values(MENU_ITEMS)[index].subItems.length > 0 &&
					<button>
						<Image
							src='/svg/iconDownArrow.svg'
							alt='Arrow'
							width={22}
							height={22}
							onClick={onClick}
						/></button>}
			</div>
			{isOpened && Object.values(MENU_ITEMS)[index].subItems.length > 0 && <ul className='flex flex-col gap-[18px] md:gap-5 pt-[30px] pl-[14px] md:pl-5'>
				{Object.values(MENU_ITEMS)[index].subItems.map((subItem, subIndex) => (
					<li key={subIndex} className='text-base'>
						<Link href={subItem[1]} onClick={closeModal}>
							{subItem[0]}
						</Link>
					</li>
				))}
			</ul>}
		</>
	);
};

export default BurgerMenuItem;
