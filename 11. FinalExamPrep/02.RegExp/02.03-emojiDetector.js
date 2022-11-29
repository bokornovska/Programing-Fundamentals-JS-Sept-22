function emojiDetector(input) {
  let string = input.shift();

  let digitPattern = /\d/g;
  let coolThreshold = 1;

  let coolness = digitPattern.exec(string);
  while (coolness) {
    coolThreshold *= coolness;
    coolness = digitPattern.exec(string);
  }
  console.log(`Cool threshold: ${coolThreshold}`);

  let emojiPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
  let coolEmojies = [];
  let sum = 0;
  let count = 0;

  let emojiMatch = emojiPattern.exec(string);

  while (emojiMatch) {
    let emoji = emojiMatch[0];
    let emojiName = emojiMatch.groups.emoji;
    count++;

    let emojiCoolnes = 0;
    for (let i = 0; i < emojiName.length; i++) {
      emojiCoolnes += emojiName.charCodeAt(i);
    }

    if (emojiCoolnes >= coolThreshold) {
      coolEmojies.push(emoji);
    }

    emojiMatch = emojiPattern.exec(string);
  }

  console.log(`${count} emojis found in the text. The cool ones are:`);

  for (emo of coolEmojies) {
    console.log(emo);
  }
}

emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
console.log("____________________");
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
