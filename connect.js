import mongoose from "mongoose";

export default async function connectMongoDB(uri){
try {
    await mongoose.connect(uri);
    console.log('ket noi db thanh cong');
} catch (error) {
    console.log(error);
}
}