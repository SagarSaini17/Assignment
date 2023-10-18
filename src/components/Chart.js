// import React, { useState, CDBContainer, Bar } from 'react';
// // import { Bar } from 'react-chartjs-2';
// // import { CDBContainer } from 'cdbreact';

// const Chart = () => {
//   const [data] = useState({
//     labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
//     datasets: [
//       {
//         label: 'My First dataset',
//         backgroundColor: 'rgba(194, 116, 161, 0.5)',
//         borderColor: 'rgb(194, 116, 161)',
//         data: [65, 59, 90, 81, 56, 55, 40],
//       },
//     ],
//   });

//   return (
//     <CDBContainer>
//       <h3 className="mt-5">Bar chart</h3>
//       <Bar data={data} options={{ responsive: true }} />
//     </CDBContainer>
//   );
// };

// export default Chart;

// import { useState } from "react"
// import React from 'react'

// export default function Chart() {
//     const [data, setdata] = useState();

//     const Chart = () => {
//         //   labels:['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running']
//           setdata(
//             {
//               label: 'My First dataset',
//               backgroundColor: 'rgba(194, 116, 161, 0.5)',
//               borderColor: 'rgb(194, 116, 161)',
//               data: [65, 59, 90, 81, 56, 55, 40],
//             },
//             )
//         }
    
//   return (
//     <div>
//         <h3 className="mt-5">Bar chart</h3>
//         <Chart data={data} />
      
//     </div>
//   )
// }



// GOOGLE CHART
// npm install --save react-google-charts


// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Element", "Density", { role: "style" }],
//   ["Copper", 8.94, "#b87333"], // RGB value
//   ["Silver", 10.49, "silver"], // English color name
//   ["Gold", 19.3, "gold"],
//   ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
// ];

// export function App() {
//   return (
//     <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
//   );
// }




// GFG CHART
// npm install --save mdbreact react-chartjs-2


// import React from "react"; 
// import { MDBContainer } from "mdbreact"; 
// import { Bar } from "react-chartjs-2"; 
  
// const App = () => { 
  
//   // Sample data 
//   const data = { 
//     labels: ["Sunday", "Monday", "Tuesday", 
//       "Wednesday", "Thursday", "Friday", "Saturday"], 
//     datasets: [ 
//       { 
//         label: "Hours Studied in Geeksforgeeks", 
//         data: [2, 5, 6, 7, 3, 3, 4], 
//         backgroundColor: "#02b844", 
//         borderWidth: 1, 
//         borderColor: "#000000", 
//       } 
//     ] 
//   } 
  
//   return ( 
//     <MDBContainer> 
//       <Bar data={data} 
//         style={{ maxHeight: '600px' }} 
//       /> 
//     </MDBContainer> 
//   ); 
// } 
  
// export default App;
