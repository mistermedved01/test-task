# Используем официальный образ Node.js в качестве базового
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json ./
RUN npm install

# Копируем исходный код
COPY . .

# Указываем переменную окружения для запуска
ENV NODE_ENV=production

# Открываем порт 8000
EXPOSE 8000

# Запускаем приложение
CMD ["node", "app.js"]