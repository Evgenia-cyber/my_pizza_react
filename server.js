const jsonServer = require('json-server'); //подключаем json-server
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json'); //указываем, где находится база данных
const middlewares = jsonServer.defaults({
  static: './build',
}); //указываем папку с файлами проекта

const PORT = process.env.PORT || 3001; //для локального сервера будет использоваться порт 3001

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log('Server is running');
}); //запускаем сервер
