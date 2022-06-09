import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../Services/auth.service';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleForm = () => {
    login(email, password);
  };

  /* async function login() {
    const user = {
      email,
      password,
    };
    try {
      const res = await fetch('http://localhost:8000/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          alg: 'HS256',
          typ: 'JWT',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(user),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      });
      localStorage.setItem('token', res.token);
    } catch (error) {
      console.error(error);
    }
  } */

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
        <Link className="link" to="/Register">
          Registrarme
        </Link>
        <button className="mainButton" onClick={HandleForm} type="button">
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default Login;
