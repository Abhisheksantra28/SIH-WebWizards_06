class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (error, req, res, next) => {
  const message = error.message || "Internal Server Error";
  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

export default ErrorHandler;
