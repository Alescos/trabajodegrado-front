/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-await */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { AddCircleOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { getAllAreas } from '../../../Services/area.service';
import ItemCard from '../../ItemCard/ItemCard';
import NavBar from '../../NavBar/NavBar';
import './AreaDashboard.scss';

/* type inputData = {
  id: number;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
}; */

function Area() {
  const [areas, setAreas] = useState<object[]>([]);
  const [amountAreas, setAmount] = useState(0);
  const auth = useAuth();
  useEffect(() => {
    const { user } = auth;
    if (user !== undefined) {
      getAllAreas(user.organization).then((value) => {
        const data: object[] = value;
        setAmount(data.length);
        setAreas(data);
      });
    }
  }, []);

  return (
    <div className="area">
      <NavBar name="Administración de Areas" nameButton="Agregar" />
      <div className="area_header">
        <h1 className="area_header-title">
          <span className="area_header-information">
            Tienes actualmente
            <span className="area_header-active-information">
              {amountAreas} areas activas
            </span>
          </span>
        </h1>
        <div className="area_header_register">
          <p>Agregar area</p>
          <Link to="/register/area">
            <AddCircleOutline />
          </Link>
        </div>
      </div>
      <div className="area_content">
        {areas.length > 0 &&
          areas.map((area: any, index) => (
            <Link
              key={index}
              to={`${area.id}/equipments`}
              className="areaDashboard_card"
            >
              <ItemCard key={index} {...area} />
            </Link>
          ))}
      </div>
    </div>
  );
}
export default Area;
