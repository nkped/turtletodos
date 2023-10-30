import mongoose from "mongoose";

export default async function connectMongoDB() {

    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to MongoDB..')
    } catch(err) {
        console.log(err)
    }
}