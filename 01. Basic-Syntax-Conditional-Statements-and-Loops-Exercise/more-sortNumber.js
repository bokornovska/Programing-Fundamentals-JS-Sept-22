function sortNumber(first, second, third) {
  let maxNum = 0;
  let midNum = 0;
  let minNum = 0;

  if (first > second && first > third) {
    console.log(first);
    if (second > third) {
      console.log(second);
      console.log(third);
    } else {
      console.log(third);
      console.log(second);
    }
  }

  if (second > first && second > third) {
    console.log(second);

    if (first > third) {
      console.log(first);
      console.log(third);
    } else {
      console.log(third);
      console.log(first);
    }
  }

  if(third>first && third>second){
    console.log(third)

    if(first>second){
        console.log(first)
        console.log(second)
    }else{
        console.log(second);
        console.log(first);
    }
  }
}

sortNumber(2,1,3);
