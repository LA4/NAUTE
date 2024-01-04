import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LogoDemo from "../../assets/LogoDemo";
import "./profilpicture.css";
export function ProfilPicture() {
  const [visible, setVisible] = useState(false);
  const handleLog = (): void => {
    setVisible(!visible);
  };
  return (
    <>
      <div>
        <div onClick={handleLog} className="pp-container">
          <LogoDemo></LogoDemo>
        </div>
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "linear", duration: 0.2 }}
              className="log"
            >
              connection
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
