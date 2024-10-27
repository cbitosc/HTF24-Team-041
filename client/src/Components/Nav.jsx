import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate()
  return (
    <div className='flex items-center justify-around p-4 text-lg bg-slate-950 text-white'>
            <div className='cursor-pointer'>profile</div>
            <div className='cursor-pointer' onClick={()=>navigate("/news")}>Trending</div>
            <div className='cursor-pointer'>Event calender</div>
        </div>
  )
}
