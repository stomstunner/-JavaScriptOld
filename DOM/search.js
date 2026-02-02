console.log('hello');  
// ===================WINDOW==================
/*
here we learn about the window 
window is a global object
it is represented by the browser window

window ke ander hi hamre DOM lies karte hai BOM aur js ke jo core functionalty hai woh sab lies karte hai  

window is a top level entyti creted by browers
// it helps us to control the browers windows, 

*/
//=====================DOM=======================
/*
we change the whole html code into a js ka object (or document ) aur usko ham dom bol dete hai Document Object Model 

// if we write 
documnent in the console window then we can get the whole code of a website of any browser

// for body of a website we write document.body
*/
// =====================BOM=======================
/*
we use bom for communicatting to the browers about the diffrent matter other than the contant of the page /// matter like history , location etc


*/

// ======================DOM========================

// lets see more important things about dom 
// it is a tree like structure jimse ki pahle ham koi ager character <> bracket me likh de toh woh tag ban jate hai fir tag se token bante with the help of tokenizer and then it converted to nodes 

// character -> tag -> token -> node ->> DOM 

//=============getElementID==============================


// hamare pass ek method hota hai getElementID usse ham website ke code me kisis bhi jagahpe ager kisi ka code hame fetch karke lana hai with the help of their id then we use getElementID

// syntax 
//  document.getElementID('Id ka naam');

// it return a single object 
// it is called on document object


//===============getelementByclassname===================
// if we have multiple divs jinka naam same ho ua hame class ke basis pe divs ko fetch kar ke laan ho toh uske liye ham getelementByclassname ka use karte hai

// syntax
// document.getelementByclassname(classname);
// this return a array of objects  better called a HTMLcollection

// ===================getelementByTagname====================

// isme ham tag ka naam likhte hau pure page me jaha bhi woh jitni bhi baar use hua hota hai woh fetch ho ke aa jata hai

// =====================$0=======================
// aher hame kisi bhi chiz ko print ya fetch kar ke eena hai apne console window pe toh uske like ham bass usko select karne aur console me jaa ke $0 likh denge usse woh chiz ek variabele me convert ho jayega aur uske ham fetch kar sakte hai

// and if we wan to make a veiable then we  do 

// let para  = $0;

// isse ham baad me bass paralikh ke bhi fetch kar sakte hai

// aur $0.classname ya para.classname like ke uska class name fetch kar ke laa sakte hai

// ==================QuerySelecter========================

// we use # for id in css and . for class and just name for any tag just like this in the QuerySelecter we use these methos for fetching the tags or class name wala tag ua id wala tag

// syntax 
// QuerySelecter('#header'); //for id
// QuerySelecter('.header'); //for class
// QuerySelecter('header'); //for tag

// query QuerySelecter ka output hamesha single hi hota hai ..only signle object deta hai

// only return the first object

// ==============queryselecterAll=======================

// yaha pe hame multiple objects answer me milenge 
// syntax document.querySelectorAll('.hiddden');