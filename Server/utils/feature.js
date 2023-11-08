import jwt from "jsonwebtoken";

export const sendCookie = (user, res, statusCode = 200, message) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Devolpoment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Devolpoment" ? false : true,
    })
    .json({
      success: true,
      message,
      user,
    });
};
