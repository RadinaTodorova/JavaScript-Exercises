function cats(arrayInput) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
  }
  for (let index = 0; index < arrayInput.length; index++) {
    let catName = arrayInput[index].split(" ")[0];
    let catAge = arrayInput[index].split(" ")[1];

    let myCat = new Cat(catName, catAge);
    myCat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
