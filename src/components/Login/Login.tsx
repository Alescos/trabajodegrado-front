import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /* useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/login');
    }
  }); */
  async function login() {
    const item = {
      email,
      password,
    };
    try {
      const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // mode: 'no-cors',
        body: JSON.stringify(item),
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
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
      {/* <a className="link" href="/Register">
        Registrarme
      </a> */}
      <button className="mainButton" onClick={login} type="button">
        Ingresar
      </button>
    </div>
  );
}

export default Login;
