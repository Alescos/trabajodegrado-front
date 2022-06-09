/* eslint-disable react/destructuring-assignment */
import { FlaskOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './Navigation.scss';

type Props = {
  active: boolean;
};

function Navigation(props: Props) {
  return (
    <div className={`navigation ${props.active ? 'active' : ''}`}>
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <FlaskOutline />
            </span>
            <span className="title">Brand Name</span>
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
            <span className="title">Help</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon">
              <FlaskOutline />
            </span>
            <span className="title">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
