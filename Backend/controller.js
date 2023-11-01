import schema from "./user.model.js";

export async function addUser(req,res){
    console.log(req.body);
    let{mname,rating,vote,mview,lang,duration,mtype,pic,banner}=req.body;
    
    try{
        res.status(201).send(schema.create({mname,rating,vote,mview,lang,duration,mtype,pic,banner}))
        
    } catch(error){
        res.status(404).send(error)
    }   
    
}

export async function displayUser(req,res){
    try{
        schema.find().then((data)=>{
            res.status(200).send(data);
            // console.log(data);
        }).catch((error)=>{
            res.status(404).send(error) 
        })
        
    } catch(error){
        // res.status(404).send(error)
    }
    
}

export async function getFilm(req,res)
{
    try {
       const{id}=req.params;
       schema.findOne({_id:id}).then((data)=>{
        res.status(200).send(data);
       }) .catch((error)=>{
        res.status(404).send(error)
       })

    } catch (error) {
        res.status(404).send(error)
    }
}

export async function getFilmdata(req,res)
{
    try {
        const{id}=req.params;
        schema.findOne({_id:id}).then((data)=>{
         res.status(200).send(data);
        }) .catch((error)=>{
         res.status(404).send(error)
        })
 
     } catch (error) {
         res.status(404).send(error)
     }
}
 

export async function deleteFilmdata(req,res)
{
    try{
    const{id}=req.params;
    schema.deleteOne({_id:id}).then((data)=>{
        res.status(200).send(data);
    }).catch((error)=>{
        res.status(404).send(error)
    })
} catch (error){
    res.status(404).send(error)
}
} 

export async function updateFilmdata(req,res)
{
  const{id}=req.params;
  console.log(req.body);
  const {mname,rating,vote,mview,lang,duration,mtype,pic,banner}=req.body;
  const up=await schema.updateOne({_id:id},{$set:{mname,rating,vote,mview,lang,duration,mtype,pic,banner}});
  res.end();
//   console.log(up);
  
}


export async function searchFilm(req,res)
{
        try{
           
            
            schema.find().then((data)=>{
                res.status(200).send(data);
                // console.log(data);
            }).catch((error)=>{
                res.status(404).send(error) 
            })
            
        } catch(error){
            // res.status(404).send(error)
        }
}