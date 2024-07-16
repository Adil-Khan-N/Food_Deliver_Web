import express from "express"
import AuthMiddleWare from "../middleware/auth.js"
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderControllers.js"

const orderRouter = express.Router()

orderRouter.post("/place",AuthMiddleWare,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",AuthMiddleWare,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)

export default orderRouter