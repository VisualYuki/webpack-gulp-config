# Gulp Webpack config

## Обязательно

### 1. Установить node_modules

```
$ npm install 
```

### 2. Получить файлы с плагинами для css и js из node_modules

```
$ gulp getLib 
```

## Опции  
### 1. Запуск сервера для разработки и отслеживания файлов (development mode)

```
$ gulp dev
```

### 2. Очистка папки dist и полная компиляцией всех файлов из папки src в dist (production mode)

```
$ gulp build 
```

## Особенности

1. За less(css) & pug (html) отвечает gulp
2. За js отвечает webpack
 

