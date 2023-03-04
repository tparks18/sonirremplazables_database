import React from "react";
import picture from '../../assets/Img/logo.png'






export default function Card(){

    return <>

<div className="card" style={{width: "18rem"}}>
  
  <div className="card-body">
            <img src= {picture} className="card-img1" alt="..." />
            <h5 className="card-title">[Nombre]</h5>

        <div className="card-text">
                <p className="">Telefono: [+1(888)-(000)-8888]</p>
                <p className="">Sexo: [Hombre]</p>
                <p className="">Provincia: [Santiago]</p>
                <p className="">Desaparición: [2011]</p>
        </div>

            <a href="#" className="btn btn-primary">Ampliar</a>
  </div>
</div> 
    
    </>


};  