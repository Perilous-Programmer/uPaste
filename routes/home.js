// Import the required module
import express from 'express';
const homeRouter = express.Router();

// Define route
homeRouter.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// Export the router
// module.exports = homeRouter;
export default homeRouter;
