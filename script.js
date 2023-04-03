// cek tombol number ketika ditekan
const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    update(currentNumber);
  });
});

// ketika menampilkan ke screen dan update nilai
const screen = document.querySelector('.calculator-screen');

let prevNumber = '';
let calculation = '';
let currentNumber = '0';

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const update = (number) => {
  console.log(number);
  screen.value = number;
};

// ketika memakai operator
const show = document.querySelector('.show');
const operator = document.querySelectorAll('.operator');

operator.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
    show.innerHTML = event.target.value;
  });
});

const inputOperator = (operator) => {
  if (calculation === '') {
    prevNumber = currentNumber;
  }
  calculation = operator;
  currentNumber = '';
};

// ketika hasil perhitungan
const equal = document.querySelector('.equal');

equal.addEventListener('click', () => {
  calculate();
  update(currentNumber);
  show.innerHTML = `Hasilnya :`;
});

const calculate = () => {
  let result = '';
  switch (calculation) {
    case '*':
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;

    default:
      break;
  }
  currentNumber = result;
  calculation = '';
};

// ketika tombol AC diklik
const clear = document.querySelector('.all-clear');

clear.addEventListener('click', () => {
  clearAll();
  update(currentNumber);
  show.innerHTML = 'operator';
});
const clearAll = () => {
  prevNumber = '';
  calculation = '';
  currentNumber = '0';
};

// ketika tombol decimal diklik
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  update(currentNumber);
});
const inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
};

// ketika tombol persen diklik
const percen = document.querySelector('.persen');

percen.addEventListener('click', () => {
  inputPercen(prevNumber);
  update(prevNumber);
  show.innerHTML = 'Hasil %';
});

const inputPercen = (number) => {
  return (prevNumber = number / 100);
};
