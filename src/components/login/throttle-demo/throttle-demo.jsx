import { useEffect, useState } from "react"

export function ThrottleDemo ()
{
    const[time,setTime]=useState();
    function GetTime()
    {
        var know = new Date();
        setTime(know.toLocaleTimeString());
    }
    useEffect(()=>{
        setInterval(GetTime,1000);
    },[])
 return(
    <div>
      <h2 className="text-center">{time}</h2>
    </div>
 )
}