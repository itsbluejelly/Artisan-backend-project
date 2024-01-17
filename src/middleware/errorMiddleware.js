const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  };
  
  module.exports = errorMiddleware;
  