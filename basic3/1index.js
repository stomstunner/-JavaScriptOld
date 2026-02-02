console.log('ujjwal');

//node basic3/1index.js================

// here in this program we study about the array in js

// array is a type of objects // it isa collection of items in a continous manner 

// let number = [1,2,3,4,5,6];
// console.log(number);
// console.log(number[2]);

// 2 index pe 3 present hain
// indexing satrt with 0

// in array we can insert the number in 3 diffrent palce from the satrting and middle and the ending

// End = number.push(6);
// isse hamra 6 end of the number array me insert ho jayega

// Begin = number.unshift(0);

// if we want to insert the numbers in the middle 
// middle = numbers.splice(index_number,number that we want to delete,number that we want to insert)

// insert at end
// let numbers = [1,2,3,4,5];

// numbers.push(6); //[1, 2, 3, 4, 5, 6]
// console.log(numbers);

// =====================================================

// numbers.unshift(0); // [0, 1, 2, 3, 4, 5, 6]
// =====================================================

// insert at middle
// numbers.splice(3,0,1,5,'5','a','b'); //number.splice(index,delete,items added); // [0, 1, 2, 1, 5, '5', 'a', 'b', 3, 4, 5, 6]
// console.log(numbers);

// ===========================================================

// now here we  want to use the searching 

// for searching ...when we want index of any number we use the IndexOf method
// console.log(numbers); //[0, 1, 2, 1, 5, '5', 'a', 'b', 3, 4, 5, 6]
// console.log(numbers.indexOf('a'));
// we can see that the a is present in the 6th index

// in case of the number is not present the answer will be -1..
// ===========================================================

// if we want to know that the given number is present in the array then we can use the if method --bekar method

// if(numbers.indexOf(3) != -1){
//     console.log("Present");
// }

// ===========================================================

// 2nd method
// console.log(numbers.includes(3)); // this give us the true or false answer

// ====================================
// 3rd and the most adv method
// number.indexof(number that we want to serach, from wich index)

// console.log(numbers.indexOf(3,9));

// it gives the index number // much efficient because here we decrese the area of seaching // if not present then the answer is -1

// =======================================
// here we make the array of objects 
// let courses = [
//     {no: 1, naam : 'Ujjwal'},
//     {no: 2, lastname : 'Kumar'}
// ]

// console.log(courses);

// but if we want ki ham seach kar le array ke elemts ko then
// console.log(courses.indexOf( {no: 1, naam : 'Ujjwal'})); 
//  then it gives us the -1 beacuse the object is a non premetive data type aur usme refrence ka use hota hai so for that reseson the colouse ke ander wala 0th index pe elemts alag hai aur console .log wala elemts alag hai bease the addres of the elemts are diffrent 

// ======================================
// console.log(courses.includes( {no: 1, naam : 'Ujjwal'}));

// we use the call back funtion == matlab function ke ander function

// let present = courses.find(function(course){
//     return course.naam == 'Ujjwal';
// })
// console.log(present); 

// this is nothing but the predicate function jiks amtab hai ki ham is basis pe uss elemts kao find karna chate hai
// use double equal to 
// we use the find funtion for the base of the call back funtion for seaching the elemts in the objects of arrays elemts 

// isme ham dekh rahe hai ki course.naam ager ujjwal ke abraber hai toh return kar do na

// ===============================
//ham iss find wlae method ko chhota bhi kar sakte hai 

// let present = courses.find(course => course.naam === 'Ujjwal' );
// this method call the arrow function
// ager ek bhi argumant nahi hota toh baracket khali rakhte aur multiple hote toh brackte me likhte //course 

// console.log(present);

// ================================
// removing the elements
// begin = shift
// end = pop
// middle = splice

// =======================================

// let number = [1,2,3,4,5,6,7];

// // removing from end
// console.log(number.pop());
// console.log(number);// [1, 2, 3, 4, 5, 6]

// =======================================
// removing from begin

// let number = [1,2,3,4,5,6,7];

// number.shift();
// console.log(number); //[2, 3, 4, 5, 6, 7]

// =======================================
// removing from middle
// let number = [1,2,3,4,5,6,7];

// // splice method // number.splice(index number, kitne number ko remove kanra hai)

// number.splice(2,2);

// console.log(number); // [1, 2, 5, 6, 7]

// =======================================

// // removing the all elements from the array
// let numbers = [1, 2, 3, 4, 5, 6];
// let numbers1 = numbers;
// // now if we store the numbers into another vaiable then what happen lets see
// numbers = []; // kali kar diye array ko
// console.log(numbers); //[] we can see that the array become khali

// console.log(numbers1);

// =======================================

// // removing the all elements from the array
// let numbers = [1, 2, 3, 4, 5, 6];
// let numbers1 = numbers;
// // now if we store the numbers into another vaiable then what happen lets see
// numbers.length =0; 
// // this is the method through which we can  delete the elemtents 
// //pahle wala me number variable ka adddress [] khali ho jaa raha tha aur number 2 us purane wale array ko point kar raha tha 
// console.log(numbers); //[] we can see that the array become khali

// console.log(numbers1);
// =======================================

// removing the all elements from the array
// let numbers = [1, 2, 3, 4, 5, 6];
// let numbers1 = numbers;

// numbers.splice(0,numbers.length); 
// //isse bhi sare elemts delete ho jayenge
// console.log(numbers); //[] we can see that the array become khali

// console.log(numbers1);

// ===================================
// thired method 
// while(numbers.length >0 ){
//     numbers.pop();
// }

// console.log(numbers)


// ==========================================

// here we see how to combine the  data using the concat

// let a = [1,2,3];
// let b = [4,5,6];

// let combine = a.concat(b); 
// // syntax = first array . concat (second array)

// console.log(combine);
// ==========================================

// here we see the slice method 

// let marks = [10,20,30,40,50,60,70,80,90];
// // syntax = marks.slice (kaha se katna hai aur kaha tak katna hai uske bich ka sara index ka vale aa jayeaha last wala se 1 pahle tak)
// let cut = marks.slice(2,7); //[30, 40, 50, 60, 70]
// console.log(cut);
// ==========================================
//  here we study about the full slicing -- jisme ham  original array ka copy bana dete hai

// let a = [1,2,3,4,5,6,7,8,9];
// let b = a.slice();

// console.log(b); // isse ham a ka pura element ko hi copy kar lye kyuki ham kuch slice hi nahi kiye usse //

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// =====================================================

// we have to 2nd method for comining the two array othern than the concat

// spread jisme ham 3 baar dot ka use karte hai ...

// let first = [1,2,3];

// let second = [4,5,6];

// let combined  = [...first,...second]; 
// //[1, 2, 3, 4, 5, 6]

// console.log(combined); 

// =====================================================

// ham apne array ke bich me bhi charcter ko add kar sakte hai with the help of spred or 3 dot operator

// let first = [1,2,3];

// let second = [4,5,6];

// let combined  = [...first,'a',...second,7,8,9,true, false,'ujjwal']; 
// // [1, 2, 3, 'a', 4, 5, 6, 7, 8, 9]

// console.log(combined); 

// =====================================================

// itrattion in the array
// using for-of loop

// let a = [1,2,3,4,5,6,7];

// for(let value of a){
//     console.log(value);
// }


// 1index.js:248 1
// 1index.js:248 2
// 1index.js:248 3
// 1index.js:248 4
// 1index.js:248 5
// 1index.js:248 6
// 1index.js:248 7
// =====================================================

// then we have for each loop

// let a = [1,2,3,4,5,6,7];

// // for each loop me call back function me likhna hoga

// a.forEach(function(number){
//     console.log(number)
// });


// =====================================================

// in single line arrow function for  FOREACH loop

// let a = [1,2,3,4,5,6,7];

// // for each loop me call back function me likhna hoga

// a.forEach( number => console.log(number)); 

// =====================================================


// here we see the joining of array

// let arr = [1,2,3,4,5,6,7,8];

// // lets do joining of the elements of the array in the basis of comma in between each elements

// let joined = arr.join(',');
// console.log(joined); //1,2,3,4,5,6,7,8 

// isse ham ek hi line me saro ko print bhi kar sakte hai
// =====================================================

// now we see the spliting the sentence with the help of split fucntion and usse hamra at last me ek array ban jata hai 

// let massage = 'This is my first message';

// let words = massage.split(' '); // we spliting the sentence with the basic of blanck space 

// console.log(words);


// // isse hamra sentence splits ho gaya word me aur array ban gaya

// // and ham jchate hai ki sab word ko join kar de on the basic of the undersacore bet each words

// let joined = words.join('_');
// console.log(joined); //This_is_my_first_message
// =====================================================

// here we see the sorting of the array 

// let arr = [10,40,70,20,90];

// arr.sort(); // increasing

// console.log(arr);

// =====================================================

// recverse of the sorted array

// let arr = [10,40,70,20,90];

// // arr.sort();

// // console.log(arr);

// arr.reverse(); // decreasing
// console.log(arr); 
// =====================================================

// lets study about the filtering methods 
// the filter function is a predicate or the call back function matlab hame function ke ander function baan hoga

// let arr = [1, -1, 2,0, -2, 3, -3, 4, -5];

// let positive = arr.filter(function (number) {
//     return number >= 0;
// });

// console.log(positive.sort()); // [1, 2, 3, 4]



// =====================================================

// creating in the arrow function

// let arr = [1, -1, 2,0, -2, 3, -3, 4, -5];

// let positive = arr.filter( number =>  number >= 0);

// console.log(positive.sort()); // [1, 2, 3, 4]




// =====================================================

// lets see the mapping of the array elemts trouph diffrent string or vales or html file also

// map function //it is a predicuate // callback function

// let arr = [5, 6, 7, 8, 9];

// let mapped = arr.map(function (numbers) {
//     return 'Student_No_' + numbers;
// });

// console.log(mapped);

// ================================================

// here we study about the objects with map

// let arr = [1,2,3,4,5.-1,-2,-3,-4];

// console.log(arr);

// let items = arr.filter(numbers => numbers >= 0);
// console.log(items);

// // mapping with objects

// // let mapped = items.map(function(num){
// //     let obj = {value : num};
// //     return obj;
// // });

// let mapped = items.map( num => ({value : num}));

// console.log(mapped);
// ================================================

// lets see the cahing jisme ham numbers ke uper filter wala method lagaya aur fir numbers pe map wala method lagaya 

// let arr = [1,2,3,4,5.-1,-2,-3,-4];

// console.log(arr);

// let items = arr
// .filter(numbers => numbers >= 0)
// .map( num => ({value : num}))

// console.log(items);

// let mapped = items.map( num => ({value : num}));

// console.log(mapped);

// let arr = [1, 2, 3, 4, 5. - 1, -2, -3, -4];

// console.log(arr);

// let items = arr
//     .filter(numbers => numbers >= 0)
//     .map(num => ({ value: num }));

// console.log(items);


// ================================================








