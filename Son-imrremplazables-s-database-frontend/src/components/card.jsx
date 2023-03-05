import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import React, { useState } from "react";
import picture from '../assets/Img/logo.png'
import { person } from "./person";
import { SearchValue } from "./mainNavbar";
import { click } from "@testing-library/user-event/dist/click";

import { Router } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";














export default function Card(data){

const person2 = [];
person2.push(data)
console.log(person)

function generatePage(){
  return console.log('Hello world')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const person1 = person2[0].data.map(item=> {return item})


   return   person1.map(item=> {


return <>

<div className="card" key={item.id} style={{width: "18rem"}}>
  
  <div className="card-body">
            <img src={picture} className="card-img1" alt="..." />
            <h5 className="card-title">{item.name}</h5>

        <div className="card-text">
                <p className="">Telefono: {item.phone}</p>
                <p className="">Sexo: {item.sex}</p>
                <p className="">Provincia: {item.province}</p>
                <p className="">Desaparición: {item.missingDate}</p>
        </div>

            <button  className="btn btn-primary" onClick={(e)=> {
              
             

              
              return console.log(item.id)}}>Ampliar</button>
  </div>
</div> 





    
    </>





    

    


}) 


}; 










