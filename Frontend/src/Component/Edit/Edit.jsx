import React, { useEffect, useState } from 'react';
import './Edit.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Edit()
{
  const {id}=useParams("");
  const [val,setVal]=useState
  ({
    mname:'',
    rating:'',
    vote:'',
    mview:'',
    lang:'',
    duration:'',
    mtype:'',
    pic:'',
    banner:''

  })

  const getFilmdata=async()=>
  {
     const data= axios.post(`http://localhost:3001/api/filmdata/${id}`)
     data.then((res)=>
     {
        console.log(res.data);
        setVal(res.data);
        console.log(val);
      })
  }
  
 const changePic=async(e)=>
 {
    console.log(e.target.files[0]);
    const newpic=await convertToBase64(e.target.files[0]);
    setVal((pre)=>
      ({...pre,pic:newpic})
    )
 }
const changeBnr=async(e)=>
{
    // console.log(e.target.files[0]);
    const newbnr=await convertToBase64(e.target.files[0]);
    setVal((pre)=>
      ({...pre,banner:newbnr})
    )
}
const onHandleChange=(e)=>
{
    setVal((pre)=>
    {
    return {...pre,[e.target.name]:e.target.value}
    })
}


function convertToBase64(file)
{
  return new Promise((resolve,reject)=>
  {
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>
      {
          resolve(fileReader.result);
      }
      fileReader.onerror=()=>
      {
          reject(error);
      }
  })
}

const onHandleClick=(e)=>
{
  e.preventDefault();
  const {mname,rating,vote,mview,lang,duration,mtype,pic,banner}=val;
  const updatefilm=axios.patch("")
}

useEffect(()=>{
  getFilmdata();
},[])

return (
        <div className='main'>
            <h1 className='reg'>Edit Movie Here...!</h1>
              <div className="container">
              <form className="row g-3" onSubmit={onHandleClick}>
                  <div className="col-md-6 text-dark">
                    <label className="form-label">Movie Name</label>
                    <input type="text"  value={val.mname} name='mname' className="form-control" id="inputEmail4" onChange={onHandleChange} />
                  </div>
                  <div className="col-md-6 text-dark">
                    <label  className="form-label">Rating</label>
                    <input type="text" value={val.rating}  name='rating' className="form-control" id="inputPassword4" onChange={onHandleChange}/>
                  </div>
                  <div className="col-md-6 text-dark">
                    <label className="form-label">Vote</label>
                    <input type="text" value={val.vote}  name='vote' className="form-control" id="inputEmail4" onChange={onHandleChange}/> 
                  </div>
                  <div className="col-md-6 text-dark">
                    <label  className="form-label">Movie View</label>
                    <input type="text" value={val.mview} name='mview' className="form-control" id="inputPassword4" onChange={onHandleChange}/>
                  </div>
                  <div className="col-md-6 text-dark">
                    <label  className="form-label">Language</label>
                    <input type="text" value={val.lang}  name='lang' className="form-control" id="inputEmail4" onChange={onHandleChange}/>
                  </div>
                  <div className="col-md-6 text-dark">
                    <label  className="form-label">Duration</label>
                    <input type="text" value={val.duration} name='duration' className="form-control"  id="inputPassword4" onChange={onHandleChange}/>
                  </div>
                  <div className="col-md-6 text-dark">
                    <label  className="form-label">Movie Type</label>
                    <input type="text" value={val.mtype}  name='mtype' className="form-control" id="inputEmail4"  onChange={onHandleChange}/>
                  </div>
                  <div className="mb-3 col-md-6 text-dark"></div>
                  <div className="mb-3 col-md-3 text-dark">
                    <div className="pic">
                      <img src={val.pic} alt="" />
                    </div>
                    <label className="form-label">Picture</label>
                    <input className="form-control"   name='pic' type="file" id="formFile" onChange={changePic} />
                  </div>
                  <div className="mb-3 col-md-9 text-dark">
                   <div className="bnr">
                      <img src={val.banner} alt=""/>
                    </div> 
                    <label className="foBannerrm-label" >Banner</label>
                    <input className="form-control"  name='banner'  type="file" id="formFileMultiple" onChange={changeBnr} />
                  </div> 

                  <div className="col-12 text-center p-5">
                    <Link to="/"><button type="submit" className="btn btn-primary">Submit</button></Link> 
                  </div> 
               </form> 
              </div>   
       </div> 

     ) 
}

export default Edit
