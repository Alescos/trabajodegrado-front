/* eslint-disable react/require-default-props */
/* eslint-disable comma-dangle */
import { MouseEventHandler } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.scss';

type propTypes = {
  name: string;
  nameButton?: string;
  Handler?: MouseEventHandler;
  activeButton?: boolean;
};

const defaultProps: propTypes = {
  name: 'Default',
  nameButton: 'none',
  Handler: () => {
    console.log('Default action');
  },
  activeButton: false,
};

function NavBar({ ...props }: propTypes) {
  const navigate = useNavigate();
  return (
    <div className="toolbar">
      <div className="toolbar_menu">
        <div className="toolbar_menu_options">
          <h1 className="toolbar_title">{props.name}</h1>
          <span className="space" />
          <ul className="breadcrumb">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/users">Usuarios</Link>
            </li>
            <li>
              <button
                type="button"
                className="btn_link"
                onClick={() => navigate(-1)}
              >
                Volver
              </button>
            </li>
          </ul>
        </div>
        {props.activeButton ? (
          <button className="btn_NavBar" type="button" onClick={props.Handler}>
            {props.nameButton}
          </button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

export default NavBar;
