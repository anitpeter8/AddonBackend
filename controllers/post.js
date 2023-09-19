
const Post = require("../backend/models/postDb")


const createPost=(req,res)=>{
    Post
    .create({post_title:req.body.post_title,post_description:req.body.post_description})
    .then((data)=>{
        res.status(200).send("New Post Created");
    }).catch((err)=>{
        res.send(err);
    });
};
const getPost=(req,res)=>{
    Post.find().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.send(err);
    });
};
const getPostById=(req,res)=>{
    Post.findById({_id:id}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.send(err);
    });
    
   res.send("Get post of id"+id);
};

const deletePost = async(req,res)=>{
    try {
        const activity = await Post.findByIdAndDelete({_id:id})
        console.log(activity);
        res.send("Deleted post") 
    } catch(error){
        console.log(error)
        res.json(error)
    }
};
module.exports={createPost,getPost,getPostById,deletePost};