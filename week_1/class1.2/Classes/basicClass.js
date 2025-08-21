class Animal {
    constructor( name, legCount, sound){

        this.name = name;
        this.legCount= legCount;
        this.sound= sound;


    }

  makeSound() {

    console.log(`This is a ${this.name} and has ${this.legCount} legs. It makes a ${this.sound}`);
  }


}

let dog = new Animal (`Doggu`,4, `bhow bhow bhow`) ;

dog.makeSound();