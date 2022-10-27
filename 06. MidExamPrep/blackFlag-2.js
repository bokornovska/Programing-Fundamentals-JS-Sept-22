function plunder(input) {
  // Collect input data

  const days = Number(input.shift());
  const dailyGain = Number(input.shift());
  const target = Number(input.shift());

  // variables

  let totalPlunder = 0;

  // loop days

  for (let i = 1; i <= days; i++) {

    totalPlunder+=dailyGain;

    // 3rd day
    if(days%3 === 0){
        totalPlunder+=dailyGain/2;
    }
    // 5th day

    if(i%5 === 0){

        totalPlunder = totalPlunder*0.7;

    }

    
  }

//   print output

if(totalPlunder>=target){
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
}else{
    let percentage = (totalPlunder/target)*100
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
}
}

plunder(["5", "40", "100"]);
plunder(["10","20","380"])
