import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect("mongodb://admin:1234@host.docker.internal:27017/web2?authSource=admin")
        .then(()=>console.log("Connected!"))
        .catch(()=>console.log("Error!"))
}