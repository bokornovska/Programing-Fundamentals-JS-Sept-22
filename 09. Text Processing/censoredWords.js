function censoredWords(sentance, keyWord) {

//   while (sentance.indexOf(keyWord) >= 0) {
//     sentance = sentance.replace(keyWord, "*".repeat(keyWord.length));
//   }

//   console.log(sentance);

let newText = sentance.split(keyWord);
let res = newText.join("*".repeat(keyWord.length));
console.log(res)
}

censoredWords("A small sentence with some words", "small");
