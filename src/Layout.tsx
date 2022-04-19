import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import './Layout.scss';

function Layout() {
  return (
    <div className="main">
      <NavBar />
      <div className="content">
        <Login />
        {/* <Route /> */}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
