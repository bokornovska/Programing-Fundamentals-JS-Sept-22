function extractFile (input){

    let extracted = input.split(`\\`);

    let fileName = extracted[extracted.length-1].split(`.`);
    // console.log(fileName);
    let extension = fileName[fileName.length-1];
    // console.log(extension);
    fileName.pop();
    fileName = fileName.join(`.`);
    // console.log(fileName)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`)
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')