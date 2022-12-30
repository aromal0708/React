import React,{useEffect} from 'react'
import {useState  } from 'react';

import {API_KEY} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants';

function Banner() {
  
  const[movie, setMovie] = useState()
  const DATA=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  const getRandomObject = (DATA) => {
    const randomObject = DATA[Math.floor(Math.random() *DATA.length)];
    return randomObject;
  };

  useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
         
          console.log(response.data);
          setMovie(response.data.results[getRandomObject(DATA)])
          

        })
    

  },[])
   
  
    

  
  return (
    <div 
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path:""}`}}
    className='Banner'>
  

      <div className='content'>

        <h1 className='titles'>{movie? movie.title :""}</h1>
        <div className='BannerButtons' >
            <button className='button'>Play</button>
            <button className='button'>My List</button>


        </div>
        
        <h1 className='Description'>{movie? movie.overview:""}</h1>
        
        </div>
       <div className="fade_bottom"></div>

      </div>
    


  )
}

export default Banner
