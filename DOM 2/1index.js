
// here we write the code for eventTarget

// document.addEventListener('click', function(){
//     console.log('I clicked on the document');
// });

// =====================================================

// document.addEventListener('click', function(){
//     let content = document.querySelectorAll('h2');
//     content.forEach(function(number){
//         number.style.cssText = 'color:red; background-color: green; font-size: 2rem;'
//     });
// });


// =======we can write the same code with the fucntion on seperate lines 

// function react() {
//     let content = document.querySelectorAll('h2');
//     content.forEach(function (number) {
//         number.style.cssText = 'color:red; background-color: green; font-size: 2rem;'
//     });
// };

// document.addEventListener('click', react);


// document.removeEventListener('click', react);

//  the mezor fayeda of this type of writing that we can remove the eventListener beacue by this method the react pointing to the same fucntion /// fucntion is also a object that is have some address aur usko ek baar addEventListener aur ek bAAR   removeEventListiner me laga diya toh dono jagah ka fucntion toh same hoga but woh same object nahi honge kyuki fucntion bhi ek object hi hota hai

// THATs why we use this method

// ======================phases of an event=================


// now study od phases of an event 

// there are mainly 3 phases of an event 
// 1 = capturing pahse jisme ki hamre kispe listener lagaya hua hai usko dhundata hai aur fir 
// 2 = at target phase jisme ki hamra target milne per woha pe rehta hai aur
// 3 = bubling phase jisme ki jab hamra mil jata hai target uske baad backoff karne har ek uske parent node se hote hue 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
// </head>
// <body>
//     <h1>hello</h1>
// </body>
// </html>

// isme ager hamne h1 pe lagaya hua hai toh pahle html then uske ander body ye sab se hote hue h1 ko capture karege fir target pe jayega aur uske bad backoff karegga yani ki bubbling phase 

// by default hamra event listener hamesha bubbling phase me lagta hai per ham usko capturing phase me bhi laga sakte hai

// ==================useCapture===========================================

// syntax 
// eventTarget.addEventListener(typeof event, listener,useCapture);


// eventtarget me ki ham kispe apan eventlistener lagana cahte hai
// typeof me matlab ki kis type ke event pe hamra listener active ho click scroll etc
// listiner me ham apne functions ko likhte hai 
// then we have the 3red and the most important argument that is usecapture isme ham boolean value ko likte hai true yani ki ham caturing pahse me bhi listner lagaya aur false matab defaut bubble phase me listner lagega



// ===========EventObject====================================
// w can see the whole event that occurs when we trigger that event 

// syntax
// let content = document.querySelector('#wrapper');
// content.addEventListener('click',function(event){
//      console.log(event);
// })


// let content = document.querySelector('#wrapper');
// content.addEventListener('click', function (event) {
//     console.log(event);
// });

// we can write anything in the fucntion argument like ujjwal

// fucntion ke ander event ko as a argument diya jata hai jisse ki ham print karwwa sakte hai

// ========================Preventdefault=======================

// prevent default  me ham tags ya kisis bhi chiz ke default nature ko hata sakte hai 
// syntax
// content.Preventdefault();

// for example


// ab ham sabse pahle jitne bhi angular tag hai usko ham fetch kar ke layenge

// let links = document.querySelectorAll('a');
// let secondLink = links[1];
// secondLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('Hello hi bye bye');
// });



// ===============OptimalCode==============================

// let myDiv = document.createElement('div');
// for(let i =1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent= 'I am ' + i + 'th paragraph';

//     newElement.addEventListener('click',function(event){
//         console.log('I have clicked on para' + i );
//     });
//     myDiv.appendChild(newElement);
// };
// document.body.appendChild(myDiv);
//////////code=====================

// let myDiv = document.createElement('div');
// for(let i =1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent= 'I am ' + i + 'th paragraph';

//     newElement.addEventListener('click',function(event){
//         console.log('I have clicked on para');
//     });
//     myDiv.appendChild(newElement);
// };
// document.body.appendChild(myDiv);

// =============================thoda sa optimal code jisme hamra code ek hi fucntion ko refer karta hai just like the remove linerner method

// let myDiv = document.createElement('div');

// // isse hamra baar baar listiner ko para point nahi karega bass ek hi listerner ko sare para point karenge

// function off(event) {
//     console.log('I have clicked on para');
// };

// for (let i = 1; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'I am ' + i + 'th paragraph';

//     newElement.addEventListener('click', off);
//     myDiv.appendChild(newElement);
// };
// document.body.appendChild(myDiv);

// =======================thoda aur optimise karte hai jaha hamara div hi lister ko point kar raha ho

// let myDiv = document.createElement('div');

// function off(event) {
//     console.log('I have clicked on para');
// };
// myDiv.addEventListener('click', off);

// for (let i = 1; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'I am ' + i + 'th paragraph';
//     myDiv.appendChild(newElement);
//     // iss uper wale line se jo hame itne sare divs banaye the unme sare newElement ko as a child add ker diya 
// };
// document.body.appendChild(myDiv);


// but the mazor problem is that we can not have the individuality matlab ki ham kahi bhi ckick kare same fucntion chal jata hai uska koi sepertation nahi hai 

// uske liye ham target ka use karenge=======================================

// let myDiv = document.createElement('div');

// function off(event) {
//     console.log('para' + event.target.textContent);
//     // isse ham perticular paragraph per ham use kar payenge 
// };
// myDiv.addEventListener('click', off);

// for (let i = 1; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = ' this is para' + i;
//     myDiv.appendChild(newElement);
// };
// document.body.appendChild(myDiv);

// =============in the nested tages======================================


// let element = document.querySelector('#wrapper');
//  element.addEventListener('click', function(event){
//     console.log('App ne span pe click kiya hai '+ event.target.textContent);
//  })

// but the mazor dikkat is that ki ham span pe click kerne pe toh code chal hi rha hai per para pe click karne pe bhi code chal rha hai uske liye ham expliicittly bataana parega ki hamne bass span pe hi event ko chana hai uske liye ham .node name ka use karte hai

// ==============.nodeName============================================

document.querySelector('#wrapper').addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('Aapne click kiya hai span pe' + event.target.textContent);
    }
});


// =================DOMContentLoaded=====================================

// jaissa ki ham jante hai ki hamra script hamesha html file ke body ke last me hot hai kyuki sabse pahle html element sare load ho jaye tah uspe mera js cahle per kya ham usse pata kar sakte hai ki mera html load hua hai ki nahi 

// with the help of dom content laded in the inspect > network usme hame last bottom me pata chal jayega 

// ==========in head tag===================================================
// if we want ki ham head tag ke ander hi apne js ke code ko likhe toh uske liye 
// syntax

// <script>
//     document.addEventListener('DOMContentLoaded', fucntion(){
//          ab iske ander ham apne sare js ke code likh denge                   
//
//     })
// </script>

















