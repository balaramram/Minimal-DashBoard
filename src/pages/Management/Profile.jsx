import React from 'react'
import siddhant from "../../assets/images/siddhant.jpg"

const Profile = () => {
  return (
    <div>
      <div>
        <p className="font-medium text-3xl pb-5">Profile</p>
        <div className="flex gap-5 text-sm ">
          <button>Dashboard</button>
          <button>User</button>
          <button className="text-gray-500">Jaydon Frankie</button>
        </div>
      </div>

      <div className="border w-300 h-100 " style={{ backgroundImage: `url(${siddhant})` }}>


      </div>
    </div>
  )
}

export default Profile