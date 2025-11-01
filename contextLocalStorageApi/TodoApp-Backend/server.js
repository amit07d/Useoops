import express from "express";
import cors from "cors";
import connectUserDB from "./database/db.js";
import authRoutes from "./routes/auth-routes.js"
import homeRoutes from "./routes/home.routes.js"



const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

connectUserDB();

app.use("/api/auth", authRoutes)
app.use("/api/auth", homeRoutes)

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
