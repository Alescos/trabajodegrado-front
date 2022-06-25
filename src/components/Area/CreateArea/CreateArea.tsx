import { CreateOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';
import './CreateArea.scss';

function RegisterArea() {
  return (
    <div className="register_area">
      <div className="toolbar">
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
                <Link to="/">volver</Link>
              </li>
            </ul>
          </div>
          <button className="btn_createUser" type="button">
            Crear
          </button>
        </div>
      </div>
      <div className="card_area">
        <div className="card_area_margin">
          <div className="card_area_content">
            <div className="card_area_left">
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
                  <p>Set the image area</p>
                </div>
              </div>
              <div className="card_area_status">
                <div className="card_image_header">
                  <div className="card_image_title">
                    <h2>Estado</h2>
                  </div>
                </div>
              </div>
            </div>
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
                          <input type="text" placeholder="Nombre del area" />
                        </label>
                      </div>
                      <div className="card_body_input">
                        <label htmlFor="">
                          <p>Descripción</p>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="card_body_input">
                        <label htmlFor="">
                          <p>Telefono</p>
                          <input type="text" />
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
