import React, { FC } from 'react';

type Props = {
	onClick: () => void;
}

const ContactButton: FC<Props> = ({ onClick }) => {
	return (
		<>
			<button onClick={onClick} className='button button-active w-[137px] lg:w-[200px] h-[34px] lg:h-[38px] transform transition-transform duration-200 hover:scale-101 z-1'>Зв&apos;язатись</button>
		</>
	)
}

export default ContactButton;