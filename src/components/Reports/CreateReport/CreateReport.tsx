/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { getAllAreas } from '../../../Services/area.service';
import { getAllEquipments } from '../../../Services/equipment.service';
import { createReport } from '../../../Services/report.service';
import NavBar from '../../NavBar/NavBar';
import './CreateReport.scss';

function CreateReport() {
  const [areas, setAreas] = useState<object[]>();
  const [area, setArea] = useState('');
  const [user, setUser] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [priority, setPriority] = useState('');
  const [equipment, setEquipment] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [active, setActive] = useState(false);
  const [equipments, setEquipments] = useState<object[]>();
  const auth = useAuth();
  const { organization } = auth.user;
  const navigate = useNavigate();
  useEffect(() => {
    setUser(auth.user.name);
    getAllAreas(organization).then((data) => {
      setAreas(data);
    });
  }, []);
  useEffect(() => {
    getAllEquipments(area).then((data) => {
      setEquipments(data);
    });
  }, [area]);

  useEffect(() => {
    if (
      area !== '' &&
      user !== '' &&
      description !== '' &&
      type !== '' &&
      priority !== '' &&
      equipment !== '' &&
      reportDate !== ''
    ) {
      setActive(true);
    }
  });

  const handlerButton = () => {
    const newReport = {
      user,
      area,
      equipment,
      type,
      priority,
      description,
      reportDate,
      organization,
    };
    createReport(newReport).then(() => navigate(-1));
  };
  return (
    <div className="CreateReport">
      <NavBar name="Reportar Incidente" />
      <div className="CreateReport_header">
        <span>header</span>
      </div>
      <div className="CreateReport_body">
        <form action="" method="post" className="CreateReport_form">
          <div
            className="CreateReport_inputField"
            id="CreateReport_inputField_area"
          >
            <label htmlFor="CreateReport_area" className="form-label required">
              Area del Equipo
            </label>
            <select
              className="form-control"
              id="CreateReport_area"
              placeholder="Equipo"
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">Seleccionar area</option>
              {Array.isArray(areas) ? (
                areas.map((item: any) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))
              ) : (
                <option>Sin area</option>
              )}
            </select>
          </div>
          <div
            className="CreateReport_inputField"
            id="CreateReport_inputField_equipment"
          >
            <label
              htmlFor="CreateReport_equipment"
              className="form-label required"
            >
              Equipo
            </label>
            <select
              className="form-control"
              id="CreateReport_equipment"
              placeholder="Equipo"
              onChange={(e) => setEquipment(e.target.value)}
            >
              <option value="">Seleccionar Equipo</option>
              {Array.isArray(equipments) ? (
                equipments.map((item: any) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))
              ) : (
                <option>Sin area</option>
              )}
            </select>
          </div>
          <div
            className="CreateReport_inputField"
            id="CreateReport_inputField_date"
          >
            <label htmlFor="CreateReport_date" className="form-label required">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              id="CreateReport_date"
              placeholder="Fecha"
              onChange={(e) => setReportDate(e.target.value)}
            />
          </div>
          <div
            className="CreateReport_inputField"
            id="CreateReport_inputField_user"
          >
            <label htmlFor="CreateReport_user" className="form-label required">
              Usuario que reporta
            </label>
            <input
              type="text"
              className="form-control"
              id="CreateReport_user"
              placeholder="Usuario"
              disabled
              value={auth.user.name}
            />
          </div>
          <div
            className="CreateReport_inputField"
            id="CreateReport_inputField_description"
          >
            <label
              htmlFor="CreateReport_description"
              className="form-label required"
            >
              Desripción
            </label>
            <input
              type="text"
              className="form-control"
              id="CreateReport_description"
              placeholder="Descripción del incidente"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div
            className="CreateReport_inputField"
            id="CreateReport_inputField_type"
          >
            <label htmlFor="CreateReport_type" className="form-label required">
              Tipo
            </label>
            <select
              className="form-control"
              id="CreateReport_type"
              name="select"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Tipo solicitud ...</option>
              <option value="Incidencia">Incidencia</option>
              <option value="Problema">Problema</option>
              <option value="Solicitud">Solicitud</option>
            </select>
          </div>
          <div
            className="CreateReport_inputField_priority"
            id="CreateReport_inputField_priority"
          >
            <label
              htmlFor="CreateReport_priority"
              className="form-label required"
            >
              Prioridad
            </label>
            <select
              className="form-control"
              id="CreateReport_priority"
              placeholder="Prioridad"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Definir prioridad</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>
          <div id="CreateReport_button">
            <button
              type="button"
              className="custome_btn"
              disabled={!active}
              onClick={handlerButton}
            >
              Reportar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateReport;
