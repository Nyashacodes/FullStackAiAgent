import express from "express"
import mongoose from "mongoose"
import cors from "cors"


const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(express.json())//so that we can accept json data

//connect mongoose
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB Connected !!!!!!!!!!!!!");
        app.listen(PORT, ()=>console.log("Server at http://localhost:3000"))
        
    })
    .catch((err)=>console.error("MongoDB error:", err))
