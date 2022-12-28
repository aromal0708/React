import React,{useEffect} from 'react'
import {useState  } from 'react';

import {API_KEY} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'


function Banner() {
  
  const[movie, setMovie] = useState()

  useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
         
           
          setMovie(response.data.results[0])

        })
    

  },[])
  return (
    <div className='Banner'>
  

      <div className='content'>

        <h1 className='titles'>{movie.title}</h1>
        <div className='BannerButtons' >
            <button className='button'>Play</button>
            <button className='button'>My List</button>


        </div>
        
        <h1 className='Description'>While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a killing spree and solve the mystery that embroiled her parents 25 years ago.</h1>
        
        </div>
       <div className="fade_bottom"></div>

      </div>
    


  )
}

export default Banner
