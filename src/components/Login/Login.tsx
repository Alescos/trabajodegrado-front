import MainButton from '../Button/MainButton';
import './Login.scss';

function Login() {
  return (
    <div className="container my-5">
      <h1 className="title">Iniciar sesión</h1>
      <div className="email">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label id="emailLabel" htmlFor="floatingInput">
            Correo Electrónico
          </label>
        </div>
      </div>
      <div className="password">
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label id="passwordLabel" htmlFor="floatingPassword">
            Password
          </label>
        </div>
      </div>
      <a className="link" href="/">
        Registrarme...
      </a>
      <MainButton name="Iniciar sesión" variant="info" />
    </div>
  );
}

export default Login;
