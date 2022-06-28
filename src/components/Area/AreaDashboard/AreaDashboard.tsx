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
import AreaCard from '../AreaCard/AreaCard';
import './AreaDashboard.scss';

type inputData = {
  id: number;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
};

function Area() {
  const [areas, setAreas] = useState<object[]>([]);
  const [amountAreas, setAmount] = useState(0);
  const auth = useAuth();
  useEffect(() => {
    const { user } = auth;
    if (user !== undefined) {
      getAllAreas(user.data.organization).then((value) => {
        const data: object[] = value;
        setAmount(data.length);
        setAreas(data);
      });
    }
  }, []);
  return (
    <div className="area">
      <div className="area_header">
        <h1 className="area_header-title">
          Administración de Areas
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
          areas.map((area: object, index) => (
            <AreaCard key={index} {...area} />
          ))}
      </div>
    </div>
  );
}
export default Area;
