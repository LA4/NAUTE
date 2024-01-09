import { useState } from "react";
import { Button } from "../button/Button";
import "./form.css";
export function ConnectionForm() {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    minValueValidation: false,
    numberValidation: false,
    capitalLetterLvalidation: false,
    specialCharacterValidation: false,
  });
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      <form className="form-container" action="">
        <div className="form-items">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" />
        </div>

        <div className="form-items">
          <label htmlFor="password">Mot de passe </label>

          <input
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <Button active={true}>Connection</Button>
      </form>
    </>
  );
}
