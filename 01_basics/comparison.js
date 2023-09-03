console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // Comparison check convert null to a number, treating it as 0, thats why null>= 0 is true and null > 0is false avoid these things

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); // strict checking , checks whether both the datatype of same type or not which is not case in ==.
