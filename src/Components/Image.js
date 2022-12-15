import React, { useEffect, useState } from 'react';
import NextImage from 'next/image';

function Image({ src, alt, boxStyle, style, sizes }) {
  const [mainStyle, setMainStyle] = useState(null);

  useEffect(() => {
    setMainStyle(boxStyle);
  }, []);

  return (
    <div className={`relative ${mainStyle}`}>
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes={
          sizes
            ? sizes
            : '(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw'
        }
        className={style}
      />
    </div>
  );
}

export default Image;
