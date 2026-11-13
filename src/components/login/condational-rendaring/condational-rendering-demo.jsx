import { useState } from "react"
import { EmiCalculater } from "../emi-calculater/emi-calculater";
import {CroselDemo} from "../crosel-demo/crosel-demo";

export function CondaitionDemo()
{
    const[view,setview] = useState(null);
    function handleCalculator()
    {
       setview(<EmiCalculater/>)
    }
    function handleCarousel()
    {
       setview(<CroselDemo/>)
    }
    return(
        <div className="container-fluid">
            <h2>Home</h2>
            <button onClick={handleCalculator} className="btn btn-primary">Emi Calculator</button>
            <button onClick={handleCarousel} className="btn btn-warning mx-2">Carousel</button>
            <hr/>
            <div>
               {view}
            </div>
        </div>
    )
}