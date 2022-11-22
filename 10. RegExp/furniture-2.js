function furniture(input) {
  let index = 0;
  let totalMoney = 0;
  let pattern =
    /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;

  console.log(`Bought furniture:`);
  while (input[index] !== "Purchase") {
    let productRow = input[index];
    let validProducts = pattern.exec(productRow);

    while (validProducts !== null) {
      let validName = validProducts.groups.furniture;
      console.log(validName);
      let validPrice = Number(validProducts.groups[`price`]);

      let validQuontity = Number(validProducts.groups[`quantity`]);

      totalMoney += validPrice * validQuontity;

      validProducts = pattern.exec(productRow);
    }

    index++;
  }

  console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
