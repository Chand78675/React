import { createContext, useContext, useState } from "react"

let userContext = createContext(null);
export function Level2()
{
    let context = useContext(userContext);
    return(
        <div className="bg-warning text-white p-4 m-4">
           <h2>Level-2-{context}</h2>
        </div>
    )
}
export function Level1()
{
    let context = useContext(userContext);
    return(
        <div className="bg-danger text-white p-4 m-4">
           <h2>Level-1-{context}</h2>
           <Level2/>
        </div>
    )
}
export function ContexDemo()
{ 
    const[msg,setMsg] = useState('Welcome');
    
    function handleNameChange(e)
    {
      setMsg(e.target.value);
    }
    return(
        <div className="container-fluid mx-4 bg-dark text-white mt-4 p-4">
            <div>
                <input type="text" onChange={handleNameChange} placeholder="enter name"/>
            </div>
           <h3> Parent-component -{msg}</h3>
           <userContext.Provider value={msg}>
            <Level1/>
           </userContext.Provider>
         </div>
    )
}