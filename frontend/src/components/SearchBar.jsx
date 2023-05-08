import React from "react";
import { useState } from "react";


export function SearchValue (root) {
        return root

}

export default function SearchBar(){
  const [query, setQuery] = useState("");
    
 SearchValue (query)

    const search = (data)=>{ 
      return data.filter (item=> item.name.toLowerCase().include(query))
    
    }


    return <>
       <nav className="mainNavbar navbar bg-body-tertiary">
    
    <div className="maincontainer container-fluid">
            <form className="d-flex search-form-container" role="search">
                        <input className="search-form form-control me-2" id="search-form" type="search" placeholder="Buscar" aria-label="Search" onChange={(e)=> {setQuery(e.target.value) }} />
                        <button className="btn-search btn btn-outline-success" id="search-btn" type="submit">Buscar</button>
                                
                            
                        <div className="btn-group">
                                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filtrar
                                    </button>   
                                    <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    <li><a className="dropdown-item" href="/">Separated link</a></li>
                                    </ul>
                        </div>
            </form>
    </div>
  
</nav>
    </>


};




