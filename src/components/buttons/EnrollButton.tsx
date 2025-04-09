import React from 'react';

type Props = {
	onClick: () => void;
}

const EnrollButton: React.FC<Props> = ({ onClick }) => {
	return (
		<>
			<button onClick={onClick} className='button button-active min-x-[300px] xs:w-[333px] sm:w-[343px] h-[48px] md:h-[44px] lg:h-[48px] transform transition-transform duration-200 hover:scale-101'>
				<span>Як записати дитину до нашої школи</span>
			</button>
		</>
	)
}

export default EnrollButton;