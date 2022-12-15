import React from 'react';
import Image from './Image';

function Button({ children, type, click, icon, style, left }) {
	return (
		<button type={type} className={style} onClick={click}>
			{icon && (
				<Image
					src={icon}
					alt={children}
					boxStyle="icon"
					layout="fill"
					className="object-center"
				/>
			)}
			{children}
			{left && <p className="absolute top-1/4 right-2">{left}</p>}
		</button>
	);
}

export default Button;
