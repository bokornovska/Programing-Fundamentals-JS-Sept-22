function blackFlag(array){

    let days = Number(array[0]);
    let plunderPerDay = Number(array[1]);
    let expectedPlunder = Number(array[2]);

    let dayCount = 0;

    let totalPlunder = 0;

    while(dayCount<days){
        totalPlunder+=plunderPerDay;
        dayCount++;

        if(dayCount%3 == 0){
            totalPlunder+=plunderPerDay/2;
        }

        if(dayCount%5 == 0){
            totalPlunder=totalPlunder-totalPlunder*0.30;
        }

    }

  if(totalPlunder>=expectedPlunder){
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
  }else{
    console.log(`Collected only ${(totalPlunder/ expectedPlunder*100).toFixed(2)}% of the plunder.`)
  }

}

blackFlag(["10","20","380"])