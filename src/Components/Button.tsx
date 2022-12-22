import React from 'react';
import Image from './Image';

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  alt?: string;
  click?: () => void;
  icon?: string;
  style?: string;
  left?: string;
  name?: string;
  select?: boolean;
}

function Button({
  children,
  type,
  click,
  icon,
  alt,
  style,
  left,
}: ButtonProps) {
  return (
    <button type={type} className={style} onClick={click}>
      {icon && (
        <Image
          src={icon}
          alt={alt || 'button'}
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
