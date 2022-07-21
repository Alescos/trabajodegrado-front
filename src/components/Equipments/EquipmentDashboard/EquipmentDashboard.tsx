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
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { getAllEquipments } from '../../../Services/equipment.service';
import ItemCard from '../../ItemCard/ItemCard';
import NavBar from '../../NavBar/NavBar';
import './EquipmentDashboard.scss';

// const { ExcelFile } = ExportExcel;

function EquipmentDashboard() {
  const { id } = useParams();
  const auth = useAuth();
  const [amount, setAmount] = useState(0);
  const [equipments, setEquipments] = useState<object[]>([]);
  useEffect(() => {
    getAllEquipments(id!).then((value) => {
      console.log(value);
      if (value) {
        setAmount(value.length);
        setEquipments(value);
      }
    });
  }, []);

  return (
    <div className="equipmentDashboard">
      <NavBar name="Administración de Equipos" />
      <div className="equipmentDashboard_header">
        <span className="equipmentDashboard_header_information">
          Equipos registrados:
          <span className="equipmentDashboard_header_status">
            {amount} equipos activos
          </span>
        </span>
        <div className="equipmentDashboard_header_register">
          <p>Nuevo equipo</p>
          <Link to="register">
            <AddCircleOutline />
          </Link>
        </div>
      </div>
      <div className="equipmentDashboard_content">
        {equipments.map((equipment: any, index) => (
          <Link
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
