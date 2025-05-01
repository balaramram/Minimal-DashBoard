import React from 'react'

const Login_input = (input) => {
  return (
    <div className="relative flex flex-col pb-4">
      
      <input className="border border-gray-200 hover:border-black rounded-sm ps-2 py-2" 
      name={input.name}
      type={input.type} 
      onClick={input.onClick} 
      value={input.value}
      onChange={input.onChange}/>
      <label className="text-xs font-bold text-gray-500 absolute bg-white px-1 ms-3 -top-2.5">{input.label}</label>
    </div>
  )
}

export default Login_input
