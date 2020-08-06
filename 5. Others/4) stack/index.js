/*
  Задача
  Написать стак стек в котором есть следующие методы
  push - добавляет элимент в конец стека
  pop - возвращяет удаляет последний элемент из стека, если стек уже пустой генерирует ошибку с ссобщением: "Stack is empty!"
  isEmpty - проверяет является ли стек пустым
  print - выводит стек в формате
  И имеет свойство:
  size - количество элиментов в списке
  Пример кода
  const stack = new Stack();
  stack.push(1);
  stack.print() // [1]
  stack.pop().isEmpty(); // true
  stack.pop(); // error
  stack.push(2).push(3).pop()
  stack.push(10).push(14).pop().print() // "[2, 10]"
 */

class Stack {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }

    push(a) {
        this.arr.push(a);
        this.size++;
        return this;
    }

    pop() {
        if (this.arr.length !== 0) {
            this.arr.pop();
            this.size--;
            return this;
        }
        throw new Error("Stack is empty!")
    }

    print() {
        return `[${this.arr.join(", ")}]`;
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}

window.Stack = Stack;

export default Stack;
