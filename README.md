# Getting Started with Create React App

## Необходимые зависимости:

### npm i axios react-router-dom mobx mobx-react-lite

### npm install react-bootstrap bootstrap

### npm i jwt-decode

## Перейти в папку web, запуск:

### `npm start`

## Структура приложения:

* src/component => Навбары, UI-компоненты(кнопки, инпуты и т.д), Модальные окна
* src/http => Взаимодействие с сервером. Axios
* src/pages => Страницы приложения
* src/store => Взаимодействие с MobX
* src/utils => Константы, для указание маршрута

routers => Маршруты к страницам

Для проверки взаимодействия с БД все моковые данные об устройствах нужно удалить в src/store/DeviceStore.js и оставить
пустые массивы

В папке .env, при добавлении новых хостов, обязательно вначале указывать REACT_APP_...