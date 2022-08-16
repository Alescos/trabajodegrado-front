/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import useAuth from '../../Hooks/useAuth';
import { getAmountReportsByArea } from '../../Services/report.service';
import NavBar from '../NavBar/NavBar';
import './Dashboard.scss';

function Dashboard() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { organization } = auth.user;
  const [dataArea, setDataArea] = useState<object[]>();
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const data01 = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 300,
    },
    {
      name: 'Group D',
      value: 200,
    },
  ];
  useEffect(() => {
    getAmountReportsByArea(organization).then((data) => {
      // eslint-disable-next-line array-callback-return
      const values: object[] = [];
      // eslint-disable-next-line array-callback-return
      data.value.map((item) => {
        values.push({
          name: item.records_areaName,
          value: parseInt(item.count, 10),
        });
      });
      /*     console.log(typeof data.value);
      console.log(data.value);
      console.log(data01); */
      setDataArea(values);
    });
  }, []);

  return (
    <div className="Dashboard">
      <NavBar name="Panel de Administración" />
      <div className="Dashboard_header">
        <span />
      </div>
      <div className="Dashboard_body">
        <div className="generalPieChart">
          <h4>Cantidad de incidentes</h4>
          <PieChart width={430} height={200}>
            <Pie
              data={dataArea}
              dataKey="value"
              nameKey="name"
              cx="35%"
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
        </div>
        <div className="areaPieChart">
          <span>Cantidad por area</span>
        </div>
        <div className="areaBarChart">
          <span>Cantidad por area en barras</span>
        </div>
        <div className="areaAreaChart">
          <span>Cantidad de reportes generados</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
