import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/User.js";
import bcryptjs from "bcryptjs";
import { sendCookie } from "../utils/feature.js";

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

    sendCookie(newUser, res, 201, "Registered Successfully");
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

  sendCookie(user, res, 200, `welcome back ${user.name}`);
};
