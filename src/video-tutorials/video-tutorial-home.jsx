import { Link } from "react-router-dom";

export function VideoTutorialHome()
{
    return(
        <div className="container-fluid">
            <div style={{paddingTop: '100px'}}>
               <Link to="/admin-login" className="btn btn-warning">Admin Login</Link>
                <button className="btn btn-light mx-2">User Login</button>
            </div>
        </div>
    )
}