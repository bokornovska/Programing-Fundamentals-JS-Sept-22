// function shoppingList(array) {
//   let currentList = array.shift().split(`!`);

//   for (let i = 0; i < array.length; i++) {
//     let command = array.slice()[i].split(" ");
//     let importance = command[0];
//     let product = command[1];
//     let newProduct = command[2];

//     switch (importance) {
//       case `Go`:
//         break;
//       case `Urgent`:
//         if (!currentList.includes(product)) {
//           currentList.unshift(product);
//         }
//         break;
//       case `Unnecessary`:
//         if (currentList.includes(product) == true) {
//           let index = currentList.indexOf(item);
//           currentList.splice(index, 1);
//         }
//         break;
//       case `Correct`:
//         if (currentList.includes(product) == true) {
//           let index = currentList.indexOf(product);
//           currentList[index] = newProduct;
//         }
//         break;
//       case `Rearrange`:
//         if (currentList.includes(product) == true) {
//           let index = currentList.indexOf(product);
//           currentList.splice(index, 1);
//           currentList.push(item);
//         }
//     }
//   }
//   console.log(currentList.join(", "));
// }


function shoppingList(input) {

    let groceries = input.shift().split('!');
    let line = input.shift();
    // console.log(line)

    while (line != 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');

        switch (command) {
            case 'Urgent':
                urgent(groceries, item);
                break;
            case 'Unnecessary':
                unnecessery(groceries, item);
                break;
            case 'Correct':
                correct(groceries, item, newItem);
                break;
            case 'Rearrange':
                rearrange(groceries, item);
                break;
            default: break; // needs to include default case for invalid command('Gosho'), otherwise will not break
        }
        line = input.shift();
    }

    console.log(groceries.join(', '));

    function urgent(list, item) {
        if (list.includes(item) == false) {
            list.unshift(item);
        }
    }

    function unnecessery(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

    function correct(list, item, newItem) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            list[index] = newItem;
        }
    }

    function rearrange(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            // splice and push can not be chained, otherwise will not include removed item at end of list
            list.splice(index, 1);
            list.push(item);
        }
    }
}

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
