import siddhant from "../../../assets/images/siddhant.jpg"
import curosal_1 from "../../../assets/images/curosal-1.jpg"
import curosal_2 from "../../../assets/images/curosal-2.jpg"
import curosal_3 from "../../../assets/images/curosal-3.jpg"
import { Cart , Main } from "../../../constant/Props"
import  {Button}  from "../../../components/Button"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import App_graph from "./App_graph"
import App_data from "./App_data"



const DashApp = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




  return (
    <div className="flex flex-col lg:gap-20">
    
    <div className="lg:grid lg:grid-cols-3 gap-2 justify-between">

      <Main image={siddhant} title="Welcome back 👋 Jaydon Frankie" description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything." buttonName="Go now" />

      <div className="hidden lg:block">
      <Slider {...settings}>
      <Cart img={curosal_1} title="The Rise of Remote Work: Benifit..." description="The aroma of freshly brewed coffee filled the air,..." />
      <Cart img={curosal_2} title="Understanding Blockchain Techn..." description="The children giggled with joy as they ran through th..."/>
      <Cart img={curosal_3} title="Mental Health in the Digital Age..." description="He carefully crafted a beautiful sculpture out of cl..." />
      </Slider>
      </div>

    </div>

    <div className="">
      <App_graph />
    <App_data />
    </div>

    

    </div>
  )
}

export default DashApp
