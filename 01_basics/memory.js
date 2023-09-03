// Stack
// Heap


// Primitive datatype uses Stack memory - a copy of the variable is given
// Non-Primitive datatype uses Heap memory - Reference of the original value any change will reflect in the original value


let name = "Shashank"
let anotherName = name

anotherName = "Naruto"


console.log(name);
console.log(anotherName);
