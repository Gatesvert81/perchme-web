import React from 'react';

interface CardProps {
  children: React.ReactNode;
  style: string;
  click?: () => void;
}

function Card({ children, style, click }: CardProps) {
  return (
    <div
      className={`w-full h-fit bg-white dark:bg-dark-black dark:text-white ${style}`}
      onClick={click}>
      {children}
    </div>
  );
}

export default Card;
