function vacation(group, type, day) {

  let pricePerDay = 0;


  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          pricePerDay = 8.45;
          break;
        case "Saturday":
          pricePerDay = 9.8;
          break;
        case "Sunday":
          pricePerDay = 10.46;
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          pricePerDay = 10.9;
          break;
        case "Saturday":
          pricePerDay = 15.6;
          break;
        case "Sunday":
          pricePerDay = 16;
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          pricePerDay = 15;
          break;
        case "Saturday":
          pricePerDay = 20;
          break;
        case "Sunday":
          pricePerDay = 22.5;
          break;
      }
      break;
}

let totalPrice = pricePerDay*group;

  if(type === "Students" && group>=30){
    totalPrice = totalPrice*0.85;
  }

  if(type === "Business" && group>=100){
    totalPrice = totalPrice-(10*pricePerDay);
  }

  if(type === "Regular" && group>=10 && group<=20){
    totalPrice = totalPrice*0.95;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`)
}




vacation(40,
    "Regular",
    "Saturday");
