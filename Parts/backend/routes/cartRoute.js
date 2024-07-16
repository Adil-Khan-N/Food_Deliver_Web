
import express  from "express"
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js"
import AuthMiddleware from "../middleware/auth.js"

const CartRouter = express.Router()

CartRouter.post("/add",AuthMiddleware,addToCart)
CartRouter.post("/remove",AuthMiddleware,removeFromCart)
CartRouter.post("/get",AuthMiddleware,getCart)

export default CartRouter