/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrganizationLogo from '../../Assets/Images/icons8-cromatografía-100.png';
import './Organization.scss';

function Organization() {
  const [organization, setOrganization] = useState({
    name: '',
    nit: '',
    description: '',
  });
  useEffect(() => {
    fetch('http://localhost:8000/organization/1')
      .then((res) => res.json())
      .then((data) => setOrganization(data));
  }, []);
  console.log(organization);
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
            <span>4</span>
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
            <Col sm={4}>
              <span>Nombre</span>
            </Col>
            <Col>
              <p>{organization.name}</p>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <span>NIT</span>
            </Col>
            <Col>
              <p>02135156</p>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <span>NIT</span>
            </Col>
            <Col>
              <p>02135156</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Organization;
