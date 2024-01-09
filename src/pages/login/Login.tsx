import "./login.css";
import header from "/assets/images/header.png";
import { ConnectionForm } from "../../components/form/ConnectionForm";

export function Login() {
  const backgroundStyle = {
    width: "100%",
    backgroundImage: `url(${header})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <div style={backgroundStyle}>
        <div className="login-container">
          <div className="login-title">
            <h1>Naute</h1>
            <p>N'oubliez pas de vous souvenir !</p>
          </div>

          <div className="login-form-container">
            <div className="login-container-tabs">
              <span className="login-tab">Connection</span>
              <span className="login-tab">Inscription</span>
            </div>
            <ConnectionForm></ConnectionForm>
          </div>
        </div>
      </div>
    </>
  );
}
