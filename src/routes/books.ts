import {Router} from 'express';

const router : Router = Router();

import {booksController} from '../controllers/bookControllers'

router.get('books', booksController.index);
router.get('books/add',booksController.renderFormBooks)

export default router;