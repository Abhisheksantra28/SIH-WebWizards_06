import ErrorHandler from "../middlewares/errorMiddleware";
import { Jwt } from "jsonwebtoken";

export const verifyToken = (req,res,next) =>{
    const token = req.cookies.token;

    if(!token) return next(new ErrorHandler("You are not logged in",401))

    jwt.verify(token,process.env.SECRET,(err,user)=>{
        if(err) return next(new ErrorHandler("Token is not valid ",))
    })
    

}