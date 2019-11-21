# My first Todo application on React

### 1. Создание пустого проекта
• create-react-app создает структуру проекта
• src/index.js – главный JS файл
• public/index.html – HTML шаблон

## 2. React элементы
const a = <h1>Hi</h1>;

• Создаются при помощи JSX
• Легковесные объекты - Virtual DOM
• ReactDOM.render() превращает React элементы в обычные браузерные DOM элементы и рендерит их на странице

## 3. React компоненты
Компоненты – это независимые блоки пользовательского интерфейса, которые могут иметь свое собственное поведение

const Header = () => {
  return <h1>Hi</h1>;
};

• Функции, которые возвращают React элемент должны начинаться с большой буквы
• Имя затем можно использовать в JSX как будто это HTML tag

To learn React, check out the [React documentation](https://reactjs.org/).