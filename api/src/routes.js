const { Router } = require('express');
const BooksController = require('./app/controllers/BooksController');


const router = Router();

router.get('/livros', BooksController.index);
router.get('/livros/:id', BooksController.show);
router.post('/livros', BooksController.store);

module.exports = router;
