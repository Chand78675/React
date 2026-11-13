
import { useEffect, useState } from "react"
import moment from "moment"

export function DataBindingExample()
{
   const[mobile,setMobile]= useState('');
   const[dept]=useState(Date());
   useEffect(()=>{
      setMobile('+9135422765');
   },[]);
   return(
      <div className="container-fluid">
         <h2>Data Binding</h2>
         {
         (mobile.match(/\+91\d{10}/))?'Verified':'Invalid Mobile'}
         <div>
            {moment(dept).format('DD,  MMMM yyyy')}
         </div>
         
      </div>
   )
}