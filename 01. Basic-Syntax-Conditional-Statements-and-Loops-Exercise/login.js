function login(input) {
 
    let username = input[0];
    let index = 1;
    let password = input[index];
    password = password.split('').reverse().join('')
    let count = 1;
 
    while (password !== username) {
        console.log(`Incorrect password. Try again.`);
        index++;
        password = input[index];
        password = password.split('').reverse().join('');
        if (count === 3) {
            break;
        }
 
        count++;
        
    }
 
    if (password !== username) {
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }
}






login(['sunny','rainy','cloudy','sunny','not sunny']);