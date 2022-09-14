/* eslint-disable object-curly-newline */
/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import useAuth from '../../Hooks/useAuth';
import {
  getAmountReportsByArea,
  getAmountReportsByDate,
  getAmountReportsByType,
  getReportsByTypeByArea,
} from '../../Services/report.service';
import NavBar from '../NavBar/NavBar';
import './Dashboard.scss';

function Dashboard() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { organization } = auth.user;
  const [dataArea, setDataArea] = useState<object[]>();
  const [dataType, setDataType] = useState<object[]>();
  const [dataDate, setDataDate] = useState<object[]>();
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  useEffect(() => {
    getAmountReportsByArea(organization).then((data) => {
      const values: object[] = [];
      data.value.map((item) => {
        values.push({
          name: item.records_areaName,
          value: parseInt(item.count, 10),
        });
      });
      setDataArea(values);
    });

    getAmountReportsByType(organization).then((data) => {
      const values: object[] = [];
      data.value.map((item) => {
        values.push({
          name: item.records_type,
          value: parseInt(item.count, 10),
        });
      });
      setDataType(values);
    });

    getAmountReportsByDate(organization).then((data) => {
      const values: object[] = [];
      data.value.map((item) => {
        values.push({
          name: item.records_reportDate.split('T')[0],
          value: parseInt(item.count, 10),
        });
      });
      console.log(values);
      setDataDate(values);
    });

    getReportsByTypeByArea(organization).then((data) => {
      const values: object[] = [];
      let areaName = data.value[0].records_areaName;
      let areaData = {};
      let incidenceCount = 0;
      let problemCount = 0;
      let requirementCount = 0;
      data.value.map((item) => {
        if (areaName === item.records_areaName) {
          switch (item.records_type) {
            case 'Incidencia':
              incidenceCount = parseInt(item.count, 10);
              break;
            case 'Problema':
              problemCount = parseInt(item.count, 10);
              break;
            case 'Solicitud':
              requirementCount = parseInt(item.count, 10);
              break;
          }
        } else {
          areaData = {
            name: areaName,
            Incidencias: incidenceCount,
            Problemas: problemCount,
            Solicitudes: requirementCount,
          };
          areaName = item.records_areaName;
          values.push(areaData);
        }
      });
      setDataDate(values);
      console.log(values);
    });
  }, [organization]);

  return (
    <div className="Dashboard">
      <NavBar name="Panel de Administración" />
      <div className="Dashboard_header">
        <span />
      </div>
      <div className="Dashboard_body">
        <div className="generalPieChart">
          <h4>Cantidad de incidentes</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={430} height={250}>
              <Pie
                data={dataArea}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="35%"
                outerRadius={80}
                fill="#72a2d7"
                label
              >
                {dataArea ? (
                  dataArea!.map((entry, index) => (
                    <Cell
                      // eslint-disable-next-line react/no-array-index-key
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))
                ) : (
                  <span />
                )}
              </Pie>

              <Legend
                verticalAlign="top"
                align="right"
                height={80}
                margin={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 15,
                }}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="areaPieChart">
          <span>Cantidad por tipo</span>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={430} height={350}>
              <Pie
                data={dataType}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="20%"
                outerRadius={80}
                fill="#72a2d7"
                label
              >
                {dataType ? (
                  dataType!.map((entry, index) => (
                    <Cell
                      // eslint-disable-next-line react/no-array-index-key
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))
                ) : (
                  <span />
                )}
              </Pie>

              <Legend
                verticalAlign="top"
                align="right"
                height={80}
                margin={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 10,
                }}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="areaBarChart">
          <span>Cantidad por area en barras</span>
          {/* <ResponsiveContainer width="100%" height="100%">
            <BarChart data={} />
          </ResponsiveContainer> */}
        </div>
        <div className="areaAreaChart">
          <span>Cantidad de reportes generados</span>
          <ResponsiveContainer width="100%" height="70%">
            <AreaChart
              width={520}
              height={250}
              data={dataDate}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
