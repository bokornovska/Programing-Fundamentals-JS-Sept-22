function lastDigit(number) {
  let lastDigit2Str = String(number).slice(-1);
  let lastDigit2Num = Number(lastDigit2Str);

  if (lastDigit2Num === 1) {
    console.log("one");
  } else if (lastDigit2Num === 2) {
    console.log("two");
  } else if (lastDigit2Num === 3) {
    console.log("three");
  } else if (lastDigit2Num === 4) {
    console.log("four");
  } else if (lastDigit2Num === 5) {
    console.log("five");
  } else if (lastDigit2Num === 6) {
    console.log("six");
  } else if (lastDigit2Num === 7) {
    console.log("seven");
  } else if (lastDigit2Num === 8) {
    console.log("eight");
  } else if (lastDigit2Num === 9) {
    console.log("nine");
  } else if (lastDigit2Num === 0) {
    console.log("zero");
}
}
lastDigit(1640468651354);
