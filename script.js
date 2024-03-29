// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(initialValue) {
  let value = initialValue;

  return {
    add() {
      value++;
    },
    subtract() {
      value--;
    },
    getValue() {
      return value;
    },
  };
}

const counter = createCounter(10);
counter.add(); //11
console.log(counter.getValue());
counter.subtract(); //10
counter.subtract(); //9
console.log(counter.getValue());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const findElementByClass = (elem, className) => {
  let element = null;
  if (Object.values(elem.classList).includes(className)) {
    element = elem;
  } else if (elem.children.length > 0) {
    Object.values(elem.children).find(
      (item) => (element = findElementByClass(item, className))
    );
  }
  return element;
};

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "target1");
console.log("Найден элемент с классом 'target1':", targetElement);

const targetElement2 = findElementByClass(rootElement, "target2");
console.log("Найден элемент с классом 'target2':", targetElement2);

const targetElement3 = findElementByClass(rootElement, "target3");
console.log("Найден элемент с классом 'target3':", targetElement3);
