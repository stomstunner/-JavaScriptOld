// here we use the let keyword == in the let keyword we can store the all kinds of values its line tha data types
console.log('Namaste duniya im ujjwal');


// let usecase
let a = true;
console.log(a);

// there are two types for initilizing the variable 1st one is let and the 2nd one is the var
// but the main diffrence is that in scope 
// let me local varbale store ke liye use hota hai
// and var me global variable store hota hai

let b=10;
console.log(b);
 b=20;
console.log(b);

// we cannot redefine the variable with the use of the let keywords like baar baar ek hi variable ko 2 baar b ko let me nahi daal sakte hai


var c = 30;
console.log(c);
c = 40; // we can use the var many time matab ham bah=ut time bhi intiilize kar sakte hai 
console.log(c);


// here we see the const in the js === matlab ki aissi values jo kabhi change nahi hota hai

const num = 59;
console.log(num);
// now we cannot change the values of the nums becuse it a constsnt values

let d;
console.log(d);//in the js there is no garbage value comes in the  output ...the console sowes the undefined values

// here we see the dynamic typing ki pahle ek hi variable me uske value ko ham number me dal denge fir usko koi string bhi daal denge toh bhi cahl jayega ek hi variable me

let lastName = 20;
console.log(lastName);
// now we print the name
lastName ='ujjwal';
console.log(lastName);


//==============================================================================
// here we learn about the reffrence types --objects array functions
//object = can be anything jisme ki hamre pass koi property hogi aur uska behaviour hoga  
// person is a object usme hoga uska property like name age
/*
let person{
    firstName: 'Ujjwal';
    age:20;
}

for accessing it we have 2 types first one is the dot method and 2nd one is the bracket method
    person.age;
    person['age']

*/

//==============================================================================
/* 
here we see the concept of array in js 
// the data structure used to contain  a list of items
// let name = ['ujjwal','nirmal','prince'];
    indexing =    0          1        2

    for accessing we can write same as the in the c or c++
    name[0]; it means ujjwal

    we can modify or update the value
    name[2] = 'abhijeet';
    or
    name[1] = 30;
*/
//==============================================================================
/*
here we see the operators 
1> arithmetic operators

+ addition
- subtraction
* multiplication
/ division
% modulos or remainder
** used for exponents (x ki power y == x**y)

*/
//==============================================================================

// here we see the incerement and the decrement of the valien  in the pre and post order

// ++x ka matlab hai pre incerement  
// preincrement ka matlab hota hai 
 // firstly increse the value and secondly use the value

 let increment = 20;
 console.log(++increment);
//==============================================================================

// x++ ka matlab hai post incerement  
// post increment ka matlab hota hai 
 // firstly use the value the value and secondly increse the value

 let postInc = 20;
 console.log(postInc++);
 console.log(postInc);

//==============================================================================

/*

here we see the comparisaion opertion jiska ki answer aata hai ya toh true ya toh false
*/
console.log(2>3);
console.log(3>2);
console.log(34<=2);

//===============================================================

// in the js we use the three times=== for equlity or we can say a strict equality
console.log(3===4);
console.log(4===4);

// here we see the diffrence btw the loose equality and strict equaility
// loose equality me ham bass value ko hi match karwate hai but in case of the strict equality we match the data and the values

// loose equaility
// let a = 1;
// let b = '1';
//  a==b 
// this give us true becaue here the value is same 1==1 

// a===b
// this gives us a flase because the value is same but the data is diffrent because the 1st one is a number and 2nd one is string that why in case of strict equality there is a false

// ternary operators

let age=17;
// age=30;
let vote = (age >= 18) ? 'Yes Vote' : 'No Vote';

console.log(vote);

// non boolean values in logical operator 
// here we check the all logical opertor with the non boolean value 
// AND && matabh sab condition true hone chaiye
// OR || koi sa bhi 1 contion true hona chaiye
// NOT ! true ko false bana denge aur false ko true bana denge

// in non boolean there is a concept of falsey and truty
// falsey :- 
// undefined 
// NULL
//  0 
// flase 
// ''
// NaN (not a number)

// truthy me anything that is not present in the falsey

// eg truth || false = true
// false || 5 = 5 bease 5 is not presen tin the falsey
// false || 'ujjwal' = ujjwal beacuse it in not present in the falsey
// false||5||2 = 5 beacaue in the OR there is a concept of short circutuing matlab1 ager hame true mil jaye toh aage ham check nahi karte hai 

// now we  learn about the if else statement 
// lets write a code
let marks = 89;
if(marks >= 90){
    console.log('A');
}
else if(marks >= 80){
    console.log('B');
}
else if(marks >= 70){
    console.log('C');
}
else{
    console.log('Fail');
}

// here we see the switch statements
// lets code
let m = 0;
switch(m){
    case 0: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default : console.log('NONE');
}

// lets see the for loop
for(let i =0;i<=4;i++){
    console.log(i);
}//the answer will be  0 1 2 3 4

for(let i = 0;i<=5;i++){
    console.log('Ujjwal ' + i);
}

// lets study about the while loop
let u =0;
while(u<=5){
    console.log(u);
    u++;
}

console.log('Ujjwal');

// lets see the do while loop
let  p =0;
do{
    console.log(p);
    p++;
}while(p<10);