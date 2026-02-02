// in this code we see how we can check the code is fast or not like we find the best time for a block of code 

// with the help of performance now mehtod // here we find the diffrence between time perfomentce before the code block and the time taken after the block of code 

// first typ of code non optimized
// const t6 = performance.now();

// for (let i = 0; i <= 100; i++) {
//     let newElement = document.createElement('p');

//     newElement.textContent = 'This is para ' + i;
//     document.body.appendChild(newElement);
// }

// const t7 = performance.now();
// console.log('this took ' + (t7-t6) + 'ms');

// =================================================================

// optimising a bit 
// const t3 = performance.now() ;
// let myDiv = document.createElement('div');

// for(let i =1;i<= 100;i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para ' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log('this took ' + (t4-t3) + 'ms');



// ============reflow & repaint==============================
// reflow me ham jo bhi code likh rekhe hai usko calculate karna page elemnet ko ki kaha pe hamra elemetn aayega ye haar baar caluclate hota hai add of elemtents update,or delete of a elemtents 
// repaint ka maltab hota hai ki hamne toh calculate kar diay ki element kaha aayega per usko dikane ka kaam page pe usko repaint bolte hai     


// best practice is ki ham kam se kam reflow and repaint ko kar paye

// =========document fragment ===================================
// it is a light weight document object 
// toh ham apne kaam ko pahle document frzagment ke add karte jayenge toh ek bhi baar reflow ya repaint nahi hoga per jab ham document fragment ko actual document me append karnege toh bass ek baar hi reflow and 1 baar hi repaint hoga 

// const t1 = performance.now();

// let fragment = document.createDocumentFragment(); // issme ham apne sare para ko one by one dalenge jisse dom update na ho bass facgemt ke woh rahe 

// for(let i =1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
    
//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment); // isse bass ek barr hi reflow and repaint hoga 
// const t2 = performance.now();
// console.log('the time taken is ' + (t2-t1) + "ms");

// ============single Threaded language===========================
// javaScript is a single threaded language matlab ki ek time pe ek hi command run hoga   

// ======================syncronous & asyncronous ==========================
// syncronous = occurinf at the same time == matlab ki hamra fucntion rukega nahi ek baar me sara execute ho jayega

// asyncronous = like evenlistener() jisme ki hame kuch eventType diya hua the jo ki kuch acton karne ke baad hi active hota hai like click pe ya scroll pe 


// ===================eventLoop / callback queue ==============================

// console.log('Hi');

// document.addEventListener('click',function(){
//     console.log('Hello 123');
// });

// console.log('Hey');


// hamare pass ek chiz hoti hai event loop jisme ki hamra code kaisse chalta hai uske baar e samte hai 
// iss code me sam=bse pahle hamra hi wlaa console cahlega woh aayega call stack me aur execute hoga aur hi print ho jayega
// fir hamra fucntion aayega addEventListener jisme ki woh call satack me aayega aur bass browser ko bolega ki mera ye ye fucntion like click karne pe tumko hello 123 print karna hai aur fir woh bhi call satack se chaala jayeha ten hamra 
// at the last console.hey wlaa aayega call satck me aur woh bhi execute ho ke chala jayega

// ager hame click nahi kiya hai toh addEventListener wla fucntion hamea browser me hi rahega per hamre ager 
// click kar diya hai toh hamra fucntion jo hai woh event queue me  chala jaeyga jaha pe pahle queue dekhega ki ager hamra call satck emepty hai toh queue ka fucntion execute karo nahi toh hamra call satck ak sara funtion ya kaam ke pahle karo then hamra queue ka kaam karo per woh bhi one by one that is whay hamra syncronous wla pahle cahlega then hamara asyncronous wlaa cahlega

// asyncronous code = js event loop 

//=======================set timeout ============================

// settimeout fucntion me ham 1 time likhte hai at the end of the fucntion jo ki deitka hai ki hamra fucntion kitne time ke baad cahlega == time hamesha millisecond me hota hai 

setTimeout(function(){
    console.log('Hey There');
},2000);

// 2000 ms minnimum time hai iss code ko run hone ke liye usse jayda bhi lag sakta hai








