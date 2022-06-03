import { FlaskOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
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
