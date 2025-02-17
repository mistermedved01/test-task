const http = require('http'); //Подключает встроенный модуль http, который используется для создания HTTP-сервера
const os = require('os'); //Подключает встроенный модуль os, который предоставляет информацию об операционной системе.
const { AUTHOR, UUID } = process.env; //Извлекает переменные окружения AUTHOR и UUID, которые передаются в среду выполнения.

const hostname = os.hostname(); //Получает имя хоста текущей машины с помощью метода os.hostname().
const port = 8000; //Определяет порт, на котором будет работать сервер (8000).

const requestListener = (req, res) => { //Функция requestListener будет вызываться при каждом входящем HTTP-запросе. Она принимает два аргумента: req (запрос) res (ответ)
  res.setHeader('Content-Type', 'application/json'); //Устанавливает заголовок Content-Type в application/json, чтобы сервер отвечал в формате JSON.
  
  if (req.method === 'GET' && req.url === '/hostname') { //Проверяет, что метод запроса — GET, а URL — /hostname.
    res.statusCode = 200; 
    res.end(JSON.stringify({ hostname })); //Устанавливает код ответа 200 OK и отправляет JSON-ответ с именем хоста.
  } else if (req.method === 'GET' && req.url === '/author') { //Проверяет, что метод запроса — GET, а URL — /author.
    res.statusCode = 200;
    res.end(JSON.stringify({ author: AUTHOR })); //Возвращает JSON с автором из переменной окружения AUTHOR.
  } else if (req.method === 'GET' && req.url === '/id') { //Проверяет, что метод запроса — GET, а URL — /id.
    res.statusCode = 200;
    res.end(JSON.stringify({ uuid: UUID })); //Возвращает JSON с UUID из переменной окружения UUID.
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' })); //Если запрос не соответствует ни одному из вышеуказанных маршрутов, сервер отвечает 404 Not Found в формате JSON.
  }
};

const server = http.createServer(requestListener); //Создает HTTP-сервер и передает ему обработчик запросов requestListener.

server.listen(port, () => {
  console.log(`Server is running on port ${port}`); //Запускает сервер, который слушает порт 8000, и выводит сообщение в консоль при успешном запуске.
});

//Возвращает имя хоста (/hostname).
//Возвращает имя автора из переменной окружения (/author).
//Возвращает UUID из переменной окружения (/id).
//Для всех остальных маршрутов отвечает 404 Not Found.

//Сервер создается с помощью встроенного модуля http, 
//а запросы обрабатываются в функции requestListener. 
//Функция проверяет метод запроса (GET) и URL, 
//после чего отправляет соответствующий ответ 
//с заголовком Content-Type: application/json