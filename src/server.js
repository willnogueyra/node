import http from 'http';

/* 
  - Criar usuarios
  - Listagem de usuarios
  - Edição de usuarios
  - Remoção de usuarios

  ----- // -----
  * HTTP
    - Método HTTP
    - URL

  Métodos HTTP = GET, POST, PUT, PATCH, DELETE
    - GET -> Buscar um recurso do beck-end
    - POST -> Criar um recurso no beck-end
    - PUT -> Atualizar um recurso no back-end
    - PATCH -> Atualizar uma informação unicamente especifica de um recurso no back-end
    - DELETE -> Deletar um recurso no back-end

*/

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method == 'GET' && url == '/users') {
    return res.end('Listagem de usuarios');
  }

  if (method == 'POST' && url == '/users') {
    return res.end('Criação de usuarios')
  }

  return res.end('hello WORLD')


});

server.listen(3333);