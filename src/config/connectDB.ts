import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect("mongodb://admin:1234@localhost:27017/web2?authSource=admin")
        .then(()=>console.log("Connected!"))
        .catch(()=>console.log("Error!"))
}