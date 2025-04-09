import React, { FC } from 'react';

type Props = {
	onClick: () => void;
	onSubmit: (e: React.FormEvent) => void;
	isDisabled: boolean;
}

const SendButton: FC<Props> = ({ onClick, onSubmit, isDisabled }) => {
	return (
		<>
			<button
				type="submit"
				onClick={onClick}
				onSubmit={onSubmit}
				className={`button w-[327px] md:w-[297px] lg:w-[297px] h-[48px] md:h-[44px] lg:h-[48px] transform transition-transform duration-200 hover:scale-101 ${!isDisabled ? 'button-active' : 'button-disabled'}`}>
				<span>Відправити</span>
			</button>
		</>
	)
}

export default SendButton;