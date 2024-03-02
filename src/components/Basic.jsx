import { motion } from "framer-motion";

const Basic = () => {
   return (
      <motion.div
        className="bg-green-600 w-32 h-32 rounded-full"
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:1}}
      />
   );
};

export default Basic;