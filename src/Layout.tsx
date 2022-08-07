/* eslint-disable comma-dangle */
import { useState } from 'react';
import { MenuOutline } from 'react-ionicons';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import './Layout.scss';

function Layout() {
  const [isActive, setIsActive] = useState(true);
  const HandleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="content">
      <Navigation active={isActive} />
      <div className={`main  ${isActive ? 'active' : ''}`}>
        <div className="topbar">
          <div className="toggle">
            <button
              className="toggle_button"
              type="button"
              onClick={HandleToggle}
            >
              <MenuOutline height="30px" width="30px" />
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
