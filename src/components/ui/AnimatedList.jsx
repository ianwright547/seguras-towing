import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

function AnimatedListItem({ children }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, originY: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 350, damping: 40 }}
      layout
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  );
}

export default function AnimatedList({ children, delay = 1000, className }) {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % childrenArray.length);
    }, delay);
    return () => clearTimeout(timeout);
  }, [index, delay, childrenArray.length]);

  const itemsToShow = useMemo(() => {
    return childrenArray.slice(0, index + 1).reverse();
  }, [index, childrenArray]);

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={item.key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}
