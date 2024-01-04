import { useState } from "react";
import {
  AnimatePresence,
  delay,
  motion,
  optimizedAppearDataAttribute,
} from "framer-motion";
import LogoDemo from "./assets/LogoDemo";
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
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
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
