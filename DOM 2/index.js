// here we see the spacial things about the js DOM jisme ki ham sabse pahle events ke baare me denkege

// evens is like the all the things happing in the browser window..like the alert massage mouse scroll, muse click ...kaha click kiye hai kya clikh kiye hai woh sab hame

// monitorEvent(document)
// kar ke pata cahl jata

// and for turing of this even monitioring we use the

// unmonitorEvent(document);


// =================interface(class)================================

/*
we have a top level inetface called  ==event-target== jo ki interface implemted by the by the object that can recive events and may have litiners for them 

eventTarget se nikal hai node and node se nikala hai hamra  element

eventTarget ke 3 method hote hai 1st one is the addEventListener(), removeEventListiner(), and the last one is the displatch the event()

*/

// ===============addEventListener()========================
// listen to the event
// respond to the event
// hook into event

// psecudocode

// <event.target>.addEventListener(<event-to-listen-for>,<function-to-run-when-event-happened>); 

// event targrt is a top level inetface uske hi ander document,head tag, paratag sab kuch aata hai

// eventargrt in the pseodocode  -> component ->that has -> document,para,div,article,video etc // matab kiske uper ham apne even ko dekhena chate hai


// ===================eventtype=============================
// then we have eventype ==-> like the scroll, click,doubleclick

// ====================fucntion============================
// fucnction -> jisme ham define karte hai hai ki jab ham uss target pe click kare toh kya hona cahiye
// define what even happen
// ==================================================

// syntax
// document.addEventListener('click' , fucntion(){
// console.log('I clicked on document');
// });

// isme dcoumet hamra eventTarget hai then click hamra eventType hai aur fcuntion matlab ham kya chate hai

//  ==================removeEventListiner===========
// yaha pe ham dekenge ki eventListener ka kaam kya hota hai sabse pahle toh ham woh chiz likhte hai jispe hame apne event listener lagana hota hai aur kya karne se woh chiz active haoga aur uska last me function likhenge jisme ki ham batayenge ki hamra kya kaam hoga 

// let content = document.querySelector('.ok');

// document.addEventListener('click',fucntion(){
// document.style.cssText = 'color:red; background-color:green; font-size:2em;'
// });


// ==============type Cohersion==================

// here we see the diffrence between double equal to and triple equal to

// double equal to me hamra diffrent type ke bhi data type ager value same hao toh uska boolean me true aayega 

// ex  1 == '1';
// true
// support type cohersion

// but in the case of triple equal to the value and the data should be same like ager hamra data type aur uska value same hai toh hi hamara boolean me true aayega 

// ex  1 === 1;
//  true 

// ex 1 === '1';
// false

// dont allow thw type cohersion
// =============================