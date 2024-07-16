import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import UserRouter from "./routes/userRoute.js"
import 'dotenv/config'
import CartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



// app-config
const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB()

//api endpoints
app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",UserRouter)
app.use("/api/cart",CartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("ApI WorKinG")
})

app.listen(port,()=>{
    console.log(`Server starterd on http://localhost:${port}`)
})

//mongodb+srv://greatstack:aaaaaaaa@cluster0.cc5djeh.mongodb.net/?