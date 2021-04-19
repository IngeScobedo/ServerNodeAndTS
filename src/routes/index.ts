import {Router,Response,Request} from 'express';

const router : Router = Router();

import {indexController}  from '../controllers/indexControllers';

router.get('/',indexController.index)

router.get('/add',(req, res)=> res.send("Holis")) 

router.get('/about',(req : Request, res : Response) => res.render("about"))


export default router;