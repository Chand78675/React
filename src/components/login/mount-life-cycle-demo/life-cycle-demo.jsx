import { useEffect, useState } from "react"
export function UserLogin()
{
    useEffect(()=>{
        console.log('user Login Mounted');
        return()=>{
            console.log('user Login un mounted');
        }
    },[])
    return(
        <div>
            <h3>User Login</h3>
        </div>
    )
}
export function UserRegister()
{
    useEffect(()=>{
        console.log('user Register Mounted');
        return()=>{
            console.log('user Register un mounted');
        }
    },[])
    return(
        <div>
            <h3>User Register</h3>
        </div>
    )
}

export function LifeCycleDemo()
{
    const[component,setcomponent] = useState(null);
    function handleLoginClick()
    {
        setcomponent(<UserLogin/>)
    }
    function handleRegisterClick()
    {
        setcomponent(<UserRegister/>)
    }
    return(
        <div className="container-fluid">
            <h2>Life cycle Home</h2>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
            <hr/>
            <div>
                {
                    component
                }
            </div>
        </div>
    )
}