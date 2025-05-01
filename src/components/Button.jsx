


export const Button = ({onClick,className,name}) => {
  return (
    <div>
      <button onClick={onClick} className={`border bg-blue-950 hover:bg-blue-800 cursor-pointer py-2 px-2 rounded-sm text-white font-bold ${className} `}>{name}</button>
    </div>
  )
}

