import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import "../src/styles/main.css";
import "../src/index.css"
import Footer from "./components/Footer";
import BootstrapHeader from "./components/BootstrapHeader";
import HomeScreen from "./screens/HomeScreen";
import PersonScreen from "./screens/PersonScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";
import EditUserScreen from "./screens/EditUserScreen";
import PersonListScreen from "./screens/PersonListScreen";
import EditPersonScreen from "./screens/EditPersonScreen";


function App() {
 

  return (
    <>
      <BootstrapHeader />
      
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/person/:id" element={<PersonScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/user/edit/:id" element={<EditUserScreen />} />
            <Route path="/admin/personlist" element={<PersonListScreen />} />
            <Route path="/admin/person/edit/:id" element={<EditPersonScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
