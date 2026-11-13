import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {EmiCalculater} from "../components/login/emi-calculater/emi-calculater";
import { CroselDemo } from "../components/login/crosel-demo/crosel-demo";
import { Details } from "../components/login/emi-calculater/details";
export function Portfolioindex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
                  <header>
                    <div className="fs-2">john</div>
                    <div className="fs-5">React devloper </div>
                    <div className="fs-5">My project</div>
                    <nav>
                        <span> <Link to="/">Home</Link></span>
                        <span className="mx-5"><Link to="/emi">EmiCalculater</Link></span>
                        <span className="mx-5"> <Link to="/crosel">Carousel</Link></span>
                        <span> <Link to="/details/2/tv/2311">Details</Link></span>
                    </nav>
                  </header>
                  <section>
                    <Routes>
                       <Route path="/" element={<div>Hello ! i am John React Developer</div>}/>
                       <Route path="emi" element={<EmiCalculater/>}/>
                       <Route path="crosel" element={<CroselDemo/>}/>
                       <Route path="details/:id/:name/:price" element={<Details/>}/>
                       <Route path="*" element={<div><h2></h2>Request path is not found!</div>}/> 
                    </Routes>
                  </section>
            </BrowserRouter>
        </div>
    )
}