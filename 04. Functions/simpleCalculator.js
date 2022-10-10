function simpleCalculator(x, y, operator) {
//   let res;

//   switch (operator) {
//     case `multiply`:
//       res = x * y;
//       break;
//     case `divide`:
//       res = x / y;
//       break;
//     case `add`:
//       res = x + y;
//       break;
//     case `subtract`:
//       res = x - y;
//       break;
//   }
//   console.log(res)

let res;
let multiply = (x,y) => x*y;
let divide = (x,y) => x/y;
let add = (x,y) => x+y;
let substract = (x,y) => x-y;

switch (operator) {
        case `multiply`: res = multiply(x,y); break;
        case `divide`:res = divide(x,y);   break;
        case `add`: res = add(x,y);break;
        case `subtract`: res = substract(x,y);break;
      }

      console.log(res)
}

simpleCalculator(5, 5, "multiply");
simpleCalculator(40,    8,    'divide');
simpleCalculator(12,    19,    'add');
simpleCalculator(50,    13,    'subtract');

// Operator can be 'multiply', 'divide', 'add' or 'subtract'.
