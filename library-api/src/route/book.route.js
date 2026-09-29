const express = require('express');
const router = express.Router();
const bookController = require('../controller/book.controller');

router.get('/', (req, res, next) => bookController.getAll(req, res, next));
router.get('/:id', (req, res, next) => bookController.getById(req, res, next));
router.post('/', (req, res, next) => bookController.create(req, res, next));
router.put('/:id', (req, res, next) => bookController.update(req, res, next));
router.delete('/:id', (req, res, next) => bookController.delete(req, res, next));

module.exports = router;