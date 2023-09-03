const accountId = 101
let accountEmail = "abc@gmail.com"
var accountPassword = "456123"
accountCity = "Jaipur"
let accountState;


//accountId = 1 //not allowed



accountEmail = "ha@gmail.com"
accountPassword = "544646"
accountCity  = "bengaluru"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])