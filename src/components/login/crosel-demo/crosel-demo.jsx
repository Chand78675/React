import axios from "axios";
import { useEffect,useRef,useState } from "react"

export function CroselDemo()
{
   const[product,setProduct]=useState({id:0,title:null,Description:null,image:null,category:null,price:0,rating:{rate:0,count:0}});
   const[status,setStatus]= useState(null);
   let productid = useRef(1);
   let thread = useRef(null);
   function LoadProductManually(id)
   {
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response=>{
         setProduct(response.data);
      })
      setStatus('Slide Show-Auto');
   }
   function LoadProductAuto()
   {
      productid.current = productid.current+1;
      axios.get(`https://fakestoreapi.com/products/${productid.current}`)
      .then(response=>{
         setProduct(response.data);
      })
      setStatus('Slide Show-Auto');
   }
   function handleNextClick()
   {
      productid.current = productid.current+1;
      LoadProductManually(productid.current);
   }
   function handlePreviouseClick()
   {
      productid.current = productid.current-1;
      LoadProductManually(productid.current);
   }
   function handleSeekbarChange(e)
   {
      productid.current = parseInt(e.target.value);
      LoadProductManually(productid.current);
   }
   function handlePlayClick()
   {
      thread.current = setInterval(LoadProductAuto,3000);
      setStatus('Slide Show-Auto');
   }
   function handlePauseClick()
   {
      clearInterval(thread.current);
      setStatus('Slide Show-Pause');
   }
   useEffect(()=>{
      LoadProductManually(1);
   },[])
   return(
        <div className="container-fluid">
           <div className="card w-50 p-2 mt-4">
              <div className="card-header text-center">
                <div>{product.title}</div>
                <div className="fw-bold">{status}</div>
              </div>
              <div className="card-body">
                 <div className="row">
                    <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                       <button onClick={handlePreviouseClick} className="btn btn-dark bi bi-chevron-left"></button>
                    </div>
                    <div className="col-10">
                      <img src={product.image} width='100%' height='400'/>
                      <div className="mt-2">
                        <input type="range" onChange={handleSeekbarChange} min="1" max="20" value={productid.current} className="form-range"/>
                      </div>
                    </div>
                    <div className="col-1">
                        <button onClick={handleNextClick} className="btn btn-primary bi bi-chevron-right"></button>
                    </div>
                 </div>
              </div>
              <div className="card-footer text-center">
                <button onClick={handlePlayClick} className="btn btn-success bi bi-play"></button>
                <button onClick={handlePauseClick} className="btn btn-danger mx-2 bi bi-pause"></button>
              </div>
           </div>
        </div>
   )
}