function kingDjoser (baseWidth, increment){

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let count = 0;
    let steps = 0;

    for (let width = baseWidth; width >= 1; width -= 2) {
        steps++;
        if (width == 1 || width == 2) {
            let gold = (width * width) * increment;
            totalGold += gold;
            break;
        }
 
        let stone = (width - 2) * (width - 2) * increment;
        totalStone += stone;
        let decorative = ((width * 4) - 4) * increment;
        count++;
        if (count == 5) {
            totalLapis += decorative;
            count = 0;
        } else {
            totalMarble += decorative;
        }
        
    }
    let height = steps * increment;
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
 
}

kingDjoser (11,1)