import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavbarP from './components/header';

import MainNavBar from './components/mainNavbar';
import Card from './components/card';
import { person } from './components/person';
import Pagination from './components/pagination';

/* React-Router */
import { Route, Routes } from 'react-router-dom';

import PersonTemplates from './components/MissingPerson-template';
import PersonTemplate from './components/MissingPerson-template';




const root = document.getElementById('root')
const searchForm = document.getElementById('search-form')
const searchBtn = document.getElementById('search-btn') 




function idSearch (data){
  return data.map((item)=>{return item.id})
}





function App() {


  const [query, setQuery] = useState("");
  const [people, setPeople] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)
  

  const search = (data)=>{ 

    
    return data.filter( item=>{return item.name.toLowerCase().includes(query)})
  
  
  }

  

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = search(person).slice(firstPostIndex, lastPostIndex)

  


  




  return (

    <div className="App">

      <Routes>

        <Route path='/' element={ <>
      
      <NavbarP  name="Base de datos" />


      <section class="content">
     
      <div class="main-title-container"> 
          <h1 class="main-title">Personas desaparecidas en RD 🇩🇴</h1>
     </div> 

     <nav className="mainNavbar navbar bg-body-tertiary">
    
              <div className="maincontainer container-fluid">
                        <form className="d-flex search-form-container" role="search" onSubmit={(e)=> {
                          e.preventDefault()
                          
                          
                          const root = document.getElementById('search-form').value;
                          setQuery(root.toLowerCase()) 
                          console.log(root)


                           } }>



                                      <input className="search-form form-control me-2" id="search-form" type="search" placeholder="Buscar" aria-label="Search"  />
                                      <button className="btn-search btn btn-outline-success" id="search-btn" type="submit" >Buscar</button>
                                              
                                          
                                      <div className="btn-group">

                                                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Filtrar
                                                    </button>   
                                                    <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                                    </ul>
                                      </div>
                                        
                        
                        </form>
              </div>
            
      </nav>




  

     <h3 class="text-left">{` Desapariciones: [${search(person).length}]`}  </h3>


     <div class=" card-container" > 


        <Card  key={idSearch(person)} data={search(currentPosts)} />
        

     </div>








     <section class="pagination-container">  
              <nav aria-label="..." >
                  <ul class="pagination">
                    <Pagination totalPost={search(person).length}
                     postPerPage={postPerPage}
                      setCurrentPage={setCurrentPage}
                      currentPage= {currentPage} />
                    

                  </ul>
              </nav>

              </section> 

      </section>
      </> 
    
    
    }> </Route>




       <Route path='/person/:id' element={<PersonTemplate />}></Route>

      </Routes>





      
    </div>

    


    
  );
}


export default App;
