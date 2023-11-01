import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    mname:{
        type:String
    },
    rating:{
        type:String
    },
    vote:{
        type:String
    },
    mview:{
        type:String
    },
    lang:{
        type:String
        },
    duration:{
        type:String
    },
    mtype:{
        type:String
    },
    pic:{
        type:String
    },
    banner:{
        type:String
    } 

})

export default mongoose.model.Users || mongoose.model("User",userSchema)