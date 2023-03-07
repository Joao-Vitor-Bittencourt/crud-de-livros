const { Router } = require('express');
const BooksController = require('./app/controllers/BooksController');


const router = Router();

router.get('/livros', BooksController.index);
router.get('/livros/:id', BooksController.show);
router.post('/livros', BooksController.store);
router.put('/livros/:id', BooksController.update);
router.delete('livros/:id', BooksController.delete);

module.exports = router;
