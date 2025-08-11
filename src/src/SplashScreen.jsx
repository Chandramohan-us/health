import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => setTimeout(onFinish, 2000)}
    >
      <h1 className="text-5xl font-bold neon-text">By CM</h1>
    </motion.div>
  );
}
