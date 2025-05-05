import down_arrow from "../assets/svg/down_arrow.svg";
import top_arrow from "../assets/svg/above_arrow.svg"
import { Button } from "../components/Button"
import placeItem from "../assets/svg/place_item.svg"
import router from "../assets/svg/router.svg"
import heart from "../assets/svg/heart_icon.svg"
import android from "../assets/svg/android.svg"
import windows from "../assets/svg/windows.svg"
import apple from "../assets/svg/apple.svg"




export const Team =({icon,name,onClick,className})=>{
    return(
    <div>
        <button onClick={onClick} className={`flex justify-center items-center gap-1 ${className}`}>
            <div className="flex items-center justify-center gap-1">
                <img className="size-5" src={icon}/>
             <p className="hidden md:block">{name}</p>
            </div>
             <div className="flex justify-center items-center gap-1">
                <p className="hidden md:block bg-gray-300 px-2 text-center text-gray-500 font-bold py-0.5 text-xs rounded-md">Free</p>
             <div className="flex flex-col justify-center items-center">
                 <img className="size-4" src={top_arrow}/>
                 <img className="size-3" src={down_arrow}/>
             </div>
             </div>
             
        </button>
    </div>
    )
} 


export const Main =({image , title , description ,buttonName})=> { 
    return(
         <div className="bg-cover bg-center col-span-2 w-screen md:w-full xl:w-full xl:h-80 rounded-2xl text-white justify-center flex flex-col gap-5 p-10 xl:p-0 xl:ps-10"style={{backgroundImage:`url(${image})`}}>
              {/* <img src="/src/assets/images/siddhant.jpg" /> */}
                <p className="text-2xl font-bold w-60">{title}</p>
                <p className="font-medium text-sm text-gray-400 xl:w-90">{description}</p>
                <Button className="py-0 bg-green-700 border-none text-sm" name={buttonName}/>
         </div>
        
    )
}



export const Cart = ({ img, title, description }) => {
    return (
        <div className="lg:bg-center lg:bg-cover rounded-2xl h-80 xl:w-full xl:h-80 flex flex-col justify-end py-8 px-5 transition-all w-full"style={{ backgroundImage: `url(${img})` }}>
            
            <p className="text-green-500 text-sm font-bold">Featured App</p>
            <p className="font-bold text-xl text-white">{title}</p>
            <p className="text-white text-sm">{description}</p>
        </div>
    );
};


export const Related_application = ({image,title,downloded,size,ratings,free,className}) => {
    return(
        <div className="gap-5 flex px-5 my-5 items-center">
             <img className="size-10 bg-gray-500/10 rounded-xl p-1" src={image} />
             <div>
                <div>
                  <p className="font-medium text-sm pb-2">{title}<span className={`${className} text-xs font-bold bg-gray-100 px-1 rounded-sm text-gray-400 ms-2`} >{free}</span></p>
                 </div>
                 <div className="flex items-center text-xs gap-2">
                    <img className="size-4" src={placeItem}/><p>{downloded}</p>
                    <img className="size-4"src={router}/><p>{size}</p>
                    <p>⭐{ratings}</p>
                 </div>
             </div>
        </div>
    )
}


export const Top_author = ({user_profile,user_name,like_count,trophy}) => {
    return(
        <div className="flex justify-between items-center text-gray-700">
            <div className="flex gap-3 items-center">
                <img className="size-10 rounded-full" src={user_profile}/>
                <div>
                    <p className=" font-medium text-sm pb-1">{user_name}</p>
                    <div className="flex items-center gap-1">
                        <img className="invert-50 size-5" src={heart}/>
                        <p className="text-gray-400 text-xs font-medium">{like_count}</p>
                    </div>
                </div>
            </div>
            <img className="size-9 bg-gray-200 p-2 rounded-full " src={trophy}/>
        </div>
    )
}



export const Top_installed_countries = ({contry_flag,contry_name,android_count,windows_count,apple_count}) => {
    return(
        <div className="flex justify-between items-center font-medium text-sm md:w-full text-gray-500 overflow-hidden">
            <div className="flex items-center gap-2 w-22">
                <img className="size-3 md:size-6" src={contry_flag}/>
                <p className="">{contry_name}</p>
            </div>
            
            <div className="flex items-center gap-2">
                <img className="size-3 invert-50" src={android} /><p className="text-xs md:text-md">{android_count}</p>
            </div>
            
            <div className="flex items-center gap-2">
                <img className="size-3 invert-50" src={windows} /><p>{windows_count}</p>
            </div>
            
            <div className="flex items-center gap-2">
                <img className="size-4 invert-50" src={apple} /><p>{apple_count}</p>
            </div>
        </div>
    )
}