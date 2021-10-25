let calculator = {

  firstNumber: a,
  secondNumber: b,
  
  read(a, b) {
    // this.firstNumber = a;
    // this.secondNumber = b;
    return a, b;
    // this.firstNumber = +prompt("Введите первое число", 0);
    // this.secondNumber = +prompt("Введите второе число", 0);
  },
 
  sum() {
    return this.firstNumber + this.secondNumber;
  },

  mul() {
    return this.firstNumber * this.secondNumber;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
