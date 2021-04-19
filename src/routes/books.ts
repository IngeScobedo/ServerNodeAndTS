import {Router} from 'express';

const router : Router = Router();

import {booksController} from '../controllers/bookControllers'

router.get('/', booksController.index);
router.get('/add',booksController.renderFormBooks)

export default router;