import express from "express"
import { googleSignIn, signIn, signUp, updateUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/signup",signUp)
router.post("/signin",signIn)
router.post("/google",googleSignIn)
router.post("/update/:id",verifyToken,updateUser)


export default router;