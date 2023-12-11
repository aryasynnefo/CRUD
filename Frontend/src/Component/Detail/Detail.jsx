import React, { useEffect, useState } from 'react';
import './Detail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Detail = () => {
  const{id}=useParams("");
  const [flm,setFlm]=useState([]);
  console.log(flm);
  console.log();
  const filmData=async()=>{
     axios.post(`http://localhost:3001/api/film/${id}`)
    .then((film)=>{
      setFlm(film.data)
    })
  }

  const onDelete=async()=>{
      axios.delete(`http://localhost:3001/api/deletefilm/${id}`)
      .then((film)=>{
        setFlm(film.data)
      })
  }

  

  useEffect(()=>{
    filmData();
  },[]);
  console.log(id);


  return (
      <>
    
          {
           <>
                 <div className='parent'>
                   <img src={flm.banner} alt="img" />
                      <div className='child'>
                      <img src={flm.pic} alt="img" />
                      
                        <div className='detail'>
                        

                            <div className='d1'>
                              <h1>{flm.mname}</h1>
                              <div className='delete'>
                              <Link to="/"><button onClick={onDelete}>Delete Film</button></Link>
                              </div>
                            </div>
                            <div className='vote'>
                            
                              <p><span class="material-symbols-outlined">
                                    star
                                </span>{flm.vote}</p>
                                
                            </div>
                            <div className='d2'>
                              <p className='p1'>Click to update the movie.</p>
                              <Link to={`/Edit/${flm._id}`}><button>Update</button></Link>
                            </div>

                            <div className='vision'>
                              <p>{flm.mview}</p>
                              <p>{flm.lang}</p>
                            </div>

                            <ul className='list'>
                              <li>{flm.duration}</li>
                              <li>{flm.mtype}</li>
                            </ul>

                            
                          
                        </div>
                        
                    </div>
                </div>
          
            </>
          }
     </>
    
  )
}

export default Detail