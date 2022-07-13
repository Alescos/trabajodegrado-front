/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import NavBar from '../../NavBar/NavBar';
import './UpdateUser.scss';

function UpdateUser() {
  const [name, setName] = useState('');
  const [rol, setRol] = useState('');
  const [area, setArea] = useState('');

  async function Update() {
    const updatedUser = {
      name,
      rol,
      area,
    };
    console.log('actualizar');
  }

  return (
    <div className="updateUser">
      <NavBar name="Actualizar Usuario" nameButton="Actualizar" />
      <div className="updateUser_body">
        <div className="updateUser_card">
          <div className="updateUser_card_content">
            <div className="card_image_header">
              <div className="card_image_title">
                <h2>Información del usuario</h2>
              </div>
            </div>
            <div className="card_image_body">
              <img
                src="http://unicauca.edu.co/musica/sites/default/files/default_images/profile-icon-png-898.png"
                alt="profile_pic"
              />
            </div>
            <div className="card_image_description">
              <p>Información básica</p>
            </div>
          </div>
          <div className="updateUser_card_content">
            <div className="card_information" id="card_information_name">
              <label htmlFor="userInformation_name" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className="form-control"
                id="userInformation_name"
                placeholder="Nombre completo"
              />
            </div>
            <div className="card_information" id="card_information_email">
              <label htmlFor="userInformation_email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="text"
                className="form-control"
                id="userInformation_email"
                placeholder="Nombre completo"
              />
            </div>
            <div className="card_information" id="card_information_phone">
              <label htmlFor="userInformation_phone" className="form-label">
                Telefono
              </label>
              <input
                type="text"
                className="form-control"
                id="userInformation_phone"
                placeholder="Nombre completo"
              />
            </div>
            <div className="card_information" id="card_information_area">
              <label htmlFor="userInformation_area" className="form-label">
                Area actual
              </label>
              <input
                type="text"
                className="form-control"
                id="userInformation_area"
                placeholder="Nombre completo"
              />
            </div>
          </div>
        </div>
        <div className="updateUser_body_content">
          <div className="updateUser_body_content_title">
            <h3>Información a actualizar</h3>
          </div>
          <form action="">
            <div className="updateUser_body_userInformation">
              <label htmlFor="updateUser_name" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className="form-control"
                id="updateUser_name"
                placeholder="Nombre completo"
              />
            </div>
            <div className="updateUser_body_userInformation">
              <label htmlFor="updateUser_area" className="form-label">
                Definir Área
              </label>
              <select
                className="form-control"
                id="updateUser_area"
                name="updateUser_area"
                placeholder="Designar Area"
                onChange={(e) => setArea(e.target.value)}
              >
                {/* {areas.map((area: any, index: number) => (
                  <option key={index} value={area.name} aria-label={area.name}>
                    {area.name}
                  </option>
                ))} */}
              </select>
            </div>
            <div className="updateUser_body_userInformation">
              <label htmlFor="updateUser_role" className="form-label">
                Rol del usuario
              </label>
              <select
                className="form-control"
                id="updateUser_role"
                placeholder="Asginar Rol"
                onChange={(e) => setRol(e.target.value)}
              >
                <option value="0">Usuario estandar</option>
                <option value="1">Usuario administrador</option>
              </select>
            </div>
          </form>
          <button className="custome_btn btn_updateUser" type="button">
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
