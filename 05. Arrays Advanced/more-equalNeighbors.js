function equalNeighbors(array) {
  let counter = 0;

  for (let index = 0; index < array.length - 1; index++) {
    for (let j = 1; j < array[index].length; j++) {
      if (array[index][j] == array[index + 1][j]) {
        counter++;
      }

      if (array[index][j] == array[index][j - 1]) {
        counter++;
      }
    }
  }

  for (let index = 0; index < array[array.length - 1].length; index++) {
    if (array[array.length - 1][index] == array[array.length - 1][index + 1]) {
      counter++;
    }
  }

  for (let index = 0; index < array.length - 1; index++) {
    if (array[index][0] == array[index + 1][0]) {
      counter++;
    }
  }

  console.log(counter);
}

equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
