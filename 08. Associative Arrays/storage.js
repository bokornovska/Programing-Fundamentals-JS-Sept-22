function storage(data){

    let result = new Map();

    for(let line of data){
        let [product, quantity] = line.split(` `);

        if(result.has(product)){
            let oldQuantity = Number(result.get(product));
            result.set(product, oldQuantity+Number(quantity));
        }else{
            result.set(product, Number(quantity))
        }
    }
    for (let [key, velue] of result) {
        
        console.log(`${key} -> ${velue}`)
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])