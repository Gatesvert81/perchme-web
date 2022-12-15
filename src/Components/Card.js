import React from 'react';

function Card({ children, style, click }) {
  return (
    <div
      className={`w-full h-fit bg-white dark:bg-dark-black dark:text-white ${style}`}
      onClick={click}>
      {children}
    </div>
  );
}

export default Card;
