/* eslint-disable react/jsx-no-bind */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { createArea } from '../../../Services/area.service';
import ImageCard from '../../ImageCard/ImageCard';
import NavBar from '../../NavBar/NavBar';
import './CreateArea.scss';

function RegisterArea() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(true);
  const [organization, setOrganization] = useState(0);
  const [file, setFile] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();
  const formData = new FormData();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  formData.append('image', file!);
  useEffect(() => {
    const { user } = auth;
    setOrganization(Number(user.organization));
  }, [auth]);

  async function register() {
    const newArea = {
      name,
      description,
      location,
      phone,
      status,
      organization,
      formData,
    };
    createArea(newArea).then(() => {
      navigate(-1);
    });
  }
  const handleStatus: (event: React.ChangeEvent<HTMLSelectElement>) => void = (
    event
  ) => {
    const { value } = event.target;
    if (value === 'true') {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  return (
    <div className="register_area">
      {/* <div className="toolbar">
        <div className="toolbar_menu">
          <div className="toolbar_menu_options">
            <h1 className="toolbar_title">Creación de area</h1>
            <span className="space" />
            <ul className="breadcrumb">
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/users">Usuarios</Link>
              </li>
              <li>
                <Link to="/areas">volver</Link>
              </li>
            </ul>
          </div>
          <button className="btn_createUser" type="button" onClick={register}>
            Crear
          </button>
        </div>
      </div> */}
      <NavBar
        name="Crear Área"
        nameButton="Crear"
        Handler={register}
        activeButton
      />
      <div className="card_area">
        <div className="card_area_margin">
          <div className="card_area_content">
            {/* <div className="card_area_left">
              <div className="card_image_area">
                <div className="card_image_header">
                  <div className="card_image_title">
                    <h2>Distintivo</h2>
                  </div>
                </div>
                <div className="card_image_body">
                  <div className="card_image_input">
                    <div className="image_wrapper" />
                    <label htmlFor="input_image">
                      <i>
                        <CreateOutline />
                      </i>
                      <input
                        type="file"
                        className="input_image_area"
                        name="avatar"
                        accept=".png, .jpg"
                        id="input_image"
                      />
                    </label>
                  </div>
                </div>
                <div className="card_image_description">
                  <p>Definir la imagen del area</p>
                </div>
              </div>
              <div className="card_area_status">
                <div className="card_image_header">
                  <div className="card_image_title">
                    <h2>Estado</h2>
                  </div>
                  <div className="card_toolbar">
                    <div className="rounden_circle_status status_active" />
                  </div>
                </div>
                <div className="card_image_body">
                  <select
                    className="card_select_status"
                    name=""
                    id=""
                    onChange={handleStatus}
                  >
                    <option className="card_select_option" value="true">
                      Activa
                    </option>
                    <option className="card_select_option" value="false">
                      Inactiva
                    </option>
                  </select>
                </div>
              </div>
            </div> */}
            <ImageCard title="Distintivo del area" setFile={setFile} />
            <div className="card_body">
              <div className="card_body_container">
                <div className="card_body_content">
                  <div className="card_body_flush">
                    <div className="card_body_header">
                      <div className="card_body_title">
                        <h2>Información del Área</h2>
                      </div>
                    </div>
                    <div className="card_body_form">
                      <div className="card_body_input">
                        <label htmlFor="">
                          <p className="required">Nombre Area</p>
                          <input
                            type="text"
                            placeholder="Nombre del area"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="card_body_input description">
                        <label htmlFor="">
                          <p>Descripción</p>
                          <input
                            type="text"
                            placeholder="Ingrese una descripción"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="card_body_input">
                        <label htmlFor="">
                          <p>Ubicación</p>
                          <input
                            type="text"
                            placeholder="Ingresar la ubicación del area"
                            onChange={(e) => setLocation(e.target.value)}
                          />
                          <div className="card_body_location_description">
                            <p>
                              Ingrese la ubicación donde se encuentra el area
                            </p>
                          </div>
                        </label>
                      </div>
                      <div className="card_body_input">
                        <label htmlFor="">
                          <p>Telefono</p>
                          <input
                            type="text"
                            placeholder="Telefono"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterArea;
