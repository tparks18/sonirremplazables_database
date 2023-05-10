import React from "react";




export default function Pagination(){

    return <>
              <section className="pagination-container">  
              <nav aria-label="..." >
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item " aria-current="page">
                      <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
              </nav>

              </section> 
    </>


};

