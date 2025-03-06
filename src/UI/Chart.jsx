import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,LinearScale,Title, BarElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend,
    CategoryScale,
 LinearScale,
 BarElement,
Title,
Tooltip,
 Legend, ChartDataLabels);

const Chart = () => {
  // Data for the pie chart
  const customerCityData = {
    labels: ['부산', '서울', '인천', '대전', '대구'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderWidth: 1,

      },
    ],
  };

  const pieOptions = {
    plugins: {
      title: {
        display: true,
        text: '도시별 고객 분포',
      },

      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(2) + '%';
          return percentage;
        },
        color: '#fff',
        font: {
          weight: 'bold',
        },
      },
    },
    
  };
 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' 
      },
      title: {
        display: true,
        text: '2024년 고객 차트',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const femaleCustomer = [100,200,650,400,500,600,700,800,900,1000,1100,1200];
  const maleCustomer = [200,100,400,500,600,700,800,900,1000,1100,1200,1300];
   const data = {
    labels,
    datasets: [
      {
        label: '여자',
       // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data:femaleCustomer,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '남자',
        //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data:maleCustomer,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div >
      <h2>주요 고객님 지역</h2>
      <div style={{width:500,height:500}}>
      <Pie data={customerCityData} options={pieOptions}/>
      </div>
      <h2>2024년 남자 및 여자 고객 수</h2>
      <Bar options={options} data={data} />
      
    </div>
  );
};

export default Chart
//=====================================================================================
// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' 
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function App() {
//   return <Bar options={options} data={data} />;
// }
