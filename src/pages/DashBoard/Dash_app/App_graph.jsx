import React, { useState } from 'react'
import { Cell, Legend, Pie, PieChart,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer  } from 'recharts'
import {Current_download ,Area_installed,Active_user,Total_installed,Total_downloads} from "../../../constant/Graph_data"
import {Total} from "../../../constant/Props_graph"
import right_arrow from "../../../assets/png/forward_arrow_icon.png"
import down_arrow from "../../../assets/svg/down_arrow.svg"



const App_graph = () => {

  const [IsOpened,setIsOpen]=useState(false)


  return (
    <div className='w-full h-max'>
      <div className="grid grid-rows-3 gap-8 h-max">

        <div className="grid  lg:grid-cols-3 gap-8 h-max w-full">
          <Total title="Total active users" value="18,765" percentage="+2.6%" graph_data={Active_user} graph_color="#007867" />
          <Total title="Total installed" value="4,876" percentage="+0.2%" graph_data={Total_installed} graph_color="#00B8D9"/>
          <Total title="Total downloads" value="678" percentage="-0.1%" graph_data={Total_downloads} graph_color="#95341E"/>
        </div>

        <div className="row-span-2 lg:grid lg:grid-cols-3 gap-8 h-max w-full">

          <div className="shadow-md p-6 h-full w-full rounded-2xl">
            <div>
              <p className="font-medium text-xl font-cust">Current downlod</p>
              <p className="text-gray-600 text-sm">Downloaded by operating system</p>
            </div>

            <PieChart width={300} height={300}>
              <Pie data={Current_download}  cx={140} cy={120} innerRadius={80} outerRadius={100}fill='#8884d8'paddingAngle={0} dataKey="value">
              {Current_download.map((item,i)=>(
                <Cell key={i} fill={item.color}/>
              ))}
              </Pie>
              <Legend/>
              <Tooltip/>
            </PieChart>
          </div>

          <div className="col-span-2 pb-2 shadow-md h-full w-full rounded-2xl">
            <div className="flex justify-between p-5">
              <div>
                <p className="font-medium text-xl">Area installed</p>
                <p className="text-gray-500">(+43%) than last year</p>
              </div>
              <div>
                <p onClick={()=>setIsOpen(prev=>!prev)} className="flex items-center border border-gray-300 rounded-md px-3 cursor-pointer">2023<img className="size-4" src={IsOpened?right_arrow:down_arrow}/></p>
                <div className={`flex flex-col justify-between items-center absolute overflow-hidden right-28 mt-2 bg-gradient-to-bl from-sky-100 via-white to-red-100 py-2 transition-all duration-300 rounded-lg ${IsOpened?"h-30 w-30":"w-0 h-0"}`}>
                  <p className="hover:bg-gray-100 focus:bg-gray-300 px-4 rounded-lg">2022</p>
                  <p>2023</p>
                  <p>2024</p>
                </div>
              </div>
            </div>
            <div style={{ width:"80%",height:"80%"}}>
               <ResponsiveContainer>
                 <BarChart width={300} height={100} data={Area_installed}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Asia" stackId="a" fill="#007867" barSize={30}/>
                  <Bar dataKey="Europe" stackId="a" fill="#FFAB00" />
                  <Bar dataKey="Americas" stackId="a" fill="#00B8D9" radius={[5,5,0,0]}/>
                 </BarChart>
              </ResponsiveContainer> 
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App_graph
