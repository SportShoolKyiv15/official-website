import { FC } from 'react';
import Link from 'next/link';

type Props = {
	team: string
}

const ResultButton: FC<Props> = ({ team }) => {
	return (
		<>
			<Link href={`/football/championships?team=${team}`} className='button button-active w-[327px] md:w-[227px] lg:w-[327px] h-[48px] md:h-[44px] lg:h-[48px] transform transition-transform duration-200 hover:scale-101'>
				<span>Результати</span>
			</Link>
		</>
	)
}

export default ResultButton;