/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import ImageFont from '../../Assets/Images/bg-image1.jpg';
import Logo from '../../Assets/Images/icons8-cromatografía-100.png';
import { donwloadFile } from '../../Services/equipment.service';
import './ItemCard.scss';

function ItemCard({ ...props }) {
  useEffect(() => {
    if (props.serial) {
      donwloadFile(props.id).then((data) => console.log(data));
    }
  }, []);
  return (
    <div className="card">
      <img
        src={props.image ? props.image : ImageFont}
        className="card__image"
        alt=""
      />
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
