/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-wrap-multilines */
// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import AreaDashboard from './components/Area/AreaDashboard/AreaDashboard';
import CreateArea from './components/Area/CreateArea/CreateArea';
import Dashboard from './components/Dashboard/Dashboard';
import EquipmentDashboard from './components/Equipments/EquipmentDashboard/EquipmentDashboard';
import EquipmentDetails from './components/Equipments/EquipmentDetails/EquipmentDetails';
import RegisterEquipment from './components/Equipments/RegisterEquipment/RegisterEquipment';
import Login from './components/Login/Login';
import Organization from './components/Organization/Organization';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterUser from './components/Users/RegisterUser/RegisterUser';
import UpdateUser from './components/Users/UpdateUser/UpdateUser';
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
            <Route path="/" element={<Dashboard />} />
            <Route path="organization" element={<Organization />} />
            <Route path="users" element={<UserDashboard />} />
            <Route path="users/register" element={<RegisterUser />} />
            <Route path="areas" element={<AreaDashboard />} />
            <Route path="register/area" element={<CreateArea />} />
            <Route path="users/update/:id" element={<UpdateUser />} />
            <Route
              path="areas/:id/equipments"
              element={<EquipmentDashboard />}
            />
            <Route
              path="areas/:id/equipments/register"
              element={<RegisterEquipment />}
            />
            <Route path="equipments/:id" element={<EquipmentDetails />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
