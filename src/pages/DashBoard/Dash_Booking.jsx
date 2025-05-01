import React from 'react'

const Dash_Booking = () => {
  return (
    <div>Dash_Booking</div>
  )
}

export default Dash_Booking






























// import { useState } from "react";

// const menuData = [
//   {
//     title: "Home",
//     link: "/home",
//   },
//   {
//     title: "Services",
//     link: "/services",
//     children: [
//       {
//         title: "Web Development",
//         link: "/services/web-dev",
//         children: [
//           { title: "Frontend", link: "/services/web-dev/frontend" },
//           { title: "Backend", link: "/services/web-dev/backend" },
//         ],
//       },
//       { title: "App Development", link: "/services/app-dev",
//         children: [
//           { title: "Frontend", link: "/services/web-dev/frontend" },
//           { title: "Backend", link: "/services/web-dev/backend" },
//         ] },
//     ],
//   },
//   {
//     title: "About",
//     link: "/about",
//   },
//   {
//     title: "Contact",
//     link: "/contact",
//   },
// ];

// const DropdownMenu = ({ items, level = 0 }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleDropdown = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <ul className={`bg-gray-200 p-2 rounded-md ${level > 0 ? "ml-4" : ""}`}>
//       {items.map((item, index) => (
//         <li key={index} className="relative group">
//           <button
//             onClick={() => toggleDropdown(index)}
//             className="flex justify-between w-full p-2 hover:bg-gray-300 rounded-md"
//           >
//             {item.title}
//             {item.children && <span>▼</span>}
//           </button>
//           {item.children && openIndex === index && (
//             <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded-md">
//               <DropdownMenu items={item.children} level={level + 1} />
//             </div>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const App = () => {
//   return (
//     <div className="p-10">
//       <DropdownMenu items={menuData} />
//     </div>
//   );
// };

// export default App;
