function passwordGenerator(input) {

  let password = (input[0]+input[1]).toLowerCase();
  let key = (input[2]).toUpperCase();
  const vowelLetters = ['a','e','i','o','u'];
  let currentKeyIndex = 0;

  for(let char of password){
    if(vowelLetters.includes(char)){
      password = password.replace(char, key[currentKeyIndex]);
      currentKeyIndex++;
      if(key[currentKeyIndex] === undefined){
        currentKeyIndex = 0;
      }
    }
  }
  let finalPassword = password.split('').reverse().join('')

  console.log(`Your generated password is ${finalPassword}`)
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);

passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);

passwordGenerator([
  "areyousureaboutthisone",
  "notquitebutitrustyou",
  "disturbed",
]);
