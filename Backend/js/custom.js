let mn=document.getElementById("name");
let rate=document.getElementById("rating");
let vote=document.getElementById("vote");
let mv=document.getElementById("mview");
let lang=document.getElementById("lang");
let duration=document.getElementById("duration");
let mtype=document.getElementById("mtype");
let picture=document.getElementById("pic");
let bannner=document.getElementById("banner");




document.getElementById("add").addEventListener("click",()=>{
    console.log(mn.value);
    // if(mn.value!='' && rate.value!=''){
    //     convertToBase64(f1.files[0]).then((dt)=>{
    //         fetch("http://localhost:3001/api/add",{method:"POST",
    //         headers:{"Content-Type":"application/json"},
    //         body:JSON.stringify({
    //             mname:mn.value,
    //             rating:rate.value,
                
    //         })
    //     })
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }
    // else{
    //     alert("field must not be empty")
    // }
})

// function convertToBase64(file){
//     return new Promise((resolve,reject)=>{
//         const fileReader=new FileReader();
//         fileReader.readAsDataURL(file);
//         fileReader.onload=()=>{
//             resolve(fileReader.result);
//         }
//         fileReader.onerror=()=>{
//             reject(error);
//         }
//     })
// }