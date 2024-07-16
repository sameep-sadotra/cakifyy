import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://cake:Sameep132@cluster0.ybhc2jy.mongodb.net/cakify').then(()=>console.log("DB Connected"));
   
}