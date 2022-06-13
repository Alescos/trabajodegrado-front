/* eslint-disable react/destructuring-assignment */
import { FlaskOutline } from 'react-ionicons';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Navigation.scss';

type Props = {
  active: boolean;
};

function Navigation(props: Props) {
  const navigate = useNavigate();
  const auth = useAuth();

  const HandleClick = () => {
    auth.signout(() => navigate('/login'));
  };

  return (
    <div className={`navigation ${props.active ? 'active' : ''}`}>
      <ul>
        <li>
          <Link to="/organization/1">
            <span className="icon">
              <FlaskOutline />
            </span>
            <span className="title">Organización</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon">
              <FlaskOutline />
            </span>
            <span className="title">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon">
              <FlaskOutline />
            </span>
            <span className="title">Usuarios</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon">
              <FlaskOutline />
            </span>
            <span className="title">Areas</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span className="icon">
              <FlaskOutline />
            </span>
            <button type="button" className="logout" onClick={HandleClick}>
              <span className="title">Cerrar Sesión</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
