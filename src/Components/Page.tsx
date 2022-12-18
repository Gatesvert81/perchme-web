import React from 'react';
import { motion } from 'framer-motion';

const Page = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: string;
}) => {
  return (
    <motion.div
      className={`w-full ${style}`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}>
      {children}
    </motion.div>
  );
};

export default Page;
