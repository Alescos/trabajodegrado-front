import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Register from './components/RegisterUser/RegisterUser';
import './Layout.scss';

function Layout() {
  return (
    <div className="main">
      <NavBar />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
