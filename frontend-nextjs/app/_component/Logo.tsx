import React from 'react'
import Tooltip from '@mui/material/Tooltip';

const Logo = () => {
  return (
    <Tooltip title="Stranger Dreams" placement="bottom-start">
     <div className='w-10 h-10 justify-center items-center flex border bg-amber-100 rounded-xl cursor-pointer group my-5'>
        <p className="text-4xl text-teal-900 group-hover:text-teal-600">S</p>
      </div>
    </Tooltip>
  )
}

export default Logo
