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

### 4. JSX
• Позволяет использовать выражения { foo.bar }
• В свойства можно передавать любое значение
• null, undefined, true, false в теле тегов игнорируются (не вызывая ошибок)

• Для HTML аттрибутов в JSX названия должны быть в формате camelCase, но не все.
Пример:
class -> className
for -> htmlFor

disabled === disabled={true}

### 5. Структура React проекта
• Один компонент - один файл
• Помещаем все компоненты в папку components
• Хорошие компоненты – независимые компоненты



---
### Примеры
• создаём первый компонент
• по требованию React называем с большой буквы,
• чтобы при вызове интерпретировать как кастомные компоненты

const TodoList = () => {
  const items = ['Drink water', 'Learn React', 'Build Awesome App 2'];

  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
      <li>{ items[2] }</li>
    </ul>
  );
};

export default TodoList;


To learn React, check out the [React documentation](https://reactjs.org/).