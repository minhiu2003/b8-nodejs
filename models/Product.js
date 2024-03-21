import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim: true
    },
    sku: String,
    brand: {
        name : String,
        img: String
    },
    comments :[{
        body: String,
        date: Date
    }]
})

export default mongoose.model('Product',productSchema);