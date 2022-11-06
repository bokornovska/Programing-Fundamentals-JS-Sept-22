function oddOccurrences(data) {
  let result = new Map();

  let words = data.split(` `);

  for (let word of words) {
    word = word.toLowerCase()
    if (result.has(word)) {
      oldVelue = result.get(word);
      result.set(word, oldVelue + 1);
    } else {
        result.set(word,1)
    }
  }

  let filterResult = Array.from(result).filter(([key,velue]) =>{
    return velue %2 !==0;
  })
  let buff = ``
  for([key,velue] of filterResult){
    buff+=key + " ";
  }

  console.log(buff)
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
