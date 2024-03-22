import express  from 'express';
import Snipit from '../models/snipit.js';
var router = express.Router();

router.get('/', async function(req, res, next) {  
  const snipits = await Snipit.findAll();
  let response = snipits;
  res.json(response);
});

router.get('/:id', async function(req, res, next) {
  res.send('respond with a resource '+parseInt(req.params.id, 10));
});

router.post('/', async function(req, res, next) {
  const snipit = await Snipit.create({
    snipitTitle: req.body.title || "no title",
    snipitBody: req.body.body || "no body",
  });
  res.send('post data'+ JSON.stringify(snipit));
});


export default  router;
