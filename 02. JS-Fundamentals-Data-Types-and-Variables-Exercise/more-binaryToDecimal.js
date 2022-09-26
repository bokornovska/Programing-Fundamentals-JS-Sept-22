function binaryToDecimal(number) {

    let numberAsString = number.toString();
    let splitNumberAsString = numberAsString.split(``); // Разделяме числото на отделни символи чрез .split("") и го получаваме като масив от символи
    let decimal = 0;
    let power = splitNumberAsString.length - 1;    // Степента е равна на дължината на стринга - 1 
    for (let i = 0; i < splitNumberAsString.length; i++) {       // Въртим по елементите на масива
        decimal += Number(splitNumberAsString[i]) * Math.pow(2, power); // Взимаме числото от масива и го преобръщаме към число, след което го умноаважаме по 2 на степента 
        power--; // Намаляме степента всеки път с единица.
   
}
console.log(decimal);
}
binaryToDecimal(00001001)