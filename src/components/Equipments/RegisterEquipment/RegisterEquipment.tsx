/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-useless-escape */
import { useEffect, useState } from 'react';
import { CreateOutline } from 'react-ionicons';
import { useNavigate, useParams } from 'react-router-dom';

import image from '../../../Assets/Images/EquipmentImages/ImageDevice.png';
import useAuth from '../../../Hooks/useAuth';
import { getAreaById } from '../../../Services/area.service';
import {
  registerEquipment,
  uploadFile,
} from '../../../Services/equipment.service';
import NavBar from '../../NavBar/NavBar';
import ToggleButton from '../../ToggleButton/ToggleButton';
import './RegisterEquipment.scss';

function RegisterEquipment() {
  const styles = {
    backgroundImage: `url('${image}')`,
  };

  type Area = {
    name: string;
    description: string;
    phone: string;
    organization: string;
  };
  const auth = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [serial, setSerial] = useState('');
  const [alias, setAlias] = useState('');
  const [purchasedAt, setPurchasedAt] = useState('');
  const [status, setStatus] = useState(true);
  const [classEquipment, setClassEquipment] = useState('');
  const [history, setClassHistory] = useState('');
  const [area, setArea] = useState('');
  const [file, setFile] = useState<any>(null);
  const [nameArea, setNameArea] = useState('');
  const { organization } = auth.user;
  const data = new FormData();
  const { id } = useParams();

  async function createEquipment() {
    data.append('images', file!);
    const newEquipment = {
      name,
      branch,
      model,
      type,
      serial,
      alias,
      purchasedAt,
      status,
      classEquipment,
      history,
      area,
    };

    try {
      console.log(file);
      uploadFile(id!, data).then(() => {
        setFile(null);
      });
      registerEquipment(newEquipment);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAreaById(id!).then((value) => {
      const data: Area = value;
      setNameArea(data.name);
      setArea(id!);
    });
  }, []);

  return (
    <div className="registerEquipment">
      <NavBar
        name="Registro de Equipo"
        nameButton="Registrar"
        Handler={createEquipment}
        activeButton
      />
      <div className="registerEquipment_content">
        <div className="registerEquipment_mainContent">
          <div className="registerEquipment_leftCard">
            {/* <ImageCard title="Imagen" styles={styles} setFile={setFile} /> */}
            <div className="imageCard">
              <div className="imageCard_content">
                <div className="imageCard_header">
                  <div className="imageCard_title">
                    <h2>Imagen</h2>
                  </div>
                </div>
                <div className="imageCard_body">
                  <div className="imageCard_input">
                    <div className="image_wrapper" />
                    <label htmlFor="imageCard_input_image">
                      <i>
                        <CreateOutline />
                      </i>
                      <input
                        type="file"
                        className="imageCard_input_image form-control"
                        accept=".png, .jpg"
                        id="imageCard_input_image"
                        onChange={(e) => {
                          setFile(e.target.files![0]);
                        }}
                      />
                    </label>
                  </div>
                </div>
                <div className="imageCard_description">
                  <p>Definir la imagen del area</p>
                </div>
              </div>
            </div>
            <ToggleButton status="Estado" setStatus={setStatus} />
          </div>
          <div className="registerEquipment_form">
            <div className="registerEquipment_form_title">
              <h3>Información principal</h3>
            </div>
            <div className="card_information" id="card_information_name">
              <label
                htmlFor="equipmentInformation_name"
                className="form-label required"
              >
                Nombre del equipo
              </label>
              <input
                type="text"
                className="form-control"
                id="equipmentInformation_name"
                placeholder="Nombre del equipo"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="card_information" id="card_information_branch">
              <label
                htmlFor="equipmentInformation_branch"
                className="form-label required"
              >
                Marca
              </label>
              <input
                type="text"
                className="form-control"
                id="equipmentInformation_branch"
                placeholder="Marca"
                onChange={(e) => setBranch(e.target.value)}
              />
            </div>
            <div className="card_information" id="card_information_model">
              <label
                htmlFor="equipmentInformation_model"
                className="form-label"
              >
                Modelo
              </label>
              <input
                type="text"
                className="form-control"
                id="equipmentInformation_model"
                placeholder="Modelo del equipo"
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className="card_information" id="card_information_type">
              <label htmlFor="equipmentInformation_type" className="form-label">
                Tipo
              </label>
              <input
                type="text"
                className="form-control"
                id="equipmentInformation_type"
                placeholder="Tipo del equipo"
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="card_information" id="card_information_serial">
              <label
                htmlFor="equipmentInformation_serial"
                className="form-label"
              >
                Serial
              </label>
              <input
                type="text"
                className="form-control"
                id="equipmentInformation_serial"
                placeholder="Número serial"
                onChange={(e) => setSerial(e.target.value)}
              />
            </div>
            <div className="card_information" id="card_information_alias">
              <label
                htmlFor="equipmentInformation_alias"
                className="form-label"
              >
                Alias
              </label>
              <input
                type="text"
                className="form-control"
                id="equipmentInformation_alias"
                placeholder="alias con que se conoce al equipo"
                onChange={(e) => setAlias(e.target.value)}
              />
            </div>
            <div className="card_information" id="card_information_area">
              <label htmlFor="equipmentInformation_area" className="form-label">
                Area
              </label>
              <input
                type="text"
                className="form-control"
                name="registerUser_area"
                id="equipmentInformation_area"
                placeholder=""
                value={nameArea}
                disabled
                readOnly
              />
              {/*  <select
                className="form-control"
                id="equipmentInformation_area"
                name="registerUser_area"
                onChange={(e) => setArea(e.target.value)}
              >
                {areas.map((area: any, index: number) => (
                  <option key={index} value={area.name} aria-label={area.name}>
                    {area.name}
                  </option>
                ))}
              </select> */}
            </div>
            <div className="card_information" id="card_information_purchase">
              <label
                htmlFor="equipmentInformation_purchase"
                className="form-label"
              >
                Fecha de compra
              </label>
              <input
                type="date"
                className="form-control"
                id="equipmentInformation_purchase"
                onChange={(e) => setPurchasedAt(e.target.value)}
              />
            </div>
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
    </div>
  );
}

export default RegisterEquipment;
