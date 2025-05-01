import React from 'react'
import { Main,Cart } from '../../constant/Props'
import { Total } from '../../constant/Props_graph';
import {Active_user,Total_installed,Total_downloads} from "../../constant/Graph_data"
import siddhant from "../../assets/images/the-chaffins-chhdIbuvgsg-unsplash.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import curosal_1 from "../../assets/images/602ZLS8.jpg"
import curosal_2 from "../../assets/images/duzpCQape2U.jpg"
import curosal_3 from "../../assets/images/GlO2dgCtJXk.jpg"


const Dash_Ecommerce = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="lg:grid lg:grid-cols-3 gap-5 justify-between">

          <Main image={siddhant} title="Welcome back 👋 Jaydon Frankie" description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything." buttonName="Go now" />
            <div className="hidden lg:block">
               <Slider {...settings}>
                 <Cart img={curosal_1} title="The Rise of Remote Work: Benifit..." description="The aroma of freshly brewed coffee filled the air,..." />
                 <Cart img={curosal_2} title="Understanding Blockchain Techn..." description="The children giggled with joy as they ran through th..."/>
                 <Cart img={curosal_3} title="Mental Health in the Digital Age..." description="He carefully crafted a beautiful sculpture out of cl..." />
               </Slider>
            </div>

      </div>
      <div className="flex gap-5">
        <Total title="Product sold" value="18,765" percentage="+2.6%" graph_data={Active_user} graph_color="#007867" />
        <Total title="Total balance" value="4,876" percentage="+0.2%" graph_data={Total_installed} graph_color="#00B8D9"/>
        <Total title="Sales profit" value="678" percentage="-0.1%" graph_data={Total_downloads} graph_color="#95341E"/>
      </div>
    </div>
  )
}

export default Dash_Ecommerce
