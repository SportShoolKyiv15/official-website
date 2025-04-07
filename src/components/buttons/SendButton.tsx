import React, { FC } from 'react';

type Props = {
	onClick: () => void;
}

const SendButton: FC<Props> = ({ onClick }) => {
	return (
		<>
			<button
				type="submit"
				onClick={onClick}
				className='button w-[327px] md:w-[297px] lg:w-[297px] h-[48px] md:h-[44px] lg:h-[48px] transform transition-transform duration-200 hover:scale-101'>
				<span>Відправити</span>
			</button>
		</>
	)
}

export default SendButton;