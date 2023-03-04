import React from "react";




export default function Pagination(){

    return <>
              <section class="pagination-container">  
              <nav aria-label="..." >
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item " aria-current="page">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
              </nav>

              </section> 
    </>


};

