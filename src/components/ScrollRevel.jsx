import { motion } from "framer-motion";
const Box = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}  
      whileInView={{
         opacity: 1, x: 0,
         transition:{
            duration:1
         }
      }}
      viewport={{once:true}}
      className="h-[200px] w-[200px] m-4 bg-red-400  rounded flex justify-center items-center text-xl text-white"
    >
      {text}
    </motion.div>
  );
};

const ScrollRevel = () => {
  const greetings = ["Hello", "Hi", "Assalamu alikum", "Welcome"];
  return (
    <div>
      {greetings.map((greeting, index) => (
        <Box key={index} text={greeting} />
      ))}
    </div>
  );
};

export default ScrollRevel;
