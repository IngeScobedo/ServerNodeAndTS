import { Request, Response } from "express";
import BookModel, { Book } from "../models/Books";
class BooksController {
  public async index(req: Request, res: Response):Promise<void> {
    const books: Book[] = await BookModel.find();
    res.render("books/indexBooks", {
      title: "Books",
      books
    });
  }

  public renderFormBooks(req: Request, res: Response) {
    res.render("books/addBooks", {
      title: "Add a Book",
    });
  }

  public async saveBooks(req: Request, res: Response) {
    const { title, author, isbn } = req.body;
    const book: Book = new BookModel({ title, author, isbn });
    await book.save();
    res.redirect("/books");
  }
}

export const booksController = new BooksController();
