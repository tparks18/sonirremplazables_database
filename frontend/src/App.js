import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "../src/styles/main.css";
import "../src/index.css"
//import MainNavBar from './components/mainNavbar';
//import Card from "./components/Card";
//import { person } from "./components/person";
import Pagination from "./components/pagination";
import Footer from "./components/Footer";
import BootstrapHeader from "./components/BootstrapHeader";
import SearchBar from "./components/SearchBar";
import HomeScreen from "./screens/HomeScreen";

//const root = document.getElementById('root')
//const searchForm = document.getElementById('search-form')
//const searchBtn = document.getElementById('search-btn')

function idSearch(data) {
  return data.map((item) => {
    return item.id;
  });
}

function App() {
  // const [query, setQuery] = useState("");
  // const [people, setPeople] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(8);

  // const search = (data) => {
  //   return data.filter((item) => {
  //     return item.name.toLowerCase().includes(query);
  //   });
  // };

  // const lastPostIndex = currentPage * postPerPage;
  // const firstPostIndex = lastPostIndex - postPerPage;
  // const currentPosts = search(person).slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <BootstrapHeader />

      <SearchBar />

      <main>
        <Container>
          {/* <h3 class="text-left">Búsquedas: </h3> */}

          {/* <div class=" card-container">
            <Card key={idSearch(person)} data={search(currentPosts)} />
          </div>

          <section class="pagination-container">
            <nav aria-label="...">
              <ul class="pagination">
                <Pagination
                  totalPost={search(person).length}
                  postPerPage={postPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </ul>
            </nav>
          </section> */}
        <HomeScreen />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
