import { ProfilPicture } from "../../components/Profilpicture/ProfilPicture";
import { Home } from "../../pages/home/home";
import { SideBar } from "../sideBar/SideBar";
import "./navbar.css";
export function Navbar() {
  return (
    <>
      <div className="nav-container">
        <h1>Naute</h1>
        <ProfilPicture></ProfilPicture>
      </div>
      <div className="container-child">
        <SideBar></SideBar>
        <Home></Home>
      </div>
    </>
  );
}
