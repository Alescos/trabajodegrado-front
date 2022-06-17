import { AddCircleOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';
import AreaCard from '../AreaCard/AreaCard';
import './AreaDashboard.scss';

function Area() {
  return (
    <div className="area">
      <div className="area_header">
        <h1 className="area_header-title">
          Administración de Areas
          <span className="area_header-information">
            Tienes actualmente
            <span className="area_header-active-information">
              # areas activas
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
        <AreaCard />
        <AreaCard />
        <AreaCard />
        <AreaCard />
        <AreaCard />
        <AreaCard />
        <AreaCard />
      </div>
    </div>
  );
}
export default Area;
