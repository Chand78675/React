import { use, useState } from "react";

export function EventBinding(){
  function NavClick()
  {
    alert('Nav bar clicked- Navigate to home');
  }
  function SearchClick(e)
  {
    e.stopPropagation();
    alert('Search bar clicked-Searching');
  }
  function ClickSubmit(e)
  {
    e.preventDefault();
    alert('Form submited');
  }

    return(
        <div className="container-fluid mt-5">
            <nav onClick={NavClick} className="p-2 border border-2 border-dark m-4">
            <h2>Amazon</h2>
            <button onClick={SearchClick} className="btn bi bi-search btn-warning"></button>
            </nav>
            <section>
                <form onSubmit={ClickSubmit}>
                    <h2>User login</h2>
                    <input className="p-2" type="text" placeholder="Enter your name"></input>
                    <button className="btn btn-danger p-2">Logine</button>
                </form>
            </section>
        </div>

    );
}