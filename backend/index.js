import express from "express";
import FileUpload from "express-fileupload";
import ProductRoute from "./routes/ProductRoutes.js";
import cors from "cors";

const app=express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());  
app.use(ProductRoute);
app.use(express.static("public"));

app.listen(5000, () => console.log("Server Up dan Running"));