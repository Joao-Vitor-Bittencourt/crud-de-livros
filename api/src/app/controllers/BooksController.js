class BooksController {
  //Nomes convencionais para cada método
  index(request, response) {
    //  Listar todos os registros
    response.send('Listagem de Livros')
  }

  show(request, response) {
    //  Obter um registro
    response.send('Um livro')
  }

  store(request, response) {
    //  Criar novo registro
    response.send('Adicionar livro')
  }

  update(request, response) {
    //  Editar um registro
    response.send('Editar um livro')
  }

  delete(request, response) {
    //  Apagar um registro
    response.send('Listagem de Livros')
  }
}

module.exports = new BooksController
