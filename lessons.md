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

const sq0 = (x) => x * x; // преобразовали в стрелочную функцию. Если аргумент один, то скобки можно опустить
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

// Параметры по-умолчанию (Default Parameters)
// ----------
• Устанавливаются, если не передать значение (или передать undefined)
• Чаще всего идут последними в списке
• Могут иметь любой тип

function fetchOrders (count = 10, start = 3) { // значения по-умолчанию
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

//
