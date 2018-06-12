//boolean
var isCool = true;
var age = 56;
var eyeColor = 'brown';
var favoriteQuote = "I'm OK " + age;
var pets = ['cat', 'dog', 'shit'];
var pets2 = ['1', 'stuff'];
var wizard = {
    a: 'john'
};
var meh = undefined;
var no = null;
// tuple
var basket;
basket = ['ass', 5];
//enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var anything = 'asdasdasdasd';
anything = basket;
//void
var sing = function () {
    console.log('asdasd');
};
//never
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('fight');
};
var dog = {};
dog.count;
//function
var fightRobotArmy3 = function (robots) {
    console.log('hi');
};
//class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'asdasd';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('rarw');
lion.greet();
// Union
var confused = true;
var x = 4;
x = 'hello';
