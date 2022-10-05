function reverseInPlace (elements){

    for(let i = 0;i<elements.length/2;i++){
        let tempElement = elements[i];
        elements[i] = elements[elements.length-1-i];
        elements[elements.length-1-i] = tempElement;
    }

    console.log(elements.join(` `))

}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])