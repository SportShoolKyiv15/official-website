import React from 'react';
import Link from 'next/link';

import { ITEMS } from '@/data/constants';
import { Sports } from '@/globaltypes/types';

type Props = {
	sport: Sports;
	subpage: string;
	onClick?: () => void;
}

const SportNavListItems: React.FC<Props> = ({ sport, subpage, onClick }) => {
	return (
		<>
			<ul className='md:hidden flex flex-col gap-4 pl-10'>
				{sport && ITEMS[sport].map((item, index) => (
					<li key={index}>
						<Link href={`/${sport}/${item[1]}`} onClick={onClick}>{item[0]}</Link>
					</li>
				))}
			</ul>
			<ul className='hidden md:flex gap-[38px] lg:gap-9'>
				{sport && ITEMS[sport].map((item, index) => (
					<li key={index} className='lg:py-[6px]'>
						<Link href={`/${sport}/${item[1]}`} className={`${item[1].includes(subpage) && 'text-button-hover'} hover:text-button-hover`}>{item[0]}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default SportNavListItems;
