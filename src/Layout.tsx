import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import RegisterUser from './components/RegisterUser/RegisterUser';
import './Layout.scss';

function Layout() {
  return (
    <div className="main">
      <NavBar />
      <div className="content">
        <RegisterUser />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
