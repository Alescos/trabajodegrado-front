/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { getAllAreas } from '../../../Services/area.service';
import { createUser } from '../../../Services/user.service';
import './RegisterUser.scss';

function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [validate, setValidate] = useState(false);
  const [identical, setIdentical] = useState(false);
  const [passwordError, setPasswordErr] = useState('');
  const [area, setArea] = useState<object[]>();
  const [areas, setAreas] = useState<string[]>([]);
  const auth = useAuth();
  const { user } = auth;
  const { organization } = user;
  let areasId: string[] = [''];

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
    const password = passwordInput.firstPassword;
    const role = 0;
    console.log(areas);
    const newUser = {
      email,
      name,
      phone,
      password,
      areas,
      organization,
      role,
    };
    try {
      createUser(newUser).then(() => navigate(-1));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllAreas(organization).then((value) => {
      const data: object[] = value;
      setArea(data);
    });
  }, []);
  return (
    <div className="register-user">
      <div className="register-user__container">
        <form className="register-user__form" action="" method="post">
          <h1 className="title">Registro de usuario</h1>
          <div className="name">
            <label htmlFor="registerUser_name" className="form-label">
              Nombre completo
            </label>
            <input
              type="text"
              className="form-control"
              id="registerUser_name"
              placeholder="Nombre completo"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="register-email">
            <label htmlFor="registerUser_email" className="form-label">
              Correo Electronico
            </label>
            <input
              type="text"
              className="form-control"
              id="registerUser_email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register-password">
            <label htmlFor="registerUser_password" className="form-label">
              Contraseña
            </label>
            <input
              className="form-control"
              type="password"
              placeholder="Contraseña"
              aria-label="default input example"
              id="registerUser_password"
              name="firstPassword"
              onChange={inputChange}
            />
            <p className="text-danger">{passwordError}</p>
          </div>
          <div className="register-confirmPassword">
            <label
              htmlFor="registerUser_confirmPassword"
              className="form-label"
            >
              Confirmar contraseña
            </label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirmar contraseña"
              aria-label="default input example"
              id="registerUser_confirmPassword"
              name="secondPassword"
              onChange={inputChange}
            />
          </div>
          <div className="phone">
            <label htmlFor="registerUser_phone" className="form-label">
              Número telefónico
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Celular"
              aria-label="default input example"
              id="registerUser_phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="area-field">
            <label htmlFor="registerUser_area" className="form-label">
              Área perteneciente
            </label>
            <select
              className="form-control"
              id="registerUser_area"
              name="registerUser_area"
              onChange={(e) => {
                areasId = [e.target.value];
                setAreas(areasId);
              }}
            >
              <option value="">Seleccionar Area</option>
              {Array.isArray(area) ? (
                area.map((area: any, index: number) => (
                  <option key={index} value={area.id} aria-label={area.name}>
                    {area.name}
                  </option>
                ))
              ) : (
                <span />
              )}
            </select>
          </div>
          <div className="saveButton">
            <button
              type="button"
              className="custome_btn"
              onClick={register}
              disabled={!identical}
            >
              Registar
            </button>
          </div>
          <div className="backButton">
            <button
              type="button"
              className="custome_btn"
              onClick={() => navigate(-1)}
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
