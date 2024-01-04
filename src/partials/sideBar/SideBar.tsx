import { LeftDoubleArrow, RightDoubleArrow } from "../../assets/DoubleArrow";
import "./sidebar.css";
import { useState } from "react";
export function SideBar() {
  const [open, setOpen] = useState<Boolean>(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const openStyle = {
    width: open ? "250px" : " 15px",
  };
  return (
    <>
      <div style={openStyle} className="side-container">
        {open && <div className="side-container-child">sidebar</div>}
        <span onClick={handleOpen} className="oppener">
          {open ? <LeftDoubleArrow /> : <RightDoubleArrow />}
        </span>
      </div>
    </>
  );
}
