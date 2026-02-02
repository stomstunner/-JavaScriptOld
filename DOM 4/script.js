// lets see the example of sync code

// function sync(){
//     console.log("First");

// }
// sync();

// console.log("Second");

// ye uper wala sab one by one syncronronous me print hoga kyuki hamra js ek single threded ;languase hot ahai matlab ek baar me ham ek hi chiz ko execute karwa sakte hai 

// paralleraly kaam karwane ke liye hai async fucntion ka use karte hai jisme ki ham tab tak rukte hai jab tak ki hamra call stack empty na ho jaye chahe hamra code sabse uper hi na kyu likha rahe 


// =============================================================
// lets see the example of the async code

// setTimeout(function(){
//     console.log("Third");
// },3000);

// function sync(){
//     console.log("First");

// }
// sync();

// console.log("Second");

// yaha pe ek toh hamra code pahle first then second cahlega then 3 second rukne nee baad ham hamra third code cahlenge kyuki async code hamra tab tak rukta hai jab tak ki hamra call stack empty na ho jaye
// =============================================================

// lets make a promise code

// let meraPromise = new Promise(function(resolve,reject){
//     console.log("the first line");
// });
// console.log("the second code");

// ========================================================
// let meraPromise = new Promise(function(resolve,reject){

//     setTimeout(() => {
//         console.log("I'm inside the promise");
//         resolve(2456);
//                          // ye koi bhi number ho sakte hai jsike ki ham bass throw karte hai reslove ko explecitky batane ke liye 
//     }, 3000);
// });
// console.log("I'm outside the promise");
// ========================================================
// let meraPromise = new Promise(function(resolve,reject){

// setTimeout(() => {
//         console.log("I'm inside the promise");
//     reject(new Error('There is an error occur'));
//                      // ye koi bhi number ho sakte hai jsike ki ham bass throw karte hai reslove ko explecitky batane ke liye 
// }, 3000);
// });
// console.log("I'm outside the promise");
// ========================================================

// lets run two async code in which we set the 2 diffrent time then we can see the what is the behaviour of that code

// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('you are inside the 1st promise');
//         resolve(2356);
//     },5000);
// });

// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('you are inside the 2nd promise');
//     },3000);
// });

// // now we code a just a simple sync code then we see which one run the first
// console.log("You are outside the promise");

// ==========================================================

// kisi bhi code me ya toh promise ka fulfilled aayega result aya aayega reject 
// toh fir hamre pass promise ka agela value bhi hota hai then() and catch()
// catch use hota hai error catch karne ke liye reject state ke liye and
// then() use hota hai fullfilled state ke liye  fulfilled ka value / resolve ka value ka use karne ke liye

// lets see the code with an example

// let meraPromise = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("You are inside the promise");
//         resolve(143);
//     },3000);
// });

// meraPromise.then((value) => {
//     let newPara = document.createElement('p');
//     newPara.textContent = `This the vlaue of the resolve is :  ${value}`;
//     document.body.appendChild(newPara);
// });


//===============================================================
// now we see the reject and catch ka kaam 

// let meraPromise2 = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("You are inside the promise");
//         // reject(new Error('There is an error occur'));
//         resolve(1345);
//     },3000);
// });

// // meraPromise2.catch((error) => console.log( error));

// // we can use the then method and we can wrok on both then and catch

// meraPromise2.then((value) => {console.log(value)}, (error) => {console.log(error)});
//===============================================================

// we can use the promise for multiple code to run palrallely

// let newPromise1 = new Promise(function (resolve, reject) {
    //     setTimeout( () => {
        //         console.log("This the 1st program inside");
        //         resolve("Resolve inside the 1st program");
        //     },2000);
        // });
        
        // let newPromise3 = newPromise1.then(() => {   
            //                             // yaha ham ek naya promise satrt kar rahe hai jab hamra promise 1 ka sab kaam ho jaye then()
            //     let newPromise2 = new Promise(function (resolve, reject) {
                //         setTimeout(() => {
                    //             console.log("this is the 2nd promise inside runafter promise1");
                    //             resolve("Resolve inside the promise 2");
                    //         },3000);        
                    //                     // bhale hi iska time chota hai promise 1 se but ye  baad me hi chelga promise 1 ke
//     })

//     return newPromise2;
// });


// newPromise3.then((value) => console.log(value)); // thsi runafter new promise2 
//===============================================================
// here we see the application of get and post method in the fetch api jab ham fetch url ko hi bass use karte hai toh bass get ka use kata hai matlab bass hamre liye data lata hai but jab ham url ke saath saath kuch uska mehoda bhi comma de ke likhte hai post ke saath toh usse apna secret key bhi pass kar sakte hai 

