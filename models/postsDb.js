const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    
    post_title:{
        type: String,
        required:true,
    },
    post_description:{
        type:String,
        required:true,
    },
    post_content:{
        type:String,
        required:true,
    },
    post_author:{
        type:String,
        required:true,
    },
    post_author_id:{
        type:String,
        required:true,
    },

});
module.exports=mongoose.model("posts",postSchema);