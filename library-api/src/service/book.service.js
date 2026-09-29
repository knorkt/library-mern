const bookRepository = require('../repository/book.repository');

class BookService {
  async getAllBooks() {
    return await bookRepository.findAll();
  }

  async getBookById(id) {
    const book = await bookRepository.findById(id);
    if (!book) {
      const error = new Error('Book not found');
      error.statusCode = 404;
      throw error;
    }
    return book;
  }

  async createBook(data) {
    if (!data.name || data.price === undefined) {
      const error = new Error('Name and price are mandatory fields');
      error.statusCode = 400;
      throw error;
    }
    return await bookRepository.create(data);
  }

  async updateBook(id, data) {
    await this.getBookById(id); // Ensure existence
    return await bookRepository.update(id, data);
  }

  async deleteBook(id) {
    await this.getBookById(id); // Ensure existence
    return await bookRepository.delete(id);
  }
}

module.exports = new BookService();