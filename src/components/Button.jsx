import { motion } from "framer-motion";

const Button = () => {
  return (
    <div className="space-x-3">
      <motion.button
        className="bg-green-500 px-5 py-2 rounded"
        whileTap={{
          scale:1.2,
        }}
      >
        Tap me
      </motion.button>
      <motion.button
        className="bg-green-500 px-5 py-2 rounded"
        whileHover={{
          scale: 1.2,
          transition: { yoyo: Infinity },
        }}
      >
        Hover me
      </motion.button>
      <motion.button
        className="bg-green-500 px-5 py-2 rounded"
        whileHover={{
          scale: 1.2, 
        }}
      >
        Hover me
      </motion.button>
    </div>
  );
};

export default Button;
