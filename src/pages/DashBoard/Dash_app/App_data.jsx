import React from 'react'
import microsoft from "../../../assets/svg/microsoft.svg"
import opera from "../../../assets/svg/opera.svg"
import adobe from "../../../assets/svg/adobe.svg"
import joplin from "../../../assets/png/Joplin_icon.png"
import topaz from "../../../assets/png/Topaz_icon.jpg"
import user_1 from "../../../assets/avatar/user_1.webp"
import user_2 from "../../../assets/avatar/user_2.webp"
import user_3 from "../../../assets/avatar/user_3.webp"
import red_trophy from "../../../assets/svg/red_trophy.svg"
import green_trophy from "../../../assets/svg/green_trophy.svg"
import blue_trophy from "../../../assets/svg/blue_trophy.svg"
import germany_flag from "../../../assets/svg/germany_flag.svg"
import england_flag from "../../../assets/svg/england_flag.svg"
import france_flag from "../../../assets/svg/france_flag.svg"
import korea_flag from "../../../assets/svg/korea_flag.svg"
import USA_flag from "../../../assets/svg/USA_flag.svg"
import menu from "../../../assets/svg/menu_nav.svg"
import { Related_application, Top_author, Top_installed_countries } from '../../../constant/Props'
import {Table_content} from "../../../constant/Graph_data"


const App_data = () => {
  return (
    <div>
      <div className="grid xl:grid-rows-3 h-full gap-5 md:gap-0">
        <div className="row-span-2 grid xl:grid-cols-3 gap-5">

           <div className="col-span-2 flex flex-col justify-center py-5 gap-7 bg-white shadow-md w-screen md:w-full h-max rounded-2xl">
            <p className="ps-5 font-medium text-xl">New invoice</p>
            <table className="flex gap-5 flex-col justify-between">
              <thead>
                <tr className="flex bg-gray-500/10 py-5 md:gap-25 md:px-5 w-screen md:w-full">
                  <th className="w-20">Invoice ID</th>
                  <th className="w-20">Category</th>
                  <th className="w-20">Price</th>
                  <th className="w-20">Status</th>
                </tr>
              </thead>
              <tbody>
                {Table_content.map((item,i)=>(
                  <tr className="flex px-5 border-b justify-between items-center text-sm" key={i}>
                    <td className='w-max py-5 text-start'>{item.invoice}</td>
                    <td className='w-20 text-start'>{item.category}</td>
                    <td className='w-20 text-start'>{item.price}</td>
                    <td className='w-40 text-start items-center flex justify-between '>{item.status}<img className="size-4" src={menu} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
           </div>

           <div className=" bg-white shadow-md w-screen md:w-full h-max rounded-2xl">
              <p className="m-8 font-medium text-xl">Related applications</p>
              <div className="flex justify-between px-5 bg-gray-500/10  py-2">
                <button className="focus:bg-white focus:text-black text-gray-500 font font-medium py-2 px-3 rounded-xl duration-300">Top 7 days</button>
                <button className="focus:bg-white focus:text-black text-gray-500 font font-medium py-2 px-3 rounded-xl duration-300">Top 30 days</button>
                <button className="focus:bg-white focus:text-black text-gray-500 font font-medium py-2 px-3 rounded-xl duration-300">All times</button>
              </div>
              <Related_application image={microsoft} title="Microsoft office 365" free="Free" downloded="9.91k" size="9.68 Mb" ratings="9.91k" />
              <Related_application image={opera} title="Opera" downloded="1.95k"free="Free" size="1.9 Mb" ratings="1.95k"/>
              <Related_application image={adobe} title="Adobe acrobat reader DC"free="Free" downloded="9.12k" size="8.91 Mb" ratings="9.12k" />
              <Related_application image={joplin} title="Microsoft office 365"free="Free" downloded="9.91k" size="9.68Mb" ratings="9.91k" />
              <Related_application image={topaz} title="Topaz photo AI"free="$52.17" className="bg-green-100 text-green-500" downloded="8.49k" size="8.29 Mb" ratings="8.49k" />
           </div>

        </div>
        <div className="row-span-1 gap-5 grid xl:grid-cols-3">


           <div className="bg-white shadow-md w-screen md:w-full h-full rounded-2xl flex flex-col justify-between p-5">
            <p>Top installed countries</p>
            <Top_installed_countries contry_flag={germany_flag} contry_name="Germany" android_count="9.91k" windows_count="1.95k" apple_count="9.12k" />
            <Top_installed_countries contry_flag={england_flag} contry_name="England" android_count="1.95k" windows_count="9.12k" apple_count="6.98k" />
            <Top_installed_countries contry_flag={france_flag} contry_name="France" android_count="9.12k" windows_count="6.98k" apple_count="8.49k" />
            <Top_installed_countries contry_flag={korea_flag} contry_name="Korean" android_count="6.98k" windows_count="8.49k" apple_count="2.03k" />
            <Top_installed_countries contry_flag={USA_flag} contry_name="USA" android_count="8.49k" windows_count="2.03k" apple_count="3.36k" />
          
           </div>


           <div className=" p-5 flex flex-col gap-5 justify-between bg-white shadow-md w-screen md:w-full h-full rounded-2xl">
            <p className="font-medium text-xl ">Top authors</p>
            <Top_author user_name="Jayvion Simon" user_profile={user_2} like_count="9.91k" trophy={green_trophy} />
            <Top_author user_name="Deja Brady" user_profile={user_3} like_count="9.12k" trophy={blue_trophy} />
            <Top_author user_name="Lucian Obrien"user_profile={user_1} like_count="1.95k" trophy={red_trophy} />
           </div>


           <div className="grid xl:grid-rows-2 gap-5">
              <div className="bg-white shadow-md w-full h-full rounded-2xl">

             </div>
             <div className="bg-white shadow-md w-full h-full rounded-2xl">

             </div>
           </div>
        </div>
      </div>
      
    </div>
  )
}

export default App_data
