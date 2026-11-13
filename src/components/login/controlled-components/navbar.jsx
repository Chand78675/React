
export function Navbar(props)
{
    return(
        <nav className={`d-flex ${props.theme} my-2 align-items-center justify-content-between p-2 border border-1 border-secondery`}>
            <div><span className="fs-4 fw-bold">{props.brandTitle}</span></div>
            <div>
                {
                   props.navItems.map(Item=> <span key={Item} className="mx-3">{Item}</span>) 
                }
            </div>
            <div>
                <button className="btn btn-danger">Signin</button>
            </div>
        </nav>
    )
}