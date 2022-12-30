import React from "react"
import Navbar from "./Components/NavBar/Navbar"
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
import {action,comedy,documentaries,horror,originals, romance, trending}  from './Components/Urls'


function App(){
  return(
   <div ClassName="App" >
    <Navbar/>
    <Banner/>
    <Rowpost url={originals} title='Netflix Originals'/>
    <Rowpost url={trending} title='Trending'            />

    <Rowpost url={comedy} title='Comedy'  isSmall />
    <Rowpost url={action} title='Action'  isSmall />
    <Rowpost url={romance} title='Romance' isSmall />
    
   </div>
  )
}

export default App;