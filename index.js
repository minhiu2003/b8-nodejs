import  express  from "express";
import 'dotenv/config';
import bodyParser from "body-parser";
import connectMongoDB from "./connect.js";
import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI || null;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

connectMongoDB(uri);

router(app);

app.listen(port,()=>{
    console.log("khoi tao server thanh cong");
});