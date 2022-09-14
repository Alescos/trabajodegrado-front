/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react';
// import ExportExcel from 'react-export-excel';
import { AddCircleOutline } from 'react-ionicons';
import { Link, useLocation, useParams } from 'react-router-dom';
// import XLSX from 'xlsx';
import useAuth from '../../../Hooks/useAuth';
import { getAreaById } from '../../../Services/area.service';
import { getAllEquipments } from '../../../Services/equipment.service';
import ItemCard from '../../ItemCard/ItemCard';
import NavBar from '../../NavBar/NavBar';
import './EquipmentDashboard.scss';

/* const { ExcelFile } = ExportExcel;
const { ExcelSheet } = ExportExcel;
const { ExcelColumn } = ExportExcel; */
const XLSX = require('xlsx');

function EquipmentDashboard() {
  const { id } = useParams();
  const auth = useAuth();
  const [amount, setAmount] = useState(0);
  const [equipments, setEquipments] = useState<object[]>([]);
  const [area, setArea] = useState<any>(null);
  const location = useLocation();
  useEffect(() => {
    getAreaById(id!).then((value) => {
      if (value) {
        setArea(value);
      }
    });
    getAllEquipments(id!).then((value) => {
      if (value) {
        setAmount(value.length);
        setEquipments(value);
      }
    });
  }, []);

  const handleOnExport = () => {
    const data: Array<object> = [];
    equipments.forEach((equipment: any) => {
      data.push({
        Nombre: equipment.name,
        Marca: equipment.branch,
        Model: equipment.model,
        Tipo: equipment.type,
        Alias: equipment.alias,
        Serial: equipment.serial,
        'Fecha Compra': equipment.purchasedAt,
        Clase: equipment.classEquipment,
        Area: area.name,
        'Fecha registro': equipment.createdAt.split('T')[0],
      });
    });
    const nameArea: string = area;
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, area.name);
    XLSX.writeFile(wb, 'ReporteDeEquipos.xlsx');
  };

  return (
    <div className="equipmentDashboard">
      <NavBar name="Administración de Equipos" />
      <div className="equipmentDashboard_areaDetails">
        {area ? (
          <>
            <div className="equipmentsDashboard_header_list">
              <h4>{area.name}</h4>
              <ul className="">
                <li key={area.phone}>
                  Telefono:
                  <span className="equipmentDashboard_list_content">
                    {' '}
                    {area.phone}
                  </span>
                </li>
                <li />
                <li>
                  Ubicación:{' '}
                  <span className="equipmentDashboard_list_content">
                    {area.location}
                  </span>
                </li>
                <li />
              </ul>
              <ul>
                <li>Fecha de registro:</li>
                <li>
                  {' '}
                  <span className="equipmentDashboard_list_content">
                    {area.createdAt ? area.createdAt.split('T')[0] : ''}
                  </span>
                </li>
              </ul>
            </div>
            <div className="equipmentDashboard_areaDetails_description">
              <h4>Descripción</h4>
              <p>{area.description}</p>
            </div>
          </>
        ) : (
          <span />
        )}
      </div>
      <div className="equipmentDashboard_header">
        <span className="equipmentDashboard_header_information">
          Equipos registrados:
          <span className="equipmentDashboard_header_status">
            {amount} equipos activos
          </span>
        </span>
        <div className="equipmentDashboard_header_register">
          <button
            type="button"
            className="custome_btn"
            onClick={handleOnExport}
          >
            Exportar
          </button>
          <p>Nuevo equipo</p>
          <Link to="register">
            <AddCircleOutline />
          </Link>
        </div>
      </div>
      <div className="equipmentDashboard_content">
        {equipments.map((equipment: any, index) => (
          <Link
            key={index}
            to={`/equipments/${equipment.id}`}
            className="equipmentDashboard_card"
          >
            <ItemCard key={index} {...equipment} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EquipmentDashboard;
