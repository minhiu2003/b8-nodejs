import  express  from "express";
// import Product from "../schemas/products.js";
import ProductController from "../controllers/ProductController.js";

const routeProducts = express.Router();
const productController = new ProductController;
// Middleware: cái thằng mà nó sẽ đứng ở giữa: 
//              yêu cầu ng dùng gửi lên và phía server xử lý
const timelog = (req, res, next) => {
    console.log('Time: ' + Date.now());
    next();
}
routeProducts.use(timelog);

// Định nghĩa các đường dẫn
const baseUrl = '/';

// Danh sách + tìm kiếm
routeProducts.get(baseUrl, productController.index);

// Xem chi tiết
routeProducts.get(baseUrl + ':id',productController.show);

// Thêm mới
routeProducts.post(baseUrl,productController.store);

// Cập nhật
routeProducts.put(baseUrl + ':id',productController.update);

// Xóa
routeProducts.delete(baseUrl + ':id',productController.delete);

export default routeProducts;