import express from "express";
import languageRoutes from "./routes/language.routes.js";

const app = express();

// settings
app.set("port", 4000);
app.use(languageRoutes);
export default app;