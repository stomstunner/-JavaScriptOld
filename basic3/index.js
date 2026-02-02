// console.log('ujjwal');

// we can use the inbuilt funtion for our usecse like math ke inbuit funtion ko ham use kar sakte pahle Math.then uske funtion ke naam likh ke 
// ================================

// console.log(Math.random());
// console.log('Nirmal');

// let a = Math.max(3,5,7,8,9,2);
// console.log(a);

// ================================
// this print the maximum number among them

// we can use the math.min() for minimum number amons multiple numbers
// math methods not functions
  
// then we have absolute mehtods throught which we can find the absolute number of any number matlab kisi bhi number ka positive side 

// console.log(Math.abs(-34));
// 34 answer

// =========================================
// if we want ki ham pata kare ki koi bhi varibale kiss type ka hai toh uske liye ham (typeof operator ka use karte hai)

// and if we want ki ham strin premetive way se baanye toh uske liya hai ye karte hai

// let a = 'Ujjwal'; // premetive way
// for finding type of a ki a toh ek vaiable hai per kya hai

// console.log(typeof a);
// =================================================
// non premetive way ya refrence way
// let lastname = new String('Singh');

// type of lastname 

// console.log(typeof lastname); // object

// =================================================

// we can make the premetive to the non premtive in js with the help of dot notation

// this is the behaviour of the js


// let a = 'ujjwal';///////////////////////////////


// now we ccan usee the objects ka methos in the premitive a also by using dot

// console.log(a.length);
// this print the lenght of a me jo string hai usko

// we can prin the kon se index pe kya para hua hai usko bhi print kar sakte hai

// console.log(a[3]);//isse ham a  ke 2th index pe kya hai usse print kar sakte hai //index start from 0

// =================================================
// we can also see that ki uss string ko koi sub string present hai y nahi
// console.log(a.includes('u')); // true

// ================================
// console.log(a.startsWith('ujj')); // true

// ======================================
// console.log(a.endsWith('l'));
// ======================================
// now we want ki hamra naam uppercase me aayega
// console.log(a.toUpperCase());
// isse hamra naam upper cse me ho jayega this is a funtion / methods
// ======================================

// to lowercase

// console.log(a.toLowerCase()); // change to lowercse

// =======================================
// ager ham chate hai ki hame string me se space ko trim karna

// let a ='Ujjwal';

//  console.log(a.trim());

// =======================================

// replace
// console.log(a.replace('Ujjw' , 'Nirmal'));
// the Ujjw replce ho jayega Nirmal se aur al ke aage lag jayega ujjwal ke

// ==============================================

// suppose we have a sentance then we want ki ham usme se words ko nikal ke de 

// let message = 'This is my first message';

// let words = message.split(' '); // we split the message contant in the basis of the space

// console.log(words);
// print he single words 
// =========================================

// console.log(message.indexOf('f'));//give the index number of the letter present in the message ///for words gives the words ka first letter ka index only 
// ================================
// ager ham chahte hai ki koi words new line me aye toh uske liye hai \n new line chaharacter ka use kar sakte hai

// let a = 'this is \nmy second \nmessage';

// console.log(a.toUpperCase());

// ==================================================

// if we want ki ham output me single quote ko dikhyaye toh uske liye hame single quote ke aage backslash dene hoga

// let message = ' \bThis \t is \' my \n "first" message'; // we can show douuble quoute in the output but not the single qoute dirctlly

// // \b se ek backslash dila jata hai
// // \t se ek tab dila jata hai
// console.log(message);

//  \0 this is the notaion of the null charahter


// +++++++++++++++++++++++++++++++++++++++++++++=======
// now with the help of the template litteral we can prin the sentance as we can 

// let a  = `
// This is 
// my first 
// Message`; // 1 ke bagal wal dash 
// //backtick or template litteral
// console.log(a);

// =====================================

// we can create a mail body by the use of backtik ya template litteral and we also can make the mail dynamic by the use of th $

// let fistName1 = 'Ujjwal';
// let lastName1 = 'Singh';

// let mail =
// `
// Hello ${fistName1}, 

// Thanks for the Opportunity.

// Regards,
// ${fistName1 +' ' + lastName1}
// `;

// // we can say a place holder ${constant},

// console.log(mail);

// ===========================================
// dates 

// here we see how we can print the current dates
// let date = new Date();

// console.log(date);

// Thu Sep 25 2025 20:15:05 GMT+0530 (India Standard Time)
// ================================

// now we have 2nd method through which we can print the date

// let date2 = new Date('sept 25 2025 20:17');

// console.log(date2.toLocaleDateString());



// 9/25/2025


// =========================================
// now the 3rd type of printing the date
let date3 = new Date(2025 , 8 , 26);
// the maonth indexing start witht the 0 
console.log(date3);

// we can also cahnge the date in the vaiable date 3

date3.setFullYear(2000);
console.log(date3);

// we can get the date from the variables  
console.log(date3.getDate()); //26

// Months

console.log(date3.getMonth());//8