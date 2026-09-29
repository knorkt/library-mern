const pool = require('../config/db');

class BookRepository {
  async findAll() {
    const { rows } = await pool.query('SELECT * FROM book ORDER BY id ASC');
    return rows;
  }

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM book WHERE id = $1', [id]);
    return rows[0];
  }

  async create({ name, price, description, isbn, is_available }) {
    const query = `
      INSERT INTO book (name, price, description, isbn, is_available)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [name, price, description, isbn, is_available ?? true];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async update(id, { name, price, description, isbn, is_available }) {
    const query = `
      UPDATE book 
      SET name = $1, price = $2, description = $3, isbn = $4, is_available = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [name, price, description, isbn, is_available, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async delete(id) {
    const { rows } = await pool.query('DELETE FROM book WHERE id = $1 RETURNING *;', [id]);
    return rows[0];
  }
}

module.exports = new BookRepository();