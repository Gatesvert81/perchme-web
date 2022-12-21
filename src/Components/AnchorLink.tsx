import React from 'react';
import Link from 'next/link';

interface AnchorLinkProps {
  children: React.ReactNode;
  route: string;
  pass?: boolean;
  style?: string;
}

function AnchorLink({ children, route, pass, style }: AnchorLinkProps) {
  // REVIEW: Decide if target is needed
  return (
    <Link
      href={route}
      passHref={pass || false}
      className={`cursor-pointer ${style}`}
      // target={target ? '_blank' : null}
    >
      {children}
    </Link>
  );
}

export default AnchorLink;
