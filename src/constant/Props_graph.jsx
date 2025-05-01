import {BarChart,Bar,Tooltip,ResponsiveContainer} from 'recharts'

 export const Total = ({title,value,percentage,graph_data,graph_color}) =>{
    return(
          <div className="flex justify-between items-center shadow-md h-full w-full rounded-2xl p-6">
            <div className="flex flex-col gap-3">
              <p className="font-medium">{title}</p>
              <p className="font-bold text-xl">{value}</p>
              <p className="font-medium">{percentage} <span className="text-gray-500">last 7 days</span></p>
            </div>
            <div style={{width:100 ,height:50}}>
              <ResponsiveContainer >
                  <BarChart data={graph_data}>
                    <Bar dataKey="Asia"fill={graph_color} barSize={6} radius={[5,5,0,0]}/>
                    <Tooltip />
                  </BarChart>
                   
              </ResponsiveContainer> 
            </div>
           </div>  
    )
 }