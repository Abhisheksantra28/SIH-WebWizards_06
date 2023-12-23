import express from "express"
import { googleSignIn, signIn, signUp } from "../controllers/user.js";

const router = express.Router();

router.post("/signup",signUp)
router.post("/signin",signIn)
router.post("/google",googleSignIn)
router.post("/update/:id",)


export default router;