// in this file we learn about the variables and their meannings
// const is used to make the variables constant
const accountId = 123456

// if we use the keyword let then the value can be overwritten in future
let accountEmail = "ujjwal@google.com"

// now if we are using the var keyword then we have to give them a vlaue in the varChar formate =  string

var accountPassword = "12345"
accountCity = "Muzaffarpur"

// lets try to overwite thing one by one
// accountId  = 134

console.log(accountId);

// lets overwrite all the other variables
accountEmail ="ujjwal@gmail.com"
accountPassword = "12211221"
accountCity ="Ambala"



// now we want ki ham ek hi baar me sare sare varibale ko print karnana chahate hai toh uske liye ham 
// TODO:console.table() ka use kar sakte hai

console.table([accountId, accountEmail,accountPassword,accountCity])

