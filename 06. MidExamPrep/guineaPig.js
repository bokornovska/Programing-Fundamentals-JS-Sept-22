function guineaPig(input){

let food = Number(input[0]*1000);
let hay = Number(input[1]*1000);
let cover = Number(input[2]*1000);
let weight = Number(input[3]*1000);

let days = 1;

while(days<=30){
    food-=300;
    if(days%2 == 0){
        hay-=food*0.05;
    }
    if(days%3 == 0){
        cover-=weight/3
    }
    days++;
}
let foodKg = food / 1000;
let hayKg = hay / 1000;
let coverKg = cover / 1000;

if (foodKg >= 0 && hayKg>= 0 && coverKg>= 0) {
    console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)
    
} else if (foodKg < 0 || hayKg < 0 || coverKg < 0) {
    console.log('Merry must go to the pet store!') 
}

}

guineaPig((["10", "5", "5.2", "1"]))