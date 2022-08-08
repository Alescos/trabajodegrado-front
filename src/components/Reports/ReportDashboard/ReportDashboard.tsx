/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { getAllReports } from '../../../Services/report.service';
import NavBar from '../../NavBar/NavBar';
import './ReportDashboard.scss';

function ReportDashboard() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { organization } = auth.user;
  const [reports, setReports] = useState<object[]>();
  const handlerButton = () => {
    navigate('register');
  };
  useEffect(() => {
    console.log(organization);
    getAllReports(organization).then((data) => {
      console.log(data);
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
        <span>Header del Dashboard</span>
      </div>
      <div className="ReportDashboard_body">
        <div className="ReportDashboard_body_table">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Equipo Afectado</th>
                <th>Area</th>
                <th>Usuario</th>
                <th>Prioridad</th>
                <th>Fecha de reporte</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(reports) ? (
                reports.map((item: any) => (
                  <tr>
                    <td>{item.equipment}</td>
                    <td>{item.area}</td>
                    <td>{item.user}</td>
                    <td>{item.priority}</td>
                    <td>{item.reportDate}</td>
                  </tr>
                ))
              ) : (
                <div />
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ReportDashboard;
