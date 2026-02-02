// console.log('ujjwal');
// console.log('Nirmal');  
// ======================================================

// lets make  object 
// object me ky ky hota hai usko ham dekh lete hai 
// object me 2 chize hoti hai 1st uska property and 2nd uska behaviours 
// object car= property color,size,number of tyres ...behaviours me speed 

// lets code the object

// let rectangle = {
//     length : 10,
//     breadth :  5
// };

// so when we tyoe the object named rectange there we have its property like length and breadth
// ======================================================


// here we see the behaviours ko kaisse add karte hai apne objects me ...jisko ki ham function ke help se karte hai

// let rectangle ={
//     length: 10,
//     breadth : 20,

//     draw : function(){
//         console.log('Drawing rectange');
//     }// when we write the function in the object litteral{} then it call the method of the object not the funtion 
// };
// ======================================================

// there are 2 types through which we can create objects
// 1st one is factory function and second one is cunstrouctor function
// lets make a factory funtion
// ======================================================

// function createRect(length,breadth){

// here in the upper line we are creating a funtion the name of the funtion is createRect and ten we give the bracket where we writting the parameter in it so we can add the outer values in the funtion 

// after that we just create a objects named rect where we mke the property like lenght and breadtha nd methods like draw

// after that we just returen the object kyuki ek factory object ka kaam hi hota hai ki value to return karna jiss hbi varaible ne usse call kiya hua ho

//     let rect ={
//         length:10,
//         breadth:20,

//         draw : function(){
//             console.log('Drawing the rectangle');
//         }
//     };

//     return rect;
// }

// // then we store our factory funtion into another variable

// let a = createRect();
// ======================================================

// other way to code the same things

// function createObj(side1,side2){
//     return obj ={
//         side1:2,
//         side2:3,

//         draw(){
//             console.log('ujjwal is a coder');
//         }
//     };
// };
// let b = createObj(); 

// ======================================================

// another way to code just for parameter
// function createObj(lenght, breadth){
//     return rectangle ={
//         lenght : lenght,
//         breadth:breadth,

//         // ham yaha per jo bhi parameter uper wala line me value aayega woh hi rectangele object ka property ban jayega 
//         // iska ek aur mehtod ye hai ki ham bass
//         //  lenght,
//         // breadht 
//         // hi likh de in place of lenght:lenght and breadht:breadht        

//         draw(){
//             console.log('Ujjwal is a coder');
//         }
//     };
// }

// ======================================================

// here we see the factory function parmeter passing
// function createRect(len,bre){
//     return rectangle={
//         len,bre,
//         draw(){
//             console.log('Ujjwal is js coder');
//         }
//     };
// }

// let a = createRect(2,4); // yaha ka jo 2 hai aur 4 hai woh createrect funtion ke len and bre me pass ho ayega aur rectangel ke len and bre me chala jayega uska property ke value ban ke
// let b = createRect(5,6);
// let c = createRect(90,60);  

// ======================================================
// lets create a cunstructor funtion
// cunstruction function notation -> pascal notation ->every word ka 1st letter is capital
// constructor funtion -> property/method -> initilize ya define karta hai

// lets code
// function CreateRectangle(){
//     // this se hamr a current variable initilize hoga matlab hai current len ka baat kar rahe hai
//     this.len = 1, 
//     this.bre = 2,
//     this.draw = function(){
//         console.log('Ujjwal is a coder');
//     }
// }

// // new keyword in js return the empty objects
// let a  = new CreateRectangle();


// ======================================================

// function CreateRectangle(lenth, breadth) {
    //     // this se hamr a current variable initilize hoga matlab hai current len ka baat kar rahe hai
    //     this.len = lenth,
    //     this.bre = breadth,
    //     this.draw = function () {
        //         console.log('Ujjwal is a coder');
        //     }
        // }
        
        // // new keyword in js return the empty objects
        // let a = new CreateRectangle(4, 5);
        // console.log(CreateRectangle.name);
        
        // //  we can add and delete the property of obejects dynammicaly
        // a.color = 'red';
        // // isse hoag kya CreateRectangle me ek property ban jayega kyuki a me creae rantangele ka object store hai 
        // console.log(a);
        
        // // now we delete the property
        // delete a.color;
        // console.log(a);
        
        
        // now we want ki ham a ke constructor ka pata kare toh uske liye hame console me jaa ke a.constructor likhna haoga
        // isko ham cunsturctor property bolte hai
        
        // but if we want to kow the constructor of CreateRectangle then it gives ud Function native so we want ki ham jo number de rahe hai woh internally kaisse kaam kar raha hai uske liye ham ab code write karenge
        
// ======================================================
        // let b = new Function(
            //     'lenght','bredth',
            
            //     `this.lenght = lenght;
            //     this.bredth = bredth;
            //     this.draw = function(){
                //         console.log('Ujjwal is a coder');
                //     }`
                // );
                
                // // ab ager ham ek variable bana ke iss funtion ko use karna chahate hai toh uske liye ham ye kar enge
                // let c = new b(2,30);
                // console.log(c);
                // // funtions are objects also because we have some property for the funtions also just like the objects
// ======================================================

// let a =10;
// let b =a;
// a++;
// console.log(a);
// console.log(b);

// =============================================
// so we have two types of dat type 1st one is premetive and the 2nd one is refrence 
// premetive me jab ham data ko store karet hai ek dusre me toh usme ham copy karte hai value ko aur address diffrent hoata hai like in (number, string,undefined, null, non)
// refrence data type me ham data ko jab ek dusre me store karte hai toh ham address ke refrense se data ko store karte hai matab ek hi address me data store hai aur woh hi pass hote rehta hai

// lets code
// let a ={value: 10};
// let b = a;

// a.value++;

// console.log(a.value); 
// console.log(b.value); 

// here we can see that ki hamra a ek object hai jab ham a ko b me store kar rahe toh value of a copy nahi ho raha hai b me balki a ka address pass ho reha hai b me jo ki a ka value ko ++ karne ke baad uske address pe jo value hai woh 1 se bara ho gaya hai so at the alst jab ham ba ko bhi print kara rhae hai toh ba ke pass a ka hi address store hai uspe value 11 ho juka hai thats what 11  11 hi print ho rha hai

// premetive are the copid by their values
// refrences are copid by their address / redrence
// =====================================================
// pass by value vs pass by refrence
// pass by value

// function inc(b){
//     b++;
// }
// let b =10;
// inc(b);
// console.log(b);

// in the pass by value we dont use the value thing

// ==============================================
// pass by refrence jisme ki address pass hoata hai

// function inc(a){
    //     a.value++;
    // }
    
// let a ={value:10};
// inc(a);
// console.log(a.value);
// but in the pass by refrence we use the .value thing for fetching the data
// ==============================================
// ittreting through objects
// for in loop and for of loop

// let rectangle = {
//     length : 2,
//     breadth : 3
// };

// now i want to print it all by using for in loop

// for( let key in rectangle){
//     console.log(key);
// }

// key are refleced throught key variable
// now i want ki mai value of the kay ko bhi access kar payu toh uske liye mujhe brecket ka use karna hoga

// for(let a in rectangle){
//     console.log(a,rectangle[a]);
// }
// values are reflected through rectangel[key]
// isse hoha kya ki rectangel object ka value print ho jayega

// ===========================================
// for of loop ham bass ittrable pe hi laga sakte hai jaha continous me data store hota hai jaisse ki maps and array

// but with the help of array we can apply for of loop in the objects like this 

// for (let key of Object.keys(rectangle)){
//     console.log(key);
// }
// isse hoga ki hamra object rectangele ek array ban jayega aur uska property array ka value ban jayega

// if we write the entries in place of keys then we can print the  values of the keys

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// ager mai chanta hu ki mujhe pata chal jaye ki mere object me koi chiz present hai ya nahi toh uske liye hain (in) ka use kar sakte hai
// ==================================================
// if('color' in rectangle){
    //     console.log('Present');
// }
// else{
    //     console.log('Absent');
    // }
// here we see the object cloning 
// witht the help of ittration
// ==================================================

// let rectangle ={
//     length : 10,
//     bredth: 20
// };
// // that is the source now we want ki ham object ka coloanig kare

// let rect1 ={};
// for(let key in rectangle){
//     rect1[key] = rectangle[key];
// }

// for(let a in rect1){
//     console.log(a,rect1[a]);
// }// succesfully we colone the rectagle ka property in rect1

// ============================================

// now we have the next type of cloning assing

// let rectangle ={
//     lenght : 10,
//     breadth : 20
// };

// // now we want to clone the rectangel in other variable or object

// let rect1 = Object.assign({},rectangle);
// =================================================
// we can assign multiple src in dest. with the help of assign function
// for(let a in rect1){
//     console.log(a,rect1[a]);
// }// successfully clone the rectangle in rect1

// let rect2 ={value :10};
// let rect3 = Object.assign({},rect1,rect2,rectangle)
// console.log(rect3);
// ===============================================
// now we have the 3rd type spread for colaning
// let rectangle = {
//     length : 10,
//     breadth : 20
// };

// // lets cone the rectnangle in the rect1 with the help of spread
// let rect1 = {...rectangle};

// for(let a in rect1){
//     console.log(a,rect1[a]);
// }

// +++++++++++++++++++++++++++++++++++++++++++++++

// in js we have garbage collector jo ki unwanted or unused vaiable ka menory ko free karta hai deallocate karta hai we have no control on the garbage collector aur ye sab kaam autometically hota hai

