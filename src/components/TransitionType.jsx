import { motion } from "framer-motion";

const TransitionType = () => {
  return (
    <div className="space-y-6 overflow-hidden p-5">
      <motion.div
      className="bg-green-200"
      initial={{ opacity: 0, x: "-100vh" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 3 }}
    >
      <h1>Learning Animation</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolorum
        enim, sunt inventore sed, consequatur, neque optio nihil obcaecati
        voluptatum accusantium vel necessitatibus. Dolores itaque repellendus,
        provident neque facilis aperiam.{" "}
      </p>
    </motion.div>
    <motion.div
    className="bg-red-200"
      initial={{ opacity: 0, x: "-100vh" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type:"spring", duration: 3 }}
    >
      <h1>Learning Animation</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolorum
        enim, sunt inventore sed, consequatur, neque optio nihil obcaecati
        voluptatum accusantium vel necessitatibus. Dolores itaque repellendus,
        provident neque facilis aperiam.{" "}
      </p>
    </motion.div>
    <motion.div
    className="bg-pink-300"
      initial={{ opacity: 0, x: "-100vh" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type:"spring", bounce:0.8, duration: 3 }}
    >
      <h1>Learning Animation</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolorum
        enim, sunt inventore sed, consequatur, neque optio nihil obcaecati
        voluptatum accusantium vel necessitatibus. Dolores itaque repellendus,
        provident neque facilis aperiam.{" "}
      </p>
    </motion.div>
    </div>
  );
};

export default TransitionType;
