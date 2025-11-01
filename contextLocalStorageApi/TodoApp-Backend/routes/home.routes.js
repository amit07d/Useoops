import express from "express";
import authMiddlewre from "../middleware/authMiddleWare.js";

const router = express.Router();

router.get("/welcome",authMiddlewre, (req, res) => {
  return res.json({
    message: "Welcome to the home page",
  });
});

export default router;
