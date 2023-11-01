import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
    const [film,setFilm]=useState([]);
    // const [input,setInput]=useState([]);
    // console.log(input);
    
    console.log(film);
    const filmdata=async()=>{
        const res=await axios.get("http://localhost:3001/api/display");
        // console.log(res);
        const data=res.data;
        console.log(data);
       if (res.status===404|| !data){
        console.log("error");
       }
       else{
        console.log("data get");
        setFilm(data)
       }
       
    }
    const searchFilm=(e)=>{
      let arr=[]
      console.log(e.target.value);
      const id=e.target.value;
      const res=axios.post("http://localhost:3001/api/search");

      res.then((data)=>{
        // console.log(data);
        data.data.map((dt)=>{
    if(dt.mname.startsWith(e.target.value))
    {
      arr.push(dt)

    }
    
        })
        console.log(arr);
        setFilm(arr)
      })
    }

    
    


    

   useEffect(()=>{
    filmdata();
   },[])
   
  return (
    
    <div className='body'>
        {/* <h1 className='head'>FILM FEST</h1> */}
        <nav className="navbar">
           
        
<div className="container-fluid">
            <form className="sbar" role="search">
            <input className="search me-2" type="search" placeholder="   Search for Movies" aria-label="Search" onKeyUp={searchFilm}/>
            
            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            </div>
            </nav>
        <div className='grid' >
            {
            film.map((data)=>{
                return(
                        <>
                            <Link to={`/Detail/${data._id}`}>
                                <div className="img1" key={data._id}>
                                    <img src={data.pic} alt="img"/>
                                    <p className='name'>{data.mname}</p>
                                </div>
                                </Link>

                            

                                               
                         </>
            
                )
            })
            
            
            }
            
          
        </div>
    </div> 
  )
}

export default Home