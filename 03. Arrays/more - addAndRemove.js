function addAndRemove (command){

    let newArray = [];
for (let i=0; i<command.length;i++){

if(command[i] === `remove`){
 newArray.pop();
}else if(command[i] === `add`){
    newArray.push(i+1)
}


}

if(newArray.length ==0){
    console.log(`Empty`)
}else{
    console.log(newArray.join(` `))
}
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])