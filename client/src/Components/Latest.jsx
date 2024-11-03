import React from 'react'
import { useTypewriter,Cursor } from "react-simple-typewriter";

function Latest() {
    const [text] = useTypewriter({
        words: ["Welcome to","SpaceInfo"],
        loop:{},
        typeSpeed:300,
        deleteSpeed:200
    })
  return (
    <div className='bg-black text-white relative z-30 h-screen'>
        <div className="flex flex-col w-full h-full pl-40 justify-center">
            <div className='text-8xl p-4'><span>{text}</span><Cursor/></div>
            <div className='pl-5'>Provides Information faster than light</div>
        </div>
        <div className='absolute top-14 right-0 opacity-70'>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTBpYnI3d2MyMXM2dGNlbDV2ZmZhNHYxYTltZDFuMGpmNjF2aGZyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3KPKpvCj15qup1bz3E/giphy.webp" width={700} alt="one" />
        </div>
    </div>
  )
}

export default Latest
