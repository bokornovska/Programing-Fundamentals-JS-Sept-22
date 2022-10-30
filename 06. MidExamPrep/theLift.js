
function theLift(array) {
  let people = Number(array.shift());

  let wagons = array
    .toString()
    .split(" ")
    .map((x) => Number(x));

  let fullWagon = 0;
  let newWagons = [];


//   console.log(people);
//   console.log(wagons); 
   for (let i = 0; i < wagons.length; i++) {
        let singleWagon = wagons[i];
        let emptySpaces = false;
        let noMorePeople = false;

        if (singleWagon < 4 && people > 0) {
            for (let singleSeats = 0; singleSeats <= 3; singleSeats++) {
                people -= 1;
                singleWagon++;
                wagons[i] = singleWagon;
                // fullWagon = singleWagon;
                // if (people == 0 && singleWagon < 4) {
                if (people == 0 && wagons.some(w => w < 4)) {
                    console.log(`The lift has empty spots!`);
                    emptySpaces = true;
                    break;
                } else if (people == 0) {
                    noMorePeople = true;
                    break;
                }
                if (singleWagon == 4) {
                    break;
                }
            }

            // newWagons.push(fullWagon);
            // wagons[i] = singleWagon;
            if (emptySpaces || noMorePeople) {
                break;
            }
        }
    }
    if (people > 0 && wagons.every(w => w === 4)) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    // console.log(newWagons.join(" "));
    console.log(wagons.join(" "));
}
theLift(["15", "0 0 0 0 0"]);
