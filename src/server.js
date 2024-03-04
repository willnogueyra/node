import http from "http";

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
const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method == "GET" && url == "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method == "POST" && url == "/users") {
    users.push({
      id: 1,
      name: "William",
      email: "wl@examlple.com",
    });
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
