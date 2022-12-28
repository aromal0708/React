import React from "react"
import Navbar from "./Components/NavBar/Navbar"
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";

function App(){
  return(
   <div ClassName="App" >
    <Navbar/>
    <Banner/>
    <Rowpost/>
   </div>
  )
}

export default App;