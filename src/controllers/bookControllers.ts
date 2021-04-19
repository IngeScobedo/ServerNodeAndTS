import { Request, Response}  from 'express';

class BooksController {

    public index ( req: Request,res: Response){
        res.render('books/indexBooks',{
            title: 'Books',
            active: 'active'
        })
    }


    public renderFormBooks ( req : Request, res : Response){
        res.render('books/addBooks', {
            title : 'Add a Book'
        }
    )
}

} 

export const booksController = new BooksController()