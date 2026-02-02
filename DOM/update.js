// here we see how we can update our html code with the help of some methods

// update exiting contant
// innerHTML ,OuterHTML , textContext, innerText

// ================innerHTML========================

// gets and sets an element // all of its decentents  // set`s an element HTML content   
/*


let a  = document.querySelector('.button');
undefined

a

<a class=​"button" href=​"/​en-US/​community" aria-labelledby=​"label-whpl0ncvr5e" data-variant=​"primary" part=​"button">​flex<!--lit-part--><!--lit-part rI2hX8LXYZM=--><!--lit-node 0--><span id=​"label-whpl0ncvr5e" class=​"label" part=​"label">​…​</span>​<!--/lit-part--><!--lit-part bRP2a5ux/uw=--><span class=​"icon" part=​"icon">​…​</span>​flex<!--/lit-part--><!--/lit-part--></a>​
a.innerHTML
'\n          \x3C!--lit-part-->\x3C!--lit-part rI2hX8LXYZM=-->\n    \x3C!--lit-node 0--><span id="label-whpl0ncvr5e" class="label" part="label">\x3C!--lit-part-->Get involved\x3C!--/lit-part--></span>\n  \x3C!--/lit-part-->\x3C!--lit-part bRP2a5ux/uw=--><span class="icon" part="icon">\x3C!--lit-part 0rqeqJmpJ34=--><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>\x3C!--/lit-part--></span>\x3C!--/lit-part-->\x3C!--/lit-part-->\n        '

a.innerHTML = ' ';
' '

a.innerHTML
' '

*/


// ===============OuterHTML======================
// same as the innerHTML

// ==============textContent and innerText=========

// set and get the textual content

// isse ham kisis bhi tag ya class me ya id me text likha rehta hai usko fetch kar ke laa sakte hai

// more or over the working of innerHTML and innercontent is same but the major diffrence is that ki ager ham content ke ander ager koi tag use karte hai toh innerhtml hame usko render karne ka try karta hai but textcontent usko as a text hi treat karta hai aur usko fetch kar ke le aata hai

// ================textContent & innerText=================

// the major diffrence between these two is that text content me hamra textual data aata hai woh bhi sara ka sara but inner text me jo hiddden data hai woh nahi aata hai... hiddendata as a sense that ager hamne koi media query lagaya hua hai ya hover pe text aa ta ha toh usko ham textContent se laa sakte hai but innertext so wohi text aayaga jo ki sirf abhi visisble hai 




// using the js we add the html code in document============



// ==================create & add in html =================
// we can create a elemts with the help of createElement('p'); 
// isse ham ek paragraph create kar diye kisi bhi class me aur ager hame usko add karna ho apne html code mt  toh suke liye ham append ka use karte hai 

// example

// let con = document.querySelector('.magic');

// let newPara = document.createElement('p');

// con.appendchild(newPara);

// aur ager ham con ko fetch karne toh usme hamra paragraph bhi hoga 

// =============AddingText usign CreateTextNode==========

/*

let content = document.querySelector('.magic');
let newPara = document.createElement('p');
let textPara = document.createTextNode('I am the text');
newPara.appendchild(textPara);
content.appendchild(newPara);


*/

// EASY method using textContent


/**
 * let content = document.qeryselector('.magic');
 * let newPara = document.createElement('p');
 * newpara.textContent = 'I`m Ujjwal Singh';
 * content.appendChild(newPara);
 */


// ====================InsertAdjacentElement===============================

// it has to be 2 agrument
// 1st on is the location or position
// 2nd one is the what we want to be inserted

// position naming

/*

this is the beforebegin
<p>
    this is the after begin
    
    <h1></h1>
    this is before end
</p>
this is after end
 */

// let content = document.querySelector('.magic');
// let newPara = document.createElement('h2');
// newPara.textContent = 'Ujjwal Singh');
// content.InsertAdjacentElement('beforeBegin' , newPara);

// ==============RemoveChild=========================

// if we want to remove some element then we use the removeChild method

// sabs pahle toh uske liye hame jiske remove karna hai uska parent elemtent pata hona  cahiye tab hi ham remove wale method se usko hata sakte hai

// let content = document.querySelector('.magic');
// let newPara = document.createElement('h2');
// newPara.textContent = 'im ujjwal';


// ab ham uss h2 ka kuch class denge aur usko haa denge

// content.removeChild(newPara);


//===================childElement.Parent=================================
// with the help of removechildelement.parent s ham uska child elemt ka parent nikal ke uskao child ko rmeove kar sakte hai

