import MainButton from '../Button/MainButton';
import './RegisterUser.scss';

function RegisterUser(): JSX.Element {
  return (
    <div className="container">
      <div className="name">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nombre completo
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Nombre completo"
        />
      </div>
      <div className="email">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Correo Electronico
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="password">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Contraseña
        </label>
        <input
          className="form-control"
          type="password"
          placeholder="Contraseña"
          aria-label="default input example"
        />
      </div>
      <div className="confirmPassword">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Confirmar contraseña
        </label>
        <input
          className="form-control"
          type="password"
          placeholder="Confirmar contraseña"
          aria-label="default input example"
        />
      </div>
      <div className="prueba">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          adas
        </label>
        <input
          className="form-control"
          type="password"
          placeholder="name@example.com"
          aria-label="default input example"
        />
      </div>
      <div className="saveButton">
        <MainButton name="Guardar" variant="info" />
      </div>
      <div className="backButton">
        <MainButton name="Volver" variant="info" />
      </div>
    </div>
  );
}

export default RegisterUser;
