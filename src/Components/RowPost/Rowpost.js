import React from 'react'
import './Rowpost.css'
import axios from '../../axios';
import {useEffect,useState  } from 'react';
import {imageUrl,API_KEY} from '../../constants/constants';
import YouTube from 'react-youtube'    
    

function Rowpost(props) {

  const [movies,setMovies] =useState([])

  const [urlid,seturlId]=useState()

  axios.get(props.url).then(response=>{
     
    setMovies(response.data.results)
   })

  useEffect(()=>{

  },  [])
 
  const opts= {
    height: '390',
    width: '100%',
    
    playerVars: {},
      autoplay: 1,
    }
    const handleMovieclick=(id)=>{
       
      console.log(id);
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
           if(response.data.results.length){
            seturlId(response.data.results[0])

           } else{
            console.log('Empty Array');
           } 
          

      })
    }
    

  return (
    <div className='Row'>

     <h2 className='title'>{props.title}</h2> 
     <div className="posters">
      
      {movies.map((obj)=>
        <img  onClick={()=> handleMovieclick(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
      )}
     
    </div>
     
    {urlid &&<YouTube opts={opts} videoId={urlid.key} ></YouTube>}

    </div>
  )
}

export default Rowpost
