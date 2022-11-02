function cats(array){

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    } 

    for (const line of array) {

        let [name, age] = line.split(` `)
        // let args = line.split(` `);
        // let name = args[0];
        // let age = Number(args[1]);

        let cat = new Cat(name, age);

        cat.meow()

    }
    
}

cats(['Mellow 2', 'Tom 5'])