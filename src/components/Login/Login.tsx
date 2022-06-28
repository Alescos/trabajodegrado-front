/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { login } from '../../Services/auth.service';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticate, setAuthenticate] = useState(true);
  const navigate = useNavigate();
  const auth = useAuth();

  const HandleForm = async () => {
    const user: string = await login(email, password);
    if (user !== undefined) {
      setAuthenticate(true);
      auth.signin(user, () => navigate('/'));
    } else {
      setAuthenticate(false);
    }
  };

  return (
    <>
      {authenticate ? (
        <div />
      ) : (
        <Alert variant="danger">Usuario o contraseña incorrecta</Alert>
      )}
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
          <button className="mainButton" onClick={HandleForm} type="button">
            Ingresar
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
