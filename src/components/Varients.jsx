import { motion } from "framer-motion";
import { slideInDown, zoomIn } from "../animations/animationVaritens";
const Variants = () => {
  return (
    <>
      <motion.div
        variants={slideInDown}
        initial="initial"
        animate="animate"
        className="w-[300px] h-[300px] bg-green-600 rounded "
      >
         <motion.div variants={zoomIn} className="bg-red-600 h-[100px] w-[100px] rounded-full ml-auto border-4 border-white"/> 
      </motion.div>
    </>
  );
};

export default Variants;
