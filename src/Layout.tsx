import { Outlet } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
import { MenuOutline } from 'react-ionicons';
import Navigation from './components/Navigation/Navigation';
import './Layout.scss';

function Layout() {
  return (
    <div className="content">
      <Navigation />
      <div className="main">
        <div className="topbar">
          <div className="toggle">
            <button type="button">
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
