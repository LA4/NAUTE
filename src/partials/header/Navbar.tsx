import { ProfilPicture } from "../../components/Profilpicture/ProfilPicture";
import "./navbar.css";
export function Navbar() {
  return (
    <>
      <div className="nav-container">
        <h1>NAUTE</h1>
        <ProfilPicture></ProfilPicture>
      </div>
    </>
  );
}
