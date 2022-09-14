/* eslint-disable operator-linebreak */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
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
  const [areas, setAreas] = useState<object[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const areaNames: string[] = [];
  const auth = useAuth();
  const { organization } = auth.user;

  useEffect(() => {
    getAllUsers(organization).then((res: object[]) => {
      setUsers(res);
    });
  }, [organization]);

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
          <div className="userDashboard_content_header-searchbar">
            <input
              type="text"
              name="search"
              id="search-bar"
              placeholder="Buscar"
            />
            <button type="button">Filtrar</button>
          </div>
          <Link to="/users/register">Registrar usuario</Link>
        </div>
        <div className="userDashboard_content-table">
          <Table striped responsive>
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
              {users.length > 0 &&
                users.map((user: any, index: number) => (
                  <tr key={index}>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>{user.role === 0 ? 'Usuario' : 'Administrador'}</td>
                    <td>{user.role === 1 ? 'Todas' : areaNames}</td>
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
          </Table>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
