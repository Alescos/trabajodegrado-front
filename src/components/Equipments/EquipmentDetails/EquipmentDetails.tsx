/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAreaById } from '../../../Services/area.service';
import { getEquipmentById } from '../../../Services/equipment.service';
import ImageCard from '../../ImageCard/ImageCard';
import NavBar from '../../NavBar/NavBar';
import './EquipmentDetails.scss';

function EquipmentDetails() {
  const [file, setFile] = useState('');
  const { id } = useParams();
  const [status, setStatus] = useState(true);
  const [area, setArea] = useState('');
  const [equipment, setEquipment] = useState<any>({});
  useEffect(() => {
    getEquipmentById(id!).then((data) => {
      setEquipment(data);
      setStatus(equipment.status);
    });
    getAreaById(equipment.area).then((data) => {
      setArea(data.name);
    });
  }, []);

  return (
    <div className="equipmentDetails">
      <NavBar name="Detalle del equipo" />
      <div className="equipmentDetails_card">
        <div className="equipmentDetails_card-header">
          <div className="card-title">
            <h3> Detalle de {equipment.alias} </h3>
          </div>
        </div>
        <div className="equipmentDetails_card-content">
          <form>
            <div className="card-body">
              <div className="row mb-6">
                <label
                  className="col-lg-5 col-form-label fw-semibold"
                  htmlFor=""
                />
                <div className="col-lg-7">
                  <ImageCard title=" " setFile={setFile} />
                </div>
              </div>
              <div className="row mb-6">
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Nombre
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="text"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Nombre del equipo"
                    value={`${equipment.name}`}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Marca
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="text"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Marca del equipo"
                    value={`${equipment.branch}`}
                  />
                </div>
              </div>
              <div className="row mb-6">
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Modelo
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="text"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Modelo del equipo"
                    value={`${equipment.model}`}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Tipo
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="text"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Tipo del equipo"
                    value={`${equipment.type}`}
                  />
                </div>
              </div>
              <div className="row mb-6">
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Alias
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="text"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Alias del equipo"
                    value={`${equipment.alias}`}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Serial
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="text"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Número serial"
                    value={`${equipment.serial}`}
                  />
                </div>
              </div>
              <div className="row mb-6">
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Estado
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="text"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Estado actual del equipo"
                    value={`${equipment.status ? 'Activo' : 'Inactivo'}`}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Clase
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="text"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Clase del equipo"
                    value={`${equipment.classEquipment}`}
                  />
                </div>
              </div>
              <div className="row mb-6">
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Area
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="text"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Area del equipo"
                    value={`${area}`}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Fecha de compra
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="date"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Fecha de compra"
                    value={`${equipment.purchasedAt}`}
                  />
                </div>
              </div>
              <div className="row mb-6">
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Fecha de registro
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="date"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Nombre del equipo"
                    value={`${
                      equipment.createdAt
                        ? equipment.createdAt.split('T')[0]
                        : equipment.createdAt
                    }`}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label fw-semibold mt-3"
                  htmlFor=""
                >
                  Última modificación
                </label>
                <div className="col-lg-4 mt-3">
                  <input
                    type="date"
                    className="EquipmentDetails_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="Marca del equipo"
                    value={`${
                      equipment.updatedAt
                        ? equipment.updatedAt.split('T')[0]
                        : equipment.updatedAt
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="card-footer" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EquipmentDetails;
