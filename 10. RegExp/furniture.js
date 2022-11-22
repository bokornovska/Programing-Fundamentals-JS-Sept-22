function furniture(input){

    let text = input.join(` `);
    // console.log(text);

    let furnitureArray = [];

    let totalSpendMoney = 0;
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;
    let valid;

    while((valid = pattern.exec(text)) !== null){
        
        let validName = valid.groups.furniture;
        let validPrice = Number(valid.groups[`price`]);
        let validQuontity = Number(valid.groups[`quantity`]);

        furnitureArray.push(validName);
        totalSpendMoney += (validPrice*validQuontity);

        
    }
    console.log(`Bought furniture:`);
    furnitureArray.forEach(x => console.log(x));
    console.log(`Total money spend: ${totalSpendMoney.toFixed(2)}`)
}

furniture(['>>Sofa<<312.23!3','>>TV<<300!5','>Invalid<<!5','Purchase']);