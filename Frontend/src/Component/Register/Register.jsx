import React, { useEffect, useState } from 'react'
import './Register.css'
import axios from 'axios'
function Register(){
  const [val,setVal]=useState({
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

  const onHandleChange=(e)=>{
      setVal((pre)=>{
        return {...pre,[e.target.name]:e.target.value}
    })
  }


const onHandleClick=async (e)=>{
  console.log(e);
  e.preventDefault();
  // console.log("Movie Name :", val.mname);
  // console.log("Rating     :", val.rating);
  // console.log("Vote       :", val.vote);
  // console.log("Movie View :", val.view);
  // console.log("Language   :", val.lang);
  // console.log("Duration   :", val.duration);
  // console.log("Movie Type :", val.mtype);
  // console.log("Picture    :", val.pic);
  // console.log("Banner     :", val.banner);
// const {mname,rating,vote,mview,lang,duration,mtype,pic,banner}=val;
// console.log(val)
// fetch("http://localhost:3001/api/add",{method:"POST",
// headers:{"Content-Type":"application/json"},
// body:JSON.stringify({
//   mname,rating,vote,view,lang,duration,mtype,pic,banner
// })}).then(()=>{
//   alert("data added");
// }).catch(()=>{
//   alert("error")
// })
// console.log(e.target[7].files[0]);
const pics=await convertToBase64(e.target[7].files[0]);

const bnr=await convertToBase64(e.target[8].files[0]);


try{
const ress=await axios.post("http://localhost:3001/api/add",{...val,pic:pics,banner:bnr})
// console.log(ress.status);


if(ress.status==201)
{
  alert("Data added") 
}
}catch(error){
  alert("error")
}
}

function convertToBase64(file){
  return new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
          resolve(fileReader.result);
      }
      fileReader.onerror=()=>{
          reject(error);
      }
  })
}



  return (
          
          <div className='main'>
              <h1 className='reg'>Register Movie Here...!</h1>
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
                      <div className="mb-3 col-md-6 text-dark">
                        <label className="form-label">Picture</label>
                        <input className="form-control"   name='pic' type="file" id="formFile"/>
                      </div>
                      <div className="mb-3 col-md-6 text-dark">
                        <label className="form-label" >Banner</label>
                        <input className="form-control"  name='banner'  type="file" id="formFileMultiple" multiple />
                      </div>
            
                      <div className="col-12 text-center p-5">
                        <button type="submit" className="btn btn-primary">Register</button>
                      </div>
                   </form>
                 </div>
                   
           </div>
         ) 
}

export default Register