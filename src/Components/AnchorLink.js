import React from 'react';
import Link from 'next/link';

function AnchorLink({ children, route, pass, target, style }) {
	return (
		<Link
			href={route}
			passHref={pass || false}
			className={`cursor-pointer ${style}`}
			target={target ? '_blank' : null}
		>
			{children}
		</Link>
	);
}

export default AnchorLink;
