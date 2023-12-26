const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date()}`);
    next();
  };
  
  module.exports = loggerMiddleware;
  