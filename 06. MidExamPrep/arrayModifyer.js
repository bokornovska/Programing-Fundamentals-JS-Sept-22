function arrayModifier (array){

    let initialValues = array.shift().split(` `).map(Number);

    // console.log(initialValues);

    for(let i = 0;i<array.length;i++){

        let [command, index1, index2] = array[i].split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        // let command = array[0];
        // let index1 = Number(array[1]);
        // let index2 = Number(array[2]);

        if (command === 'swap') {
            let first = initialValues[index1];
            let second = initialValues[index2];
            initialValues[index1] = second;
            initialValues[index2] = first;
        }
        if (command === 'multiply') {
            let first = initialValues[index1];
            let second = initialValues[index2];
            initialValues[index1] = first * second;
        }
        if (command === 'decrease') {
            initialValues = initialValues.map(el => el - 1);

        }

    }
    console.log(initialValues.join(`, `))
}

// "swap {index1} {index2}" takes two elements and swap their places.

// "multiply {index1} {index2}" takes element at the 1st index and multiply 
// it with the element at 2nd index. 
// Save the product at the 1st index.

// "decrease" decreases all elements in the array with 1.

arrayModifier ( ['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])