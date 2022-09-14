/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { getAllAreas } from '../../../Services/area.service';
import { getUser } from '../../../Services/user.service';
import NavBar from '../../NavBar/NavBar';
import './UpdateUser.scss';

function UpdateUser() {
  const auth = useAuth();
  const [name, setName] = useState('');
  const [rol, setRol] = useState('');
  const [area, setArea] = useState<object[]>();
  const [user, setUser] = useState<any>();
  const [areas, setAreas] = useState<string[]>([]);
  let areasId: string[] = [''];
  const { organization } = auth.user;
  const { id } = auth.user;
  async function Update() {
    const updatedUser = {
      name,
      rol,
      area,
    };
    console.log('actualizar');
  }
  useEffect(() => {
    getUser(id).then((data) => {
      setUser(data);
    });
    getAllAreas(organization).then((value) => {
      const data: object[] = value;
      setArea(data);
    });
  }, []);
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
            <div className="card_information" id="card_information_email">
              <label htmlFor="userInformation_email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="text"
                className="form-control"
                id="userInformation_email"
                placeholder="Nombre completo"
                value={user ? user!.email : ''}
                disabled
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
                value={user ? user!.phone : ''}
              />
            </div>
            <div className="card_information" id="card_information_area">
              <label htmlFor="userInformation_area" className="form-label">
                Area actual
              </label>
              <input
                className="form-control"
                id="registerUser_area"
                name="registerUser_area"
                value={user ? user!.areas : ''}
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
                value={user ? user!.name : ''}
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
                onChange={(e) => {
                  areasId = [e.target.value];
                  setAreas(areasId);
                }}
              >
                <option value="">Seleccionar Area</option>
                {Array.isArray(area) ? (
                  area.map((item: any, index: number) => (
                    <option key={index} value={item.id} aria-label={item.name}>
                      {item.name}
                    </option>
                  ))
                ) : (
                  <option>Ningún area definida</option>
                )}
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
                value={user ? user!.role : ''}
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
