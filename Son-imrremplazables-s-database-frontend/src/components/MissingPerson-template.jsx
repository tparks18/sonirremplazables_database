import React from "react";
import { ReactDOM } from "react";
import { Navbar } from "react-bootstrap";
import picture from '../assets/Img/logo.png'
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/MissinPerson-template/main.css'
import '../styles/MissinPerson-template/Tablet.css'
import '../styles/MissinPerson-template/Desktop.css'
import NavbarP from "./header";
import { person } from "./person";
import PageNotFound from "./pageNotFound";
import GoBackBar from "./goBack-bar";




export default function PersonTemplate(){
    const {id}= useParams();

    const data= person.find((personObject)=>{
      return personObject.id === Number(id);
    })

    console.log(typeof data)

 if (typeof data == 'object') {
      console.log("Todo está funcionando")
      console.log(data.name)




    return <>

    <NavbarP  />
    <GoBackBar />

    <h3 className="section-title">Persona desaparecida</h3>


    
    <section key={data.id} className="MissinPerson-component">
          <main className="MissingPerson-container">
            <header className="Person-container-header">
              <div className="Person-image-container">
                {console.log(data.picture)}
                <img src={require(`../assets/Img/logo.png`)} alt="" srcset="" />
              </div>  
              <div><h1>{data.name}</h1></div>
              <div>
                <h3 className="Estado Desaparecido">
                  Estado: <span>desaparecido</span>
                </h3>
                <div></div>
              </div>
            </header>
    
            <section className="Person-content">
              <div className="name">
                <div>
                  <div>
                    <svg
                      className="icon-name icon"
                      width="22px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
    
                      <path
                        d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="static"><p>Nombre:</p></div>
    
                <div><p>{data.name}</p></div>
              </div>
    
              <div className="Age">
                <div>
                  <div>
                    <svg
                      className="icon"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                     
                      <path
                        d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="static"><p>Edad:</p></div>
                <div><p>{data.additionalInfo.age}</p></div>
              </div>
    
              <div className="MissinDate">
                <div>
                  <div>
                    <svg
                      className="icon"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                       <path
                        d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="static"><p>Última vez visto:</p></div>
                <div><p>{data.missingDate}</p></div>
              </div>
    
              <div className="Phone">
                <div>
                  <div>
                    <svg
                      className="icon"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                      />
                    </svg>
                  </div>
                </div>
    
                <div className="static"><p>Teléfono:</p></div>
                <div><p>{data.phone}</p></div>
              </div>
    
              <div className="Province">
                <div>
                  <div>
                    <svg
                      className="icon"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                       <path
                        d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"
                      />
                    </svg>
                  </div>
                </div>
    
                <div className="static"><p>Provincia:</p></div>
                <div><p>{data.province}</p></div>
              </div>
    
              <div className="Sex">
                <div>
                  <div>
                    <svg
                      className="icon"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                     <path
                        d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm8 352V128h6.9c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h0zM58.2 182.3c19.9-33.1 55.3-53.5 93.8-54.3V384h0v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2z"
                      />
                    </svg>
                  </div>
                </div>
    
                <div className="static"><p>Sexo:</p></div>
                <div><p>{data.sex}</p></div>
              </div>
    
              <div className="DeputyMember">
                <div>
                  <div>
                    <svg
                      className="icon"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                      />
                    </svg>
                  </div>
                </div>
    
                <div className="static"><p>Diputado cercano:</p></div>
                <div><p>Juan Ramón</p></div>
              </div>
    
              <div className="CriticalInformation">
                <div>
                  <div>
                    <svg
                      className="CriticalInformationSvg icon"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                     
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                      />
                    </svg>
                  </div>
                </div>
    
                <div className="static"><p>Información crítica:</p></div>
                <div>
                  <p>
                   {data.additionalInfo.criticalInformation}
                  </p>
                </div>
              </div>
            </section>
    
            <footer className="missingPerson_footer">
              <div className="image-cooter-container">
                <img src={picture} alt="" />
              </div>
              <p>Son Inrremplazables</p>
            </footer>
          </main>
        </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
        
        
        </>







     }


     else{


      return <>
       <PageNotFound />
      
      
      </>

     





      console.log("El resultado no es encontrado")



     }















};