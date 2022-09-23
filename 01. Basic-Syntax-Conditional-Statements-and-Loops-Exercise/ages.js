function ages(age) {
  let person = 0;
  if (age >= 0 && age <= 2) {
    person = "baby";
  } else if (age > 2 && age <= 13) {
    person = "child";
  } else if (age >= 14 && age <= 19) {
    person = "teenager";
  } else if (age >= 20 && age <= 65) {
    person = "adult";
  } else if (age >= 66) {
    person = "elder";
  }else{
    person = "out of bounds"
  }

  console.log(person)
}

ages(75);
