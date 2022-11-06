function wordsTracker(data) {
  let result = new Map();

  let words = data.shift().split(` `);

  for (let word of words) {
    result.set(word, 0);
}

for(let word of data){
    if(result.has(word)){
        let oldVelue = result.get(word);
        result.set(word,oldVelue+1);
    }
}
let sortResult = Array.from(result.entries()).sort(([keyA, velueA],[keyB, velueB])=>{
    return velueB - velueA
});
for(let[key, velue] of sortResult){
    console.log(`${key} - ${velue}`)
}
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
