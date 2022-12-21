import React, { useEffect, useState } from 'react';
import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  boxStyle?: string;
  style?: string;
  sizes?: string;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  className?: string;
}

function Image({ src, alt, boxStyle, style, sizes }: ImageProps) {
  const [mainStyle, setMainStyle] = useState<string | undefined>('');

  useEffect(() => {
    setMainStyle(boxStyle);
  }, [boxStyle]);

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
