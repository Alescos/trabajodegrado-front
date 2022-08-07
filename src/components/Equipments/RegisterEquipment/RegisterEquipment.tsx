/* eslint-disable operator-linebreak */
/* eslint-disable indent */
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
  /* const styles = {
    backgroundImage: `url('${image}')`,
  }; */

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
  const [image, setImage] = useState<any>(null);
  const [nameArea, setNameArea] = useState('');
  const { organization } = auth.user;
  const data = new FormData();
  const { id } = useParams();

  async function createEquipment() {
    data.append('images', image!);
    console.log(image);
    try {
      /* if (image === null) {
        setImage('');
      } */
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
        area,
      };
      registerEquipment(newEquipment)
        .then((res) => {
          if (image != null) {
            console.log('Subiendo imagen');
            uploadFile(id!, res.id!, data).then(() => {
              setImage(null);
            });
          }
        })
        .then(() => navigate(-1));
      // const res = await registerEquipment(newEquipment);
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
                  <div
                    className="imageCard_input"
                    style={
                      image
                        ? {
                            backgroundImage: `url(${URL.createObjectURL(
                              image
                            )})`,
                          }
                        : {
                            backgroundImage:
                              'data:image/png;base64,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',
                          }
                    }
                  >
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
                          setImage(e.target.files![0]);
                        }}
                      />
                    </label>
                  </div>
                </div>
                <div className="imageCard_description">
                  <p>Definir la imagen del equipo</p>
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
