const slideInDown = {
  initial: { opacity: 0, y: "-10vh" },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
const slideInUp = {
  initial: { opacity: 0, y: "-10vh" },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
const zoomIn = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1.7,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
export { slideInDown, slideInUp,zoomIn };
