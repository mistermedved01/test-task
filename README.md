# Тестовое задание на вакансию стажер DevOps
## 1. Ansible playbook
Необходимо написать Ansible playbook, который выполняет на хосте следующие действия:

- создает нового пользователя brickdev с паролем pass
- разрешает на хосте авторизацию через ssh по ключу
- запрещает логин по ssh от пользователя root
- копирует предоставленный публичный ключ для пользователя brickdev

Плейбук должен выполняться относительно чистого дистрибутива ОС Debian 12. Для написания и проверки плейбука можно локально развернуть VM с помощью любого удобного инструмента виртуализации (VirtualBox, VmWare Fusion, VmWare Fusion Player, Hyper-V, ...)

Публичный ключ для публикации на хост:

```bash
ssh-rsa AAAAB3NzaC1yc2EAAAADA....
```
## 2. Web приложение на NodeJS
Приложение
Требуется написать простое веб-приложение на NodeJS, которое слушает входящие соединения на порту 8000 и предоставляет HTTP API, в котором реализовано 3 метода:

- GET /hostname - при запросе на этот метод приложение отдает имя хоста, на котором запущено приложение
- GET /author - возвращает значение переменной окружения $AUTHOR, в которой задано имя или никнейм человека, выполняющего это задание
- GET /id - возвращает значение переменной окружения $UUID, содержащее любую произвольную строку-идентификатор в формате uuid

**Dockerfile**

Необходимо написать Dockerfile для полученного приложения в соответствии с принятыми в сообществе best-practice.

Полученный скрипт и Dockerfile к нему положить в папку /app

**Docker Compose**

Далее необходимо написать docker-compose.yml для запуска приложения с 3 репликами. Реализовать health checks. В переменную UUID должен подставляться номер реплики, в котором запущено приложение.