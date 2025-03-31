import React from 'react'

const SendButton: React.FC = () => {
	return (
		<>
			<button className='button w-[327px] md:w-[297px] lg:w-[297px] h-[48px] md:h-[44px] lg:h-[48px] transform transition-transform duration-200 hover:scale-102'>
				<span>Відправити</span>
			</button>
		</>
	)
}

export default SendButton;