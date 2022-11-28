function secretChat(input){

    let message = input.shift();
    let currentLine = input.shift();
    let index;
    let substring;

    while(currentLine !== "Reveal"){

        let [command,...arguments] = currentLine.split(":|:");

        switch (command) {

            case "InsertSpace": //"InsertSpace:|:{index}":
            index = arguments[0];
            message = message.slice(0,index) + " " + message.slice(index);
            console.log(message)
            break;

            case "Reverse": // "Reverse:|:{substring}":
            substring = arguments[0];
            if(message.includes(substring)){
                let startIndex = message.indexOf(substring);
                let left = message.slice(0,startIndex);
                let right = message.slice(startIndex+substring.length);
                let reverced = substring.split("").reverse().join("");
                message = left + right + reverced;
                console.log(message)
            }else{
                console.log("error")
            };
            break;
                case "ChangeAll": //"ChangeAll:|:{substring}:|:{replacement}":
                    substring = arguments[0];
                    let replacement = arguments[1];

                    while(message.includes(substring)){

                        message = message.replace(substring, replacement);                
                    }
                    console.log(message)
                break;
        }
        currentLine = input.shift();
    }
    console.log(`You have a new text message: ${message}`    )
}
secretChat ([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])
  console.log("_________________")
secretChat ([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])