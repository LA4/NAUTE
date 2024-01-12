import { NauteContainer } from "../../partials/nauteContainer/nautecontainer";

import "./home.css";
import header from "/assets/images/header.png";
export const Home = () => {
  const backgroundStyle = {
    width: "100%",
    backgroundImage: `url(${header})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="home-container">
      <div className="header-home" style={backgroundStyle}>
        <h1>Naute</h1>
        <p>N'oubliez pas de vous souvenir !</p>
      </div>
      <main className="main-container">
        <NauteContainer></NauteContainer>
      </main>
    </div>
  );
};
