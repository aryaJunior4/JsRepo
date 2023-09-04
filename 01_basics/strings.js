const name = "Shashank-arya"
const repoCount = 20

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String("Shashank")// another way to declare a string
console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4) // doesnt take negative values
console.log(newString)

const anotherString = gameName.slice(-7 , 4)//takes negative values
console.log(anotherString);

const newStringhai = " shashank  "
console.log(newStringhai);
console.log(newStringhai.trim())

const url = "https://shashank.com/shashank%20arya"
console.log(url.replace("%20", "-"))

console.log(url.includes("shashank"))



console.log(gameName.split('-'));
