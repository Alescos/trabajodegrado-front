// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Area from './components/Area/Area';
import Card from './components/Card/Card';
import Login from './components/Login/Login';
import RegisterUser from './components/RegisterUser/RegisterUser';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route element={<Layout />}>
          <Route path="area" element={<Area />} />
        </Route>
        <Route path="card" element={<Card />} />

        {/* <Route path="*">Not Found</Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
