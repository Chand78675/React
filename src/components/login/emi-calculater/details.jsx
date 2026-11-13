import { useParams } from "react-router-dom"
export function Details()
{
    let params = useParams();
    return(
        <div className="container-fluid">
           <h2>Details</h2>
           <dl>
             <dt>Name</dt>
             <dd>{params.name}</dd>
             <dt>Id</dt>
             <dd>{params.id}</dd>
             <dt>Price</dt>
             <dd>{params.price}</dd>
           </dl>
        </div>
    )
} 