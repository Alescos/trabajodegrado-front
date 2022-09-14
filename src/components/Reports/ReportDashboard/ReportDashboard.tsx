/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { getAllReports, getReportById } from '../../../Services/report.service';
import NavBar from '../../NavBar/NavBar';
import './ReportDashboard.scss';

type detailsType = {
  equipment;
  type;
  reportDate;
  user;
  status;
  description;
  area;
  areaName;
  equipmentName;
  organization;
  priority;
  createdAt;
};

function ReportDashboard() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { organization } = auth.user;
  const [reports, setReports] = useState<object[]>();
  const [details, setDetails] = useState<detailsType>();
  const handlerButton = () => {
    navigate('register');
  };

  const uploadData = (id) => {
    getReportById(id).then((item) => {
      setDetails(item.data);
    });
  };
  useEffect(() => {
    getAllReports(organization).then((data) => {
      setReports(data);
    });
  }, []);
  return (
    <div className="ReportDashboard">
      <NavBar
        name="Reporte de Incidentes"
        nameButton="Generar Reporte"
        activeButton
        Handler={handlerButton}
      />
      <div className="ReportDashboard_header">
        <div className="ReportDashboard_item-information">
          <div className="item-information_type">
            <label htmlFor="" className="fw-semibold">
              Tipo
            </label>
            <div className="col-sm-9 mt-2">
              <input
                className="ReportDashboard_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                type="text"
                placeholder="Tipo"
                value={details ? details.type : ''}
                disabled
              />
            </div>
          </div>
          <div className="item-information_equipment">
            <label htmlFor="" className="fw-semibold">
              Equipo
            </label>
            <div className="col-sm-9 mt-2">
              <input
                className="ReportDashboard_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                type="text"
                placeholder="Equipo"
                value={details ? details.equipmentName : ''}
                disabled
              />
            </div>
          </div>
          <div className="item-information_area">
            <label htmlFor="" className="fw-semibold">
              Area Involucrada
            </label>
            <div className="col-sm-9 mt-2">
              <input
                className="ReportDashboard_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                type="text"
                placeholder="Area"
                value={details ? details.areaName : ''}
                disabled
              />
            </div>
          </div>
          <div className="item-information_user">
            <label htmlFor="" className="fw-semibold">
              Reportado por:
            </label>
            <div className="col-sm-9 mt-2">
              <input
                className="ReportDashboard_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                type="text"
                placeholder="Usuario que reporta"
                value={details ? details.user : ''}
                disabled
              />
            </div>
          </div>
          <div className="item-information_priority">
            <label htmlFor="" className="fw-semibold">
              Prioridad
            </label>
            <div className="col-sm-9 mt-2">
              <input
                className="ReportDashboard_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                type="text"
                placeholder="Prioridad"
                value={details ? details.priority : ''}
                disabled
              />
            </div>
          </div>
          <div className="item-information_reportDate">
            <label htmlFor="" className="fw-semibold">
              Fecha de reporte:
            </label>
            <div className="col-sm-9 mt-2">
              <input
                className="ReportDashboard_input form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                type="text"
                placeholder="Fecha de reporte"
                value={details ? details.reportDate.split('T')[0] : ''}
                disabled
              />
            </div>
          </div>
          <div className="item-information_description">
            <label htmlFor="" className="fw-semibold">
              Descripción
            </label>
            <div className="input_description ">
              <span className="" placeholder="Descripción">
                {details ? details.areaName : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ReportDashboard_body">
        <div className="ReportDashboard_body_table">
          <Table striped bordered hover size="md" responsive>
            <thead>
              <tr>
                <th>N°</th>
                <th>Tipo</th>
                <th>Equipo Afectado</th>
                <th>Area</th>
                <th>Usuario</th>
                <th>Prioridad</th>
                <th>Fecha de reporte</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(reports) && (
                reports.map((item: any) => (
                  <tr>
                    <td>
                      <button
                        type="button"
                        className="UploadReportData"
                        onClick={() => uploadData(item.id)}
                      >
                        {item.id}
                      </button>
                    </td>
                    <td>{item.type}</td>
                    <td>{item.equipmentName}</td>
                    <td>{item.areaName}</td>
                    <td>{item.user}</td>
                    <td>{item.priority}</td>
                    <td>{item.reportDate.split('T')[0]}</td>
                    <td>{item.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ReportDashboard;
