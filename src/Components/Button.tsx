import React from 'react';
import Image from './Image';

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  click?: () => void;
  icon?: string;
  style?: string;
  left?: string;
  name?: string;
  select?: boolean;
}

function Button({ text, type, click, icon, style, left }: ButtonProps) {
  return (
    <button type={type} className={style} onClick={click}>
      {icon && (
        <Image
          src={icon}
          alt={text}
          boxStyle="icon"
          layout="fill"
          className="object-center"
        />
      )}
      {text}
      {left && <p className="absolute top-1/4 right-2">{left}</p>}
    </button>
  );
}

export default Button;
