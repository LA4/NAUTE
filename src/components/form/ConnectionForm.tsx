import "./form.css";
export function ConnectionForm() {
  return (
    <>
      <form className="form-container" action="">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Mot de passe </label>
        <input type="password" id="password" />
        <button>Connection</button>
      </form>
    </>
  );
}
