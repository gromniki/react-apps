// let, const
// ----------
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
	console.log(i);
  }, i * 100);
}
// Выведет 3, потом 3, и ещё раз 3, так как var создаётся в глобальной области видимости
// существует всего один адрес в памяти, где существует значение этой маленькой переменной i, соответственно
// через 100 мс, когда будет выводиться значение первый раз, значение i уже будет равно 3, потому что к тому
// моменту цикл закончит свою работу. Через 200 мс функция запустит значение из того же места в памяти

// Arrow-функции
// ----------

function square(x) {
  return x * x;
}

const sq0 = (x) => x * x; // преобразовали в стрелочную функцию.
// Если аргумент один, то скобки можно опустить

const sq1 = (x) => {
  return x * x
}; // если нужно написать кода много, то нужно обязательно поставить фигурные скобки и return

Примеры:

const arr = ['1', '3', '2', '4'];

const res = arr
  .map((el) => parseInt(el))
  .filter((num) => num % 2)
  .reduce((max, value) => Math.max(max, value), 0);
  
console.log(res);

---
const greeter = {
  greet: function (name) {
    console.log('Hello', name);
  },

  greetAll: function (names) {
    names.forEach(function(name) {
      this.greet(name);
    });
  }
};

greeter.greetAll(['Bob', 'Mark', 'Pete']);
// при вызове потеряется this, чтобы этого избежать, нужно применить
// стрелочную функцию в методе forEach

// Особенность функции стрелки: Если нужно создавать экземпляр класса, то функция-стрелки
// вызовет ошибку. То есть нет свойства .prototype, поэтому не могут вызываться с new

// Параметры по умолчанию (Default Parameters)
// ----------
• Устанавливаются, если не передать значение (или передать undefined)
• Чаще всего идут последними в списке
• Могут иметь любой тип

function fetchOrders (count = 10, start = 3) { // значения по умолчанию
  console.log('Getting', count, 'orders starting from', start);
}

fetchOrders();

// можно передавать даже объекты
function findProducts (opts = { minPrice: 10, maxPrice: 20 }) {
  console.log(opts);
}

findProducts();


// Rest parameter (из чисел в массив)
// ----------
• всегда массив (может быть пустым)
• получает аргументы, которые не были присвоены обычным параметрам
• обязан идти последним аргументом
• максимум один rest-параметр в функции

function max() {
  // pseudo-array
  var numbers = Array.prototype.slice.call(arguments);
}
// данный пример можно решить другим способом

function max(a, b, ...numbers) {
  console.log(numbers);  
}

max(1, 3, 4, 7);

// Spread operator (из массива в числа)
// ----------
• разворачивает массив, превращая его в список аргументов

const arr = [1, 3, 4];

const res = Math.max( ... arr);
console.log(res);

---
const array1 = [1, 3, 4];
const array2 = [4, 3, 8];

const result = Math.max(...array1, ...array2);
console.log(result);

---
const array1 = [1, 3, 4];
const array2 = [4, 3, 8];

const shallowCopy = [...array1, ...array2, 42];
// shallowCopy - создание нового массива, но все элементы те же, что и были

console.log(shallowCopy);

// Destructuring - Деструктуризация объектов
// ----------
• const { name, age } = person;
• упрощает получение свойств из объектов
• поддерживается вложенность и значения по умолчанию
• работает с параметрами функций
• поддерживает rest element

const person = {
  firstName: 'Roman',
  lastName: 'Golubev',
  age: 27
};

// раньше делали так
const firstName = person.firstName;
const lastName = person.lastName;

// с методом деструктуризации делают так
const { firstName, lastName } = person;

console.log(firstName, lastName);


// если сложнее, то
const person = {
  name: {
    first: 'Roman',
    last: 'Golubev'
  },
  age: 27,
  role: admin
};

const { name: { first, last} } = person;
console.log(first, last);

// а с неймингом лучше так делать
const { name: { first: firstName, last: lastName} } = person;
console.log(firstName, lastName);

// значение по умолчанию
// если не присвоено никакое значение, то выведется user
const { role = 'user ' } = person;
console.log(role);

// если свойство по умолчанию вложенное, то такая техника не работает
const { permissions: {role = 'user ' } } = person;

// нужно немного по-другому
const { permissions: {role = 'user'} = {} } = person;

// самое полезное в деструктуризации
function connect({
  host = 'localhost',
  port = 12345,
  user = 'guest' } = {}) {
  console.log('user:', user, 'port:', port, 'host:', host);
}

connect();

// rest element
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak'
};

const { duck, ...otherAnimals } = dict;

console.log(otherAnimals);


// Array Destructuring - Деструктуризация массивов
// ----------
• const [a, ,b] = [1, 2, 3]
• поддерживает всё те же возможности, что и объекты
• можно пропускать значения
• можно использовать синтаксис деструктуризации для массивов и объектов в одном выражении

const fib = [1, 1, 2, 3, 5, 8, 13];

const [, a, , b] = fib;

console.log(a, b); // 1 3 (так как 1 и 3 пропустили)

// в многомерном массиве
const line = [[10, 17], [14, 7]];

const [ [p1x, p1y], [p2x, p2y] ] = line;

console.log(p1x, p1y, p2x, p2y);

// с параметрами по умолчанию
const people = ['Chris', 'Sandra'];

const [a, b, c = 'guest'] = people;

// с rest параметром
const people = ['Chris', 'Sandra', 'Bob'];

const [a, ...others] = people;
console.log(others);

---
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak'
};

// как разобрать эту структуру данных, чтобы найти все ключи, у которых одинаковое значение?

const resDict = Object.entries(dict) // метод принимает массив и возвращает двухмерный массив
  .filter((arr) => arr[1] === 'squeak'); // достаем все нужные элементы
  
// рефакторним
const resDict = Object.entries(dict)
  .filter(([, value]) => value === 'squeak')
  .map(([key]) => key); // первый элемент запишем и вернём обратно

console.log(resDict);

// пример посложнее
const shape = {
  type: 'segment',
  coordinates: {
    start: [10, 17],
    end: [14, 7]
  }
};

const { coordinates: { start: [startX, startY], end: [endX, endY] }  } = shape;

console.log(startX, startY, endX, endY);

// Template Literals
// ----------
• const s = `My name is ${getName()}`;
• поддерживают выражения, вызовы функций
• поддреживают перенос строки
• результат – обычная стока (не новый тип)

const user = 'Bob';
const num = 17;
const txt = 'Hello, ' + user + ' you have ' + num + ' letters in your inbox';

// но лучше использовать Template Literals с кавычками backticks
const txt2 = `Hello, ${user} you have ${num} letters in your inbox`;

console.log(txt);

// можно даже выводить функции внутри фигурных скобок
const dateNow = `Now is ${Date.now()}`;

// многострочные
const items = ['tea', 'coffee'];

const templateHtml = `
  <ul>
    <li>${items[0]}</li>
	<li>${items[1]}</li>
  </ul>
`;

console.log(templateHtml);


// Objects
// ----------
• const a = {x, y};
• const a = {sayHi() { ... } };
• const a = { [dynamicKey]: value};
• const res = Object.assign(dest, src1, src2 ...);

const x = 10;
const y = 30;

// по старинке
const point = {
  x: x,
  y: y,
  
  draw: function(ctx) {
    // ...
  }
};

// новый синтаксис
const p = {
  x,
  y,
  draw(ctx) {
    //
  }
};

// создание ключей вычисляемых динамически - computed properties
const prefix = '_blah_';

const data = {
  [prefix + 'name']: 'Bob',
  [prefix + 'age']: 23
};

console.log(data);

// копирование и соединение
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'  
};

const opts = {
  user: 'John',
  password: 'utopia'
};

Object.assign(defaults, opts);
// соединяет и заменяет первый объект. Чтобы этого не было нужно
// первым аргументом поставить пустой объект
const resDef = Object.assign({}, defaults, opts);
// Метод assign удобно использовать для поверхностных копий (shallowCopy)

console.log(resDef);

// 
const person = {
  name: 'Roma',
  friends: ['Igor', 'Mira']
};

const shallowCopyPerson = Object.assign({}, person);

console.log(shallowCopyPerson);


// Spread operator fot Objects
// ----------
• const a = { ...defaults, ...opts};
• разворачивает объект, превращая его в список свойств
• можно комбинировать с любым другим синтаксисом создания объектов

// Еще более круче
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'  
};

const opts = {
  user: 'John',
  password: 'utopia'
};

const res = { ...defaults, ...opts};

// добавление новых свойств
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'  
};

const opts = {
  user: 'John',
  password: 'utopia'
};

const port = 8080;
const res = {
  ...defaults,
  ...opts,
  port,
  connect() {
  
  }
};


// Prototypes
// ----------
Хранят "общие" методы объектов.
3 способа создать связь "объект-прототип"

1. Object.setPrototypeOf(obj, proto);
2. const obj = Object.create(proto);
3. const obj = new Something();
(объет Something.prototype станет прототипом obj)

const dog = {
  name: 'dog',
  voice: 'woof',
  say: function() {
    console.log(this.name, 'goes', this.voice);
  }
};

const cat = {
  name: 'cat',
  voice: 'meow',
  say: function() {
    console.log(this.name, 'goes', this.voice);
  }
};

dog.say();
cat.say();

// рефакторим
const animal = {
  say: function() {
    console.log(this.name, 'goes', this.voice);
  }
};

const dog = {
  name: 'dog',
  voice: 'woof',
};

const cat = {
  name: 'cat',
  voice: 'meow',
};
// при вызове сработает ошибка, так как ни один объект не знает про // метод say()

1. 
// один из вариантов связи,
// но этот метод плохо сказывается на производительности нашего
// приложения. Поэтому его лучше не использовать вообще
Object.setPrototypeOf(cat, animal); // ES6

2.
// Надо использовать Object.create()
const dog = Object.create(animal); // создаём пустой объект с прототипом animal
dog.name = 'dog';
dog.voice = 'woof';

dog.say();

// А теперь рефакторним
const createAnimal = function(name, voice) {
  const result = Object.create(animal);
  result.name = name;
  result.voice = voice;
  return result;
}

const dog = createAnimal('dog', 'woof');

3.
// И снова рефакторним и сделаем код лучше и чище
const Animal = function(name, voice) {
  // убрали метод создания пустого объекта, т.к. с ключевым словом new он не нужен
  this.name = name; // вместо result используем this
  this.voice = voice;
  // return не нужен тоже
}

Animal.prototype.say = function() {
  console.log(this.name, 'goes', this.voice);
}; // убираем объект animal и приводим к такой конструкции

const dog = new Animal('dog', 'woof');

// создание объекта без прототипа
const obj = Object.create(null);


// Classes (классы)
// ----------
• являются "синтаксическим сахаром"
• методы добавляются в прототип
constructor() - функция-конструктор
super() - вызов супер-конструктора
super.foo() - вызов метода супер-класса


class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }
  
  say() {
    console.log(this.name, 'goes', this.voice);
  }
};

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
  constructor(name, voice, canFly) {
    super(name, voice); // передадим явно значения 
	this.canFly = canFly;
  }
  
  say() {
    console.log('Birds don\'t like to talk'); // переопределяем метод say у Animal
  }
}
// Если мы наследуем класс, то нам обязательно нужно вызвать super конструктор до того, как мы в первый раз используем this

const duck = new Bird('Duck', 'quack', true);
duck.say();


// Class properties (свойства классов)
// ----------
• Инициализация полей в теле класса
• Функции в теле класса - привязаны к объекту
• Статические поля
• Статические методы


class Counter {
  count = 0;
  
  inc = () => {
    this.count++;
	console.log(this.count);
  }
};

const cnt = new Counter();
console.log();
cnt.inc();
setTimeout(cnt.inc, 1000);

// нововведения со словом static
// статические свойства - это свойства, которые принадлежат классу, а не конкретным объектам. Обычно используются, чтобы логически формировать функции
class Counter {
  count = 0;
  
  inc = () => {
    this.count += Counter.incStep;
	console.log(this.count);
  }
  
  static incStep = 2;
  
  static incrementAll = function(arr) {
    arr.forEach((c) => c.inc());
  };
};

Counter.incrementAll([]);

// рефакторнем под ES6
class Counter {
  constructor() {
    this.count = 0;
	this.increment = () => {
      this.count += Counter.incStep;	  
    }
  }
};

Counter.incStep = 2;
Counter.incrementAll = function(arr) {
  arr.forEach((c) => c.inc());
};



