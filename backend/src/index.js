import express from "express"
import "dotenv/config"
import cors from "cors"
import { connectDB } from "./lib/db.js"
import { clerkMiddleware } from "@clerk/express"


const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json());
app.use(clerkMiddleware())
app.use(cors({ origin:process.env.FRONTEND_URL,credentials:true }));

app.get('/',(req,res)=>{
    res.send(" Server is working good!!!!")
    
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`)
})
