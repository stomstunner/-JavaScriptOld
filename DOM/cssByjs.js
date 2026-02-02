// here we see the css styling with the help of javascript mrthods 

// ==================.style========================

// suppose hamre pass  koi ek text hai uska hame color cahnge kanra hai with the helpp of jas we can do that with the help of .style method

// ex = content.style.color = 'red';

// ======================CSStext=======================

// with the help of CSStext we can change the multiple property a the once let see how we can do that

// /content.style.cssText = 'color:red; background-color: blue; font-size:2em;'

//  with the help of this we can chanege the multiple things at on time


// ================setAttribute================================

// now we have the another method is that we can set the attribute with 2 parameter jisme ki hame 1st me likhen ahi ki ham kaha set karna cahte hai aur kya set karne chahate hai

// content.setAttribute("style","color:white; background-color:green;");

// we can use the setattribute for adding the id and class name for an element for eacy access

// setAttribute("id","contentKiId");

//===============split & typeof========================================
// if we want ki hame kisis ka datatype paha chal jaye with the help of class name then we use the type of operator

// typeof content.className

// if we want to gain the classname of each class then we use the split method

// content.className.split(' ');


// if we have the faltu ka sapce in the class then we use the trim methods

// let split = content.className.trim().split(' ');


// ========classList===================================================

// it return the class name as list 
// ek array of list return karta hai 
// return an array of calss
// add() method se ham kuch push kar sakte hai 
// remove() se ham remove karte hai

// then we have toggle jisse ager koi element present nahi hai toh usse present kar denga aur koi element present hai toh usse hata dega 

// then we have contain()  method jisse hame true ya false return hota hai if hamre pass woh elemt present hai ya nahi