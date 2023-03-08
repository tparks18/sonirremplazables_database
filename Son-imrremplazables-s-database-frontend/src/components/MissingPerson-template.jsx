import React from "react";
import { ReactDOM } from "react";
import { Navbar } from "react-bootstrap";
import picture from '../assets/Img/logo.png'
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";





export default function PersonTemplate(){
    const {id}= useParams();
    console.log(id)

    return <>
       <h1>It works {id}</h1>
    
    
    
    </>


};