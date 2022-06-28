/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrganizationLogo from '../../Assets/Images/icons8-cromatografía-100.png';
import useAuth from '../../Hooks/useAuth';
import { getAllAreas } from '../../Services/area.service';
import { getOrganization } from '../../Services/organization.service';
import './Organization.scss';

function Organization() {
  const [organization, setOrganization] = useState({
    name: '',
    nit: '',
    description: '',
    createdAt: '',
  });
  const [amount, setAmount] = useState(0);
  const auth = useAuth();
  useEffect(() => {
    const { user } = auth;
    const id = user.data.organization;
    getOrganization(id)
      .then((data) => {
        console.log(data);
        setOrganization(data);
      })
      .then(() => {
        console.log(organization);
      });
    getAllAreas(id).then((value) => {
      const data: object[] = value;
      setAmount(data.length);
    });
  }, []);
  return (
    <div className="organization">
      <div className="organization_header">
        <img
          src={OrganizationLogo}
          className="organization_header_logo"
          alt=""
        />
        <div className="organization_header_information">
          <span>{organization.name}</span>
          <p>{organization.description}</p>
        </div>
        <div className="organization_header_areas">
          <span>Cantidad de areas</span>
          <Link to="/areas" className="areas_amount">
            <span>{amount}</span>
          </Link>
        </div>
      </div>
      <div className="organization_body_card">
        <div className="card_body_card_header">
          <div className="card_body_card_title">
            <h3>Detalles organización</h3>
          </div>
          <Link to="/">Editar</Link>
        </div>
        <div className="card_body">
          <Row>
            <Col>
              <span>Nombre</span>
            </Col>
            <Col>
              <p>{organization.name}</p>
            </Col>
            <Col>
              <span>Ubicación</span>
            </Col>
            <Col>
              <p>02135156</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <span>NIT</span>
            </Col>
            <Col>
              <p>{organization.nit}</p>
            </Col>
            <Col>
              <span>Registro</span>
            </Col>
            <Col>
              <p>{organization.createdAt.split('T')[0]}</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Organization;
