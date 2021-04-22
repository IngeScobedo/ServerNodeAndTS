import {Router} from 'express';

const router : Router = Router();

import {booksController} from '../controllers/bookControllers'

router.get('/', booksController.index);
router.get('/add',booksController.renderFormBooks)
router.post('/add', booksController.saveBooks)
export default router;