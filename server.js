const mongoose=require("mongoose");
const express=require("express");
const cors = require("cors")
const app=express();
app.use(cors());
app.use(express.json());

// const { registerNewUser } = require("./controllers/usersController")
// const {createPost,getPost,getPostById,deletePost} = require('./controllers/post');


const port=8000;
const MONGODB_URI="mongodb+srv://annrosecleetus:roseann@cluster0.q4vir77.mongodb.net/blog?retryWrites=true&w=majority ";
mongoose.connect(MONGODB_URI).then(()=>{
    app.listen(port,()=>{
        console.log("Server is running on port:",port);
    })
    console.log("Database is connected.");
}, (err)=>{
    console.log("Database not connected ",err);
});

/*app.post("/register", registerNewUser)

app.get("/post/",getPost);
app.get("/:post/id",getPostById);
app.post("/post/create",createPost);
app.delete("/post/delete/:id",deletePost); */

