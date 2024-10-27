import React, { useState,useEffect } from 'react'

import axios from 'axios'

export default function News() {
    const [loading,setLoading] = useState(false)
    const [refresh,setRefresh] = useState(1)
    const [report,setReport] = useState([])
    useEffect(()=>{
        const fetch = async ()=>{
            const res = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/")
            console.log(res.data.results)
            setReport(res.data.results);
            console.log(report)
            setLoading(true)
        }
        fetch();
    },[refresh,loading])
    if(loading){
        return (
            <div className='flex flex-col bg-black text-white'>
        {report.map(e=>{return <div className='flex justify-between items-center p-5 m-3 rounded-lg border h-56' key={e.id}>
            <a href={e.url}><div>{e.title}</div></a>
            <div className='w-80 self-center overflow-hidden'><img className='overflow-hidden rounded-md' src={e.image_url} alt="loading" /></div>
        </div>})}
    </div>
        )
    }else{
        return(
            <div className='flex justify-center items-center bg-black'>
                <img width={718} src="https://cdn.dribbble.com/users/1787254/screenshots/19480319/___-1.gif" alt="" />
            </div>
        )
    }
}


