import ErrorHandler from "../middlewares/errorMiddleware.js";
import Jwt  from "jsonwebtoken";

export const verifyToken = (req,res,next) =>{
    const token = req.cookies.token;

    if(!token) return next(new ErrorHandler("You are not authenticated in",401))

    Jwt.verify(token,process.env.SECRET,(err,user)=>{
        if(err) return next(new ErrorHandler("Token is not valid ",403))

        req.user = user;
        next();
    })
    

}