import { motion,animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Counter = () => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count,Math.round);
  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });
    return animation.stop;
  }, [count]);
  return <motion.div className="text-3xl font-semibold">{roundedValue}</motion.div>;
};

export default Counter;
