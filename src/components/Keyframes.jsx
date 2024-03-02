import { motion } from "framer-motion";

const Keyframes = () => {
   return (
      <motion.div className="bg-green-600 w-32 h-32 " animate={{
         borderRadius:["10px","80px","10px"],
         rotate:["0deg","360deg","0deg"],
         scale:[1,0.75,1]
      }}
      transition={{ duration: 1 }} /> 
   );
};

export default Keyframes;