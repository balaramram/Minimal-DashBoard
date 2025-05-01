import React from 'react'

const Dash_Banking = () => {
  return (
    <div>
      <p>Banking</p>
    </div>
  )
}

export default Dash_Banking







































// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import img1 from "../../assets/images/curosal-1.jpg";
// import img2 from "../../assets/images/curosal-2.jpg";
// import img3 from "../../assets/images/curosal-3.jpg";

// const PrevArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-14 top-4 bg-black bg-opacity-50 p-3 rounded-full text-white text-xl hover:bg-opacity-80 transition z-20"
//   >
//     ❮
//   </button>
// );

// const NextArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-4 top-4 bg-black bg-opacity-50 p-3 rounded-full text-white text-xl hover:bg-opacity-80 transition z-20"
//   >
//     ❯
//   </button>
// );

// const SlickCarousel = () => {
//   const settings = {
//     dots: false, 
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto my-10 relative">
//       <Slider {...settings}>
//         {[img1, img2, img3].map((img, index) => (
//           <div key={index} className="relative w-full h-64">
//             <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />

//             <div className="absolute top-2 left-2 bg-black bg-opacity-50 px-3 py-1 rounded-lg z-20">
//               <ul className="flex space-x-2">
//                 {[0, 1, 2].map((dot, i) => (
//                   <li key={i} className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-300"}`}></li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SlickCarousel;
