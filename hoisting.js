// 1.
console.log(hello);
var hello = 'world';

// prediction
var hello;
console.log(hello) // logs undefined
hello = 'world'

//  2.
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// prediction
var needle = 'haystack';
function test() {
    var needle = 'magnet';
    console.log(needle); // logs magnet
}
test()

//  3.
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// prediction
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan); // logs only okay
}

console.log(brendan) // logs super cool


// 4.
var food = 'chicken';
console.log(food); // logs chicken
eat();
function eat() {
    food = 'half-chicken';
    console.log(food); // logs half-chicken
    var food = 'gone';
}


// 5.
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// prediction
var mean;
mean()
console.log(food);
mean = function () {
    var food;
    food = 'chicken';
    console.log(food); // logs chicken
    food = 'fish';
    console.log(food); // logs fish
}

console.log(food) // logs fish
