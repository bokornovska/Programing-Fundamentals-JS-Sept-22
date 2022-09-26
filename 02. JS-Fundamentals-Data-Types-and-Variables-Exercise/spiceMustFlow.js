function spiceMustFlow(startingYield) {
  let consumedSpice = 0;
  let daysCount = 0;
  let totalExtract = 0;

  while (startingYield >= 100) {
    totalExtract += startingYield - 26;

    if (startingYield >= 26) {
    startingYield -= 10;

    daysCount++;
    }
  }

  if (startingYield < 100) {
    totalExtract -= 26;
  }

  if (totalExtract < 0) {

    totalExtract = 0;
    
    }

  console.log(daysCount);

  console.log(totalExtract);
}

spiceMustFlow(111);
