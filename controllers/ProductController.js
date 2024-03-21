import Product from "../models/Product.js";

class ProductController{
    // danh sach + tim kiem
    // /api/v1/products
    async index(req,res){
        try {
           const data =  await Product.find(req.query);
           res.json(data)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // show
    // /api/v1/products/:id
    async show(req,res){
        try {
            const data =  await Product.findById(req.params.id);
            res.json(data)
         } catch (error) {
             res.status(500).json(error);
         }
    }

    // add
    // /api/v1/products
    async store(req,res){
        try {
            const data =  await Product.create(req.body);
            res.json(data)
         } catch (error) {
             res.status(500).json(error);
         }
    }
    // update
    // /api/v1/products/:id
    async update(req,res){
        try {
            const data =  await Product.findByIdAndUpdate(req.params.id,req.body);
            res.json(data)
         } catch (error) {
             res.status(500).json(error);
         }
    }
    // delete
    // /api/v1/products/:id
    async delete(req,res){
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.status(204).json([]);
         } catch (error) {
             res.status(500).json(error);
         }
    }
}
 
export default ProductController;