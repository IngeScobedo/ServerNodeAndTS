import {Router,Response,Request} from 'express';

const router : Router = Router();

import {indexController}  from '../controllers/indexControllers';

router.get('/',indexController.index)

router.get('/add',(req, res)=> res.send("Form")) 


export default router;