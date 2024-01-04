import "./login.css";
import header from "../../../public/assets/images/header.png";

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
            <form action="">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
              <label htmlFor="password">Mot de passe </label>
              <input type="password" id="password" />
              <button>Connection</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
