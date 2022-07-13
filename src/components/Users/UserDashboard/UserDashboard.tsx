/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { getAllUsers } from '../../../Services/user.service';
import './UserDashboard.scss';

type userData = {
  email: string;
  name: string;
  phone: string;
  createdAt: string;
};
function UserDashboard() {
  const [users, setUsers] = useState<object[]>([]);
  const auth = useAuth();
  const id = auth.user.organization;
  useEffect(() => {
    getAllUsers(id).then((res: object[]) => {
      setUsers(res);
    });
  }, []);

  return (
    <div className="userDashboard">
      <div className="userDashboard_header">
        <h1>Lista de usuarios</h1>
        <div className="userDashboard_header-nav">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/areas">Areas</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="userDashboard_content">
        <div className="userDashboard_content-header">
          <input
            type="text"
            name="search"
            id="search-bar"
            placeholder="Buscar"
          />
          <button type="button">Filtrar</button>
          <Link to="/users/register">Registrar usuario</Link>
        </div>
        <div className="userDashboard_content-table">
          <table>
            <thead className="userDashboard_table_header">
              <tr>
                <th>Correo</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Area</th>
                <th>Fecha de creacion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any, index: number) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.role === 0 ? 'Usuario' : 'Administrador'}</td>
                  <td>{user.role === 1 ? 'Todas' : 'Area de prueba'}</td>
                  <td>{user.createdAt.split('T')[0]}</td>
                  <td className="table_column_actions">
                    <ul>
                      <li>
                        <Link to={`update/${user.id}`}>Editar</Link>
                      </li>
                      <li>
                        <Link to="/">Eliminar</Link>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
