import express  from 'express';
var router = express.Router();

router.get('/', function(req, res, next) {
  let response = {message: "test"};
  res.json(response);
});

router.get('/:id', function(req, res, next) {
  res.send('respond with a resource '+parseInt(req.params.id, 10));
});

export default  router;
