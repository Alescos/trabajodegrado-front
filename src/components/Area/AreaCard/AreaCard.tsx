import { Link } from 'react-router-dom';
import ImageFont from '../../../Assets/Images/bg-image1.jpg';
import Logo from '../../../Assets/Images/icons8-cromatografía-100.png';
import './AreaCard.scss';

function AreaCard({ ...area }) {
  return (
    <Link to={`areas/${area.id}`} className="card">
      <img src={ImageFont} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <img className="card__thumb" src={Logo} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{area.name}</h3>
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">{area.description}</p>
      </div>
    </Link>
  );
}

export default AreaCard;
