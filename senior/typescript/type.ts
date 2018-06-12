//boolean

let isCool: boolean = true;

let age: number = 56;

let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm OK ${age}`;

let pets: string[] = ['cat', 'dog', 'shit'];
let pets2: Array<string> = ['1', 'stuff'];

let wizard: object = {
  a: 'john'
};

let meh: undefined = undefined;
let no: null = null;

// tuple
let basket: [string, number];
basket = ['ass', 5];

//enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}

let sizeName: string = Size[2];

let anything: any = 'asdasdasdasd';
anything = basket;

//void
let sing = (): void => {
  console.log('asdasd');
};

//never
let error = () => {
  throw Error('oops');
};

//interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('fight');
};

//type assertions, overrides types
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

//function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log('hi');
};

//class
class Animal {
  private sing: string = 'asdasd';
  constructor(sound: string) {
    this.sing = sound;
  }
  greet() {
    return `hello ${this.sing}`;
  }
}

let lion = new Animal('rarw');

lion.greet();

// Union
let confused: string | number | boolean = true;

let x: number = 4;
x = 'hello';
