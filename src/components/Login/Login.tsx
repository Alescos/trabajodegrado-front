import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { login } from '../../Services/auth.service';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  const HandleForm = async () => {
    const user = await login(email, password);
    if (user) {
      auth.signin(user, () => navigate('/'));
    } else {
      <Alert key="danger" variant="danger">
        Usuario o contraseña incorrectas!
      </Alert>;
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1 className="title">Iniciar sesión</h1>
        <div className="email">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <label id="passwordLabel" htmlFor="floatingPassword">
              Password
            </label>
          </div>
        </div>
        {/*         <Link className="link" to="/Register">
          Registrarme
        </Link> */}
        <button className="mainButton" onClick={HandleForm} type="button">
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default Login;
