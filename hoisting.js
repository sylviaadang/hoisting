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

// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// prediction
var genre;
function rewind() {
    var genre;
    genre = 'rock';
    console.log(genre) // logs rock
    genre = 'r&b';
    console.log(genre) // logs r&b
}
console.log(genre) //undefined
genre = 'disco';
rewind()
console.log(genre) // logs r&b


// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// prediction
function learn() {
    var dojo;
    dojo = 'seattle';
    console.log(dojo) // logs seattle
    dojo = 'burbank';
    consolelog(dojo) // logs burbank
}
dojo = 'san jose';
console.log(dojo) // logs san jose

learn();
console.log(dojo) // logs burbank
