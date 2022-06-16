/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-wrap-multilines */
// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Area from './components/Area/Area';
import Card from './components/Card/Card';
import Login from './components/Login/Login';
import Organization from './components/Organization/Organization';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterArea from './components/RegisterArea/RegisterArea';
import RegisterUser from './components/RegisterUser/RegisterUser';
import UserDashboard from './components/Users/UserDashboard/UserDashboard';
import { AuthProvider } from './Hooks/useAuth';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Area />} />
            <Route path="area" element={<Area />} />
            <Route path="register/area" element={<RegisterArea />} />
            <Route path="organization" element={<Organization />} />
            <Route path="users" element={<UserDashboard />} />
            <Route path="register/user" element={<RegisterUser />} />
          </Route>
          <Route path="card" element={<Card />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
