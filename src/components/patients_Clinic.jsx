
import React from "react";
import {FaSortDown} from "react-icons/fa"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";
 
const data = [
  {
    name: "01",
    Rural_Health_Clinic: 349 ,
    Out_Patient: 508,
  },
  {
    name: "02",
    Rural_Health_Clinic: 276,
    Out_Patient: 364,
  },
  {
    name: "03",
    Rural_Health_Clinic: 365,
    Out_Patient: 2197,
  },
  {
    name: "04",
    Rural_Health_Clinic: 320,
    Out_Patient: 1834,
  },
  {
    name: "05",
    Rural_Health_Clinic: 255,
    Out_Patient: 1104,
  },
  {
    name: "06",
    Rural_Health_Clinic: 345,
    Out_Patient: 1326,
  },
  {
    name: "07",
    Rural_Health_Clinic: 327,
    Out_Patient: 971,
  },
  {
    name: "08",
    Rural_Health_Clinic: 492,
    Out_Patient: 1708,
  },
  {
    name: "09",
    Rural_Health_Clinic: 439,
    Out_Patient: 1372,
  },
  {
    name: "10",
    Rural_Health_Clinic: 394,
    Out_Patient: 1939,
  }
];
export default function Patient_Clinic() {
  return (
    <div style={{ width: '100%', height: 300 }} className='b nunito'>
     <ResponsiveContainer width="100%" height="100%" >

      <div className=" w-4/12 nunito text-xs flex-col  items-center justify-center bg-white   rounded-md pt-4">
      <div className='flex-r justify-between font-bold text-sm mx-auto mb-3 px-14 pl-12'>
            <h1 className='text-black'>Patients</h1>
            <a className='text-g flex-r gap-x-1'>2022 <FaSortDown/></a>
        </div>
    <BarChart
      width={350}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Rural_Health_Clinic" fill="#2E9CC9"/>
      <Bar dataKey="Out_Patient" fill="#2EC85D" />
    </BarChart>
    </div>
    </ResponsiveContainer>
    </div>
  );
}
