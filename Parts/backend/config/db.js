import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect(`mongodb+srv://greatstack:aaaaaaaa@cluster0.cc5djeh.mongodb.net/food-del`).then(()=>console.log("DB Connected"))
}