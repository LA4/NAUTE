import { AnimatePresence, useAnimate } from "framer-motion";
import { LeftDoubleArrow, RightDoubleArrow } from "../../assets/DoubleArrow";
import "./sidebar.css";
import { useState } from "react";
export function SideBar() {
  const [open, setOpen] = useState<Boolean>(true);
  const [scope, animate] = useAnimate();
  const handleOpen = () => {
    if (open) {
      animate([
        [".side-container-child", { x: -100, width: "0" }, { duration: 0.3 }],
        [
          scope.current,
          { opacity: 1, width: "0px" },
          { duration: 0.3, at: "<" },
        ],
      ]);
      setOpen(!open);
    } else {
      animate([
        [
          scope.current,
          { x: 0, opacity: 1, width: "250px" },
          { duration: 0.3 },
        ],
        [
          ".side-container-child",
          { x: 0, width: "100%", display: "none" },
          { duration: 0.3, at: "<" },
        ],
      ]);
      setOpen(!open);
    }
  };
  return (
    <>
      <AnimatePresence>
        <div ref={scope} className="side-container">
          <div className="side-container-child">sidebar</div>
        </div>
      </AnimatePresence>
      {open ? (
        <span onClick={handleOpen} className="oppener">
          <LeftDoubleArrow />
        </span>
      ) : (
        <span onClick={handleOpen} className="oppener">
          <RightDoubleArrow />
        </span>
      )}
    </>
  );
}
