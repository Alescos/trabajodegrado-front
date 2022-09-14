/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import OrganizationLogo from '../../Assets/Images/OrganizationImages/DefaultImageOrganization.png';
import useAuth from '../../Hooks/useAuth';
import { getAllAreas } from '../../Services/area.service';
import { getOrganization } from '../../Services/organization.service';
import NavBar from '../NavBar/NavBar';
import './Organization.scss';

function Organization() {
  const navigate = useNavigate();
  const [organization, setOrganization] = useState({
    name: '',
    nit: '',
    description: '',
    createdAt: '',
  });
  const [amount, setAmount] = useState(0);
  const auth = useAuth();
  const { user } = auth;
  const id = user.organization;
  useEffect(() => {
    getOrganization(id).then((data) => {
      setOrganization(data);
    });
    getAllAreas(id).then((value) => {
      const data: object[] = value;
      setAmount(data.length);
    });
  }, [id]);

  return (
    <div className="organization">
      <NavBar name="Información de la organización" nameButton="Editar" />
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
          {organization.createdAt === '' ? (
            <span />
          ) : (
            <>
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
                  <p>
                    {organization.createdAt !== ''
                      ? organization.createdAt.split('T')[0]
                      : ''}
                  </p>
                </Col>
              </Row>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Organization;
