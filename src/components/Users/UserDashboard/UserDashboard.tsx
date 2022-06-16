import { Link } from 'react-router-dom';
import './UserDashboard.scss';

function UserDashboard() {
  return (
    <div className="userDashboard">
      <div className="userDashboard_header">
        <h1>Lista de usuarios</h1>
        <div className="userDashboard_header-nav">
          <Link to="/">Home</Link>
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
          <Link to="/register/user">Registrar usuario</Link>
        </div>
        <div className="userDashboard_content-table">
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Fecha de creacion</th>
                <th>Acciones</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
