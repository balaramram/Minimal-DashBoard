import React from 'react'
import Page_Not_Found from "../assets/images/Page_not_found.webp"
import { Button } from "../components/Button"
import { useNavigate } from 'react-router-dom'


const PageNotFound = () => {
    const navigate=useNavigate()

  return (
    <div>
        <div className="flex flex-col py-10 gap-5 justify-center items-center">
            <p className="text-3xl font-bold">Sorry, page not found!</p>
            <p className="text-gray-500 w-90 text-center">Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</p>
            <div className="relative flex flex-col justify-center items-center bg-sky-00 rounded-full w-100 h-100 shadow-2xl">
                <img className="w-30" src={Page_Not_Found} />
                <p className="text-9xl font-bold font-mono text-gr bg-gradient-to-b from-green-200 to-green-600 text-transparent bg-clip-text">4<span className="text-green-800">0</span>4</p>
            </div>
            
            <Button onClick={()=>{navigate("/")}} name="Go To Home"/>
        </div>
    </div>
  )
}

export default PageNotFound