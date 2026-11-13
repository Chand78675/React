import { useRef, useState } from "react"


export function DebounceDemo()
{
    const[msg,setMsg]=useState(null);
    let Thread = useRef(null);
    function v1()
    {
        setMsg('increase volume 20%');
    }
     function v2()
    {
        setMsg('increase volume 50%');
    }
     function v3()
    {
        setMsg('Volume full');
    }
    function handleButtonClick()
    {
        setTimeout(v1,4000);
        Thread.current = setTimeout(v2,8000);
        setTimeout(v3,10000);
    }
    function handleCancelClick()
    {
        clearTimeout(Thread.current);
    }
  return(
    <div className="container-fluid">
      <div className="mt-5">
        <button onClick={handleButtonClick} className="btn btn-primary bi-volume-up"></button>
        <button onClick={handleCancelClick} className="btn btn-danger mx-2">Cancel</button>
      </div>
      <h2>{msg}</h2>
    </div>
  )
}