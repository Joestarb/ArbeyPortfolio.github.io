import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe"
import Proyects from "./Components/Proyects";
import Contacto from "./Components/Contacto"
import "./index.css";


const router = createBrowserRouter([
  {path: "/", element: <Header/>},
  {path:"/about",element:<AboutMe />},
  {path:'/proyects',element:<Proyects />},
  {path: "/Contacto", element:<Contacto/>}
])
function App() {
  return (
    <div className="black" id="Header">
 <RouterProvider router={router}/>
    </div>
   
  );
}

export default App;
