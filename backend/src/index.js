import express from "express"
import "dotenv/config"
import cors from "cors"


const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json());
app.use(cors({ origin:'*' }));

app.get('/',(req,res)=>{
    res.send("Hello World")
    
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
