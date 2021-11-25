export class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hunger = 5;
    thirst = 5;
    energy = 5;
    bladder = 5;
    happy = 5;
    boredom = 5;
    hygiene = 5;

    eat() {
        this.hunger--;
        this.thirst++;
        this.bladder--;
        this.energy++;
    }

    drink() {
        this.thirst--;
        this.bladder--;
        this.energy++;
    }

    play() {
        this.energy--;
        this.hunger--;
        this.thirst--;
        this.boredom--;
        this.happy++;
        this.hygiene--;
    }

    toilet() {
        this.bladder++;
    }

    ignore() {
        this.hunger--;
        this.thirst--;
        this.bladder--;
        this.happy--;
        this.boredom++;
        this.hygiene--;
    }

    sleep() {
        this.energy++;
    }
}

class dog extends animal {
    constructor(name, age){
        super(name, age);
    }

    bark() {
        this.energy-=3;
        this.happy++;
        this.boredom--;
    }

}

class cat extends animal {
    constructor(name, age) {
        super(name, age);
    }

    knead() {
        this.happy+=3;
        this.energy++;
        boredom--;
    }
}

class parrot extends animal {
    constructor(name, age) {
        super(name, age);
    }

    talk() {
        this.happy+=2;
        this.energy-=2;
        boredom--;
    }
}

class rabbit extends animal {
    constructor(name, age) {
        super(name, age);
    }

    dig() {
        this.happy+=3;
        this.boredom-=3;
        this.energy--;
        this.hygiene-2;
    }
}



// let oscar = new cat("Oscar", 2);
// let toby = new dog("Toby", 4);
// let polly = new parrot("Polly", 1);
// let fiver = new rabbit("Fiver", 3);


// oscar.eat();
// oscar.ignore();
// oscar.knead();
// oscar.play();
// oscar.play();
// oscar.drink();
// oscar.toilet();
// oscar.knead();
// console.log(oscar);
// console.log(toby);
// console.log(polly);
// console.log(fiver);

// module.exports = {
//     animal,
//     name: "petSelect",
//     description: "Main class for all Cyber Pets"
// }


