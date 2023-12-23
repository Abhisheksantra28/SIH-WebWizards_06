import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/User.js";
import bcryptjs from "bcryptjs";
import { sendCookie } from "../utils/feature.js";
import asyncHandler from "../utils/asyncHandler.js"

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return next(new ErrorHandler("user already exist! please Sign in", 400));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    sendCookie(newUser, res, 201, "Registered Successfully",newUser);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return next(new ErrorHandler("user not found! please register first", 404));

  const correctPassword = bcryptjs.compareSync(password, user.password);

  if (!correctPassword) return next(new ErrorHandler("wrong credentials", 401));

  sendCookie(user, res, 200, `welcome back ${user.name}`,user);
};

export const googleSignIn = async (req, res, next) => {
 
  try {
    const { name, email, photo } = req.body;
    const user = await User.findOne({ email });
  
    if (user) {
      const { password: hashedPassword, ...rest } = user._doc;
      sendCookie(user, res, 200, `welcome back ${user.name}`,user);
    } else {
      const generatePassword = Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatePassword, 10);
  
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        profilePicture: photo,
      });
  
      await newUser.save();
      sendCookie(newUser, res, 201, "Registered Successfully",newUser);
    }
  } catch (error) {
    next(new ErrorHandler(error.message,500))
  }
 
};


export const updateUser = asyncHandler(async(req,res)=>{
  if(req.user._id !== req.params._id){
    return next(new ErrorHandler("You can update only your account!",401))  
  }

  
})
