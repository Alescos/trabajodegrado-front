/* eslint-disable react/prop-types */
import ImageFont from '../../Assets/Images/bg-image1.jpg';
import Logo from '../../Assets/Images/icons8-cromatografía-100.png';
import './ItemCard.scss';

function ItemCard({ ...props }) {
  return (
    <div className="card">
      <img src={ImageFont} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <img className="card__thumb" src={Logo} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{props.name}</h3>
            <span className="card__status">
              {props.description ? props.description : `Modelo: ${props.model}`}
            </span>
          </div>
        </div>
        <p className="card__description">
          {`Creación: ${props.createdAt.split('T')[0]}`}
        </p>
      </div>
    </div>
  );
}

export default ItemCard;
