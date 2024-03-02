import { motion } from "framer-motion";

const TextMotion = () => {
  const message = "We are enjoying reactive accelerator course in LWS";
  const wordsArray = message.split(" ");
  return (
    <div>
      <h3 className="text-2xl text-center text-red-500 bg-gray-200 py-4">
        {wordsArray.map((word, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay:index/10 }}
            key={index}
          >
            {word}{" "}
          </motion.span>
        ))}
      </h3>
    </div>
  );
};

export default TextMotion;
