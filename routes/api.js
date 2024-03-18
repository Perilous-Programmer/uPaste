import express from 'express';

const router = express.Router();

import pasteBin from './pasteBin.js';
import indexRouter from './home.js';

router.use('/', indexRouter);
router.use('/pastebin', pasteBin);


export default router;