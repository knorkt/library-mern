const bookService = require('../service/book.service');

class BookController {
  async getAll(req, res, next) {
    try {
      const books = await bookService.getAllBooks();
      res.status(200).json({ success: true, count: books.length, data: books });
    } catch (err) {
      console.log("Error: ", err)
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const book = await bookService.getBookById(req.params.id);
      res.status(200).json({ success: true, data: book });
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newBook = await bookService.createBook(req.body);
      console.log("**********", req.body)
      res.status(201).json({ success: true, data: newBook });
    } catch (err) {
      console.log(err)
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedBook = await bookService.updateBook(req.params.id, req.body);
      res.status(200).json({ success: true, data: updatedBook });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const deletedBook = await bookService.deleteBook(req.params.id);
      res.status(200).json({ success: true, message: 'Book deleted successfully', data: deletedBook });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new BookController();