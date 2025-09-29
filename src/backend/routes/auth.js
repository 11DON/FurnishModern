import express from "express";
 import { signup,login,getUsers } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

 const router = express.Router();

 router.post("/signUp",signup);
 router.post("/login",login);
 router.get("/users",protect,getUsers);

 export default router;