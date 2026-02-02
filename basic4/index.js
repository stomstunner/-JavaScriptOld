console.log('Ujjwal');

// =================================================

// here we study about the function in js

// function run(){
//     console.log('running');
// }

// // callling/ or invoking of run function
// run();


// =================================================

// there isa concept of hoeisting jimse hamra js ka sara code pahle ham scan karte hai sur usme ka function ko side kar ke program ke sabe top me daal dente hai aur toh haamra uper se niche jab code run hota hai toh hamra function hamesha chal jata hai 

// hoeisting is the process of moving function decleration on top of file

// goodMorning();

// function goodMorning(){
//     console.log('Good Morning');
// }
// =================================================

// now we have function assignmnet
// jisme ham apne function decleration ko ek variable me store kar dete hai

// let stand = function walk(){
//     console.log('Walking');
// }

// ab ager hame function ko call kerna hai toh function ka naam nahi jis variable me hamne usse store kiya hai uske call karna hoga with a function bracket

// stand();

// aur ham iss stand ko function aggignmet ke uper likh denge toh function call nahi haoga becuase ye hoeisting ko support nahi kart hai 

// and we can store this satnd function in the other variable also and e can call that variable as a function

// let slow = stand;

// slow();
// =================================================

// if we have a function aur uska naam ham nahi diye hai aurko hamne assignment fucntion ke jaissa likha hai toh usse ham anonmyous function bolte hai

// let stand = function() {
//     console.log('Walking');
// }
// // ham function ka naam nahi bhi de sakte hai
// stand();
// =================================================


// we know that js is a dynamic language 

// let x = 1;
// x ='a';
// console.log(x);

// toh isme hamne pahle x me ek number ko store kar diya then usi x me ek character ko store kar diya 

// =================================================

// ager ham function banana chaye addition of 2 number

// function sum(a,b){
//     return a+b;
// }

// calling of a function 

// console.log(sum(2,4)); //6


// ab ager ham function ko call karte hai aur usme 1 hi argument denge toh uska answer NaN aayaga matlab not a number

// console.log(sum(1)); //NaN

// and if we give multiple number in arguments then hamra jitne number as a arguments function le sakte hai woh le lega aur baaki ka pata nhi kuch ho jayega aur jitne initial numnber le lega usse hamara answer aa jayega

// console.log(sum(1,3,4,5,6,7,8)); // 1+3 = 4 
// =================================================

// lets see the arguments in the function ke ander jo ki ham jo number ko pass kerte hai function me usko ek objects baha deta hai

// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// };

// sum(1,2,3,4,5,6,7); 

// jab ham yaha se number ko as a argument bejenge toh hamra numnber as a arguments jayeha aur agrumrnt usko apne pass rakh lega 

// aur isse hamre objects bana hua milta hai jime hamra key aur value mapped milta hai key hamra batata hai ki numbering ko aur value woh number hota hai jo ham pass karte hai

// agrumrnt me use tab hota hai jab hamre pass multiple number hai aur hame sabka answer nikalne hai toh uss time ham argumets ka use karte hai 

// kyuki hamra number agruments me jaa ke store ho jata hai as a objets aur usko ham for loop ke help se access kar sakte hai



// function sum(a,b){ // we can take empty the brackets
//     let total = 0;
//     for(let value of arguments){
//         total += value;
//     }
//     return total;
// };

// let ans = sum(1,2,3,4,5,6,7); 
// console.log(ans);


// =================================================

// now we study about the rest operator jisme ki ham apne agrument ko pass kar sakte hai as a array
//  it is just like the spread operator  3 dot ...

// function sum(...args) {
//     console.log(args); // [1, 2, 3, 4, 5, 6, 7, 8]
// };

// sum(1, 2, 3, 4, 5, 6, 7, 8);

// in the case of agrument the agrumnets treat or change to objects but in the rest opertaors methos the argumets change in the array 

// function add(...rest) {//rest operator
//     let total = 0;
//     for (let value of rest) {
//         total += value;
//     }
//     return total;
// };

// let full = add(1, 2, 3);
// console.log(full);

// this is the mehtods for dymnaic function jisme ham multiple number of argument de sakte hai aur uska ander rest operator ki help se laa sakte hai


// =================================================

// if we have 2 argumets written in the function and the last one is a rest operator then the first wala value 1st arguments me jayega aur 2nd  se last tak rest operator me jayega 

// function sum(num , ...rest){
//     console.log(rest);
//     console.log(num);
// }

// sum(1,2,3,4,5,6);

// rest operator likhne ke baad koi bhi operator allowed hi nahi hai


// =================================================

// here we study about the default parameter 
// default parameter is used when we have not the proper argumant ya userne hame koi argumet diya hi nahi toh uss chiz ke liye hai argumet ke kuch value pahle se hi assign kar dete hai jisse ki hame kuch answer toh mile nhai toh argument na hone ke karna hame NaN mil jayega

// function interest ( p = 1000, r = 10 , t = 5){
//     return p*r*t/100;
// }

// console.log(interest(2000,10,8));
// yaha pe ager ham kuch argumet nahi bhi pass karte toh hame kuch na kuch answr jarur mil jata NaN nahi aata output me 

// in the case of the default parameter we hhave a rule ki jab ham kisi bhi agrumrnt ko defalut paramtter bana dete hai toh uske right me sare ko hmare default parameter banana parte hai for example r ko defalut paramter bana diya toh uske baad time t ko bhi default parameter banana parta hai

// hack isme ye hai ki ager hamre pass kam argumete hai pass karne ke liye toh hamra last wala value galat se maap ho jayega toh uske liye ham jab value ko pass karenge toh ham jo vlaue nahi pass karne ke liye uske jagah pe ham default value ka use kar lenge per kaisse woh aisse ki ham undefined ko pass karenge jo ki koi bhi value ko pass nahi karewaye per woh map hoga apne saho wale parameter se aue uska default paramter hi use hoga aur uske aage wala bhi sahi rahega 



// function interest ( p = 1000, r = 10 , t = 5){
//     return p*r*t/100;
// }

// console.log(interest(2000,undefined,8));

// yaha pe hamra undefined pass karne ke wajah se rate ka default paramter use hoga // 1600

// nahi toh undefined pass na karne ke wajah se hamra 8 pass ho jata rate me aur hamra answer 800 aa jata

// =================================================
// function for full Name

// let person = {
//     fname : 'Ujjwal',
//     lname : 'Singh'
// };

// function fullname(){
//     return `${person.fname} ${person.lname}`;
// }

// console.log(fullname())


// the main problem of this function is that this function is the read only fucntion we can`t manipulate the values

// =================================================

// we have getter and setter funtion 
// getter se fetch the value / access properties
// setter se manipulate the value

// let person = {
//     fname : 'Ujjwal',
//     lname : 'Singh',

//     // now we add the getter function jo ki hamre full name ko return karega 

//     get fullname(){
//         return `${person.fname} ${person.lname}`;
//     },

//     set fullname(value){
//         let part  = value.split(' ');
//         this.fname = part[0];
//         this.lname = part[1];
//     }
// };


// // now we call the function getter property and setter property

// console.log(person.fullname);//Ujjwal Kumar
// person.fullname = 'Rahul Kumar';
// console.log(person.fullname);//Rahul Kumar
// =================================================
// now we have the concept of try and catch and throw mehtod jisme ki ham aisse code ko try me daal dete hai jo ki error de sakta hai fir uske ham catch karte haia ur fir ek message throw karte hai uske releted 

// let person = {
//     fname : 'Ujjwal',
//     lname : 'Singh',

//     // now we add the getter function jo ki hamre full name ko return karega 

//     get fullname(){
//         return `${person.fname} ${person.lname}`;
//     },

//     set fullname(value){

//         // ye hamra setter call karne ke baad hi chalega

//         if(typeof value !== String){
//             throw new Error("You Have Not Sent A String");
//         }
//         let part  = value.split(' ');
//         this.fname = part[0];
//         this.lname = part[1];
//     }
// };


// now we call the function getter property and setter property

// console.log(person.fullname);//Ujjwal Kumar


// let assume ki jab ham niche wale me koi number ko assign kar dete hai toh hame error aata hai toh usse bachne ke liye ham try ka use karenge 

// person.fullname = 'Rahul Kumar';
// try{
//     person.fullname = 'nirmal kumar';
// }
// catch(e){
//     // throw
//     alert(e);
// }
// console.log(person.fullname);//Rahul Kumar

// =================================================
// yaha pe ham scope ke baare me dekhnge

// let keywords me hamra scope hota bass in the code block 

// but var keywords se hamra scope hota hai pure function ke ander aur ager function ke ander define nahi hai var toh usse ham pure file me kahi bhi use kar sate hai

// var se ham for loop ya if me kuch define karte hai variable ko toh usse bahar bhi access kar ssakte hai but var hai in the function toh usse bahr use nahi kar sate hai 

// for(var i =0;i<10;i++){
// // in case of let in the i not working
// // but in case of var it is working
// }

// console.log(i); 
// =================================================

// now we see the features of reduce 

let arr = [1,2,3,4,5,6];


// let total = 0;
// for(let value of arr){
//     total += value;
// }
// console.log(total);

// we cacn do that the same code works in reduced form

let total = arr.reduce((accumulator,currentValue) => accumulator + currentValue, 0);

// yaha pe ham reduce ka use kar rahe hai jaha pe hamra accumultor 0 se satrt ho raha hai as a total of the 1st method and the current value act kar rhaa hai as a value of the 1st method and dono +=  ho rhae hai with the help of => arrow operator 

console.log(total);

// =================================================




