/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { createUser } from '../../Services/user.service';
import './RegisterUser.scss';

function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [validate, setValidate] = useState(false);
  const [identical, setIdentical] = useState(false);
  const [passwordError, setPasswordErr] = useState('');
  const [area, setArea] = useState('');
  const auth = useAuth();

  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp = /.{8,}/;

  const navigate = useNavigate();

  const [passwordInput, setPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  });

  const inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    // eslint-disable-next-line no-shadow
    const { value, name } = event.target;
    setPassword({
      ...passwordInput,
      [name]: value,
    });
  };

  useEffect(() => {
    const passwordLength = passwordInput.firstPassword.length;
    const uppercasePassword = uppercaseRegExp.test(passwordInput.firstPassword);
    const lowercasePassword = lowercaseRegExp.test(passwordInput.firstPassword);
    const digitsPassword = digitsRegExp.test(passwordInput.firstPassword);
    const specialCharPassword = specialCharRegExp.test(
      passwordInput.firstPassword
    );
    const minLengthPassword = minLengthRegExp.test(passwordInput.firstPassword);

    if (passwordLength === 0) {
      setPasswordErr('Campo vacío');
      setValidate(false);
    } else if (!uppercasePassword) {
      setPasswordErr('Al menos una mayúscula');
      setValidate(false);
    } else if (!lowercasePassword) {
      setPasswordErr('Al menos una minúscula');
      setValidate(false);
    } else if (!digitsPassword) {
      setPasswordErr('Al menos un digito');
      setValidate(false);
    } else if (!specialCharPassword) {
      setPasswordErr('Al menos un carácter especial');
      setValidate(false);
    } else if (!minLengthPassword) {
      setPasswordErr('Debe tener al menos 8 caracteres');
      setValidate(false);
    } else {
      setPasswordErr('');
      setValidate(true);
    }
    if (validate) {
      if (
        passwordInput.firstPassword === passwordInput.secondPassword &&
        validate
      ) {
        setIdentical(true);
      } else {
        setPasswordErr('Las contraseñas no son iguales');
        setIdentical(false);
      }
    }
  }, [passwordInput]);

  async function register() {
    const { user } = auth;
    const { organization } = user.data;
    const password = passwordInput.firstPassword;
    const newUser = {
      email,
      name,
      phone,
      password,
      organization,
    };
    try {
      console.log(newUser);
      createUser(newUser).then(() => {
        navigate(-1);
      });
    } catch (error) {
      console.log(error);
    }
    /* try {
      const res = await fetch('http://localhost:8000/users/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      console.error(error);
    } */
  }

  return (
    <div className="register-user">
      <div className="register-user__container">
        <form className="register-user__form" action="" method="post">
          <h1 className="title">Registro de usuario</h1>
          <div className="name">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nombre completo
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre completo"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="register-email">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Correo Electronico
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register-password">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Contraseña
            </label>
            <input
              className="form-control"
              type="password"
              placeholder="Contraseña"
              aria-label="default input example"
              name="firstPassword"
              onChange={inputChange}
            />
            <p className="text-danger">{passwordError}</p>
          </div>
          <div className="register-confirmPassword">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Confirmar contraseña
            </label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirmar contraseña"
              aria-label="default input example"
              name="secondPassword"
              onChange={inputChange}
            />
          </div>
          <div className="phone">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Número telefónico
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Celular"
              aria-label="default input example"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="area-field">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Área perteneciente
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Area a la que pertenece"
              aria-label="Area en la que trabaja el usuario"
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <div className="saveButton">
            <Button
              type="button"
              onClick={register}
              variant="info"
              disabled={!identical}
            >
              Registar
            </Button>
          </div>
          <div className="backButton">
            <Button type="button" variant="info" onClick={() => navigate(-1)}>
              Volver
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
