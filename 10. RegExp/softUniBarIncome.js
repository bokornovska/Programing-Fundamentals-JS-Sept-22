function softUniBarIncome (input){

    let totalSum = 0;
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.?[0-9]*)\$/gm

    let text = input.join(`-`);
    let current = pattern.exec(text);

    while(current){
        let currentPrice = current.groups.count*current.groups.price;

        console.log(`${current.groups.customer}: ${current.groups.product} - ${currentPrice.toFixed(2)}`);

        totalSum+=currentPrice;

        current = pattern.exec(text)
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`)
}


// %(?<customer>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*(?<price>\d+\.\d+)?\$
softUniBarIncome([`%InvalidName%<Croissant>|2|10.3$
    %Peter%<Gum>1.3$
    %Maria%<Cola>|1|2.4
    %Valid%<Valid>valid|10|valid20$
    end of shift`])