import { ProfilPicture } from "../../components/Profilpicture/ProfilPicture";
import { SideBar } from "../sideBar/SideBar";
import "./navbar.css";
type Props = {
  children: JSX.Element;
};
export function Navbar({ children }: Props) {
  return (
    <>
      <div className="nav-container">
        <h1>Naute</h1>
        <ProfilPicture></ProfilPicture>
      </div>
      <div className="container-child">
        <SideBar></SideBar>
        {children}
      </div>
    </>
  );
}
