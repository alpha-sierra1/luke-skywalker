function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function compose(f, g) {
  return function (x, y) {
    return f(g(x, y));
  };
}

const addThenMultiply = compose(multiply, add);
console.log(addThenMultiply(2, 3));

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function square(x) {
  return x * x;
}

function compose(f, g, h) {
  return function (x, y) {
    return f(g(h(x, y)));
  };
}

const addThenMultiplyThenSquare = compose(square, multiply, add);
console.log(addThenMultiplyThenSquare(2, 3));
