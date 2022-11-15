import express from "express";
import productRoutes from "./routes/product.routes.js";

const app = express();

// settings
app.set("port", 4000);
app.use(productRoutes);
export default app;