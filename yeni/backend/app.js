import express from "express"
import "dotenv/config"
import "../backend/src/db/dbConnection.js"
import productRouter from "./src/routes/productRouter.js"
import  cors  from "cors"

const port = process.env.PORT || 5001

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/products", productRouter)

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`Server is running ${`http://localhost:${port}/`}`)
})