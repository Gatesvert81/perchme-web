import React from "react";
import { motion } from "framer-motion";

function Page({ children, style }) {
  return (
    <motion.div
      className={`w-full ${style}`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Page;
