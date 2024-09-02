// console.log(document.cookie);

// key=value
// document.cookie = "fname=men3m";  // session cookie
// document.cookie = "email=men3m@gmail.com";
// document.cookie = "trainingProvider=ITI";

// document.cookie = "fname=ahmed";
// console.log(document.cookie);

// var date = new Date();
// console.log(date);

// console.log(date.getDay())
// // 0:sunday
// // 1:monday
// // 2:tuesday
// // 3:wednesday
// // 4:thursday
// // 5:friday
// // 6:saturday

// console.log(date.getMonth())
// // 0:january
// // 1:february
// // 2:march
// // 3:april
// // 4:may
// // 5:june
// // 6:july
// // 7:august
// // 8:september
// // 9:october
// // 10:november
// // 11:december

// console.log(date.getFullYear()) // 2024

// console.log(date.getDate()); // day of the month

// var today = date.getDate();
// date.setDate(today+3); // expiration date
// console.log(date);

/// how to store a persistant cookie?

// var expirationDate = new Date();
// expirationDate.setDate(expirationDate.getDate()+3);
// document.cookie = "age=23;expires="+expirationDate;

// expirationDate.setDate(expirationDate.getDate()-4);
// document.cookie = "age=55; expires="+expirationDate;


// function saveCookie(key, value, expiryDate) {
// // way1
//     // if(expiryDate){
//     //     document.cookie = key+"="+value+";expires="+expiryDate;
//     // } else {
//     //     expiryDate = new Date();
//     //     expiryDate.setDate(expiryDate.getDate()+3);
//     //     document.cookie = key+"="+value+";expires="+expiryDate;
//     // }
// // way2
//     // if(!expiryDate){
//     //     expiryDate = new Date();
//     //     expiryDate.setDate(expiryDate.getDate()+3);
//     // } 
//     // document.cookie = key+"="+value+";expires="+expiryDate;
// // way3
    
//     if(!expiryDate){ // store as a session cookie
//         document.cookie = key+"="+value;
//     } else { // store as a persistant cookie
//         document.cookie = key+"="+value+";expires="+expiryDate;
//     }
// }

// saveCookie("fname", "ahmed");


// var expirationDate = new Date();
// expirationDate.setDate(expirationDate.getDate()+3);
// saveCookie("age", "24", expirationDate);


// function getCookie(key){
//     var cookies = getAllCookies();
//     for(var i=0; i<cookies.length; i++){
//         // console.log(cookies[i]);
//         var existedKey = cookies[i].split("=")[0];
//         // var existedVal = cookies[i].split("=")[1];
//         if(existedKey == key){
//             return cookies[i].split("=")[1];
//             // return existedVal;
//         }
//     }
//     return null;
// }

// // console.log(getCookie("fname"));
// // console.log(getCookie("age"));
// // console.log(getCookie("email"));


// function deleteCookie(key){
//     if(hasCookie(key)){
//         var expirationDate = new Date();
//         expirationDate.setFullYear(expirationDate.getFullYear()-10);
//         document.cookie = key+"=x;expires="+expirationDate;
//         return "cookie deleted successfully";
//     }
//     return "cookie not found";
// }


// console.log(deleteCookie("email"));


// function getAllCookies() {  
//     return document.cookie.split("; ");
// }
// // console.log(getAllCookies());

// function hasCookie(key){
//     // if(getCookie(key))
//     //     return true;
//     // return false;

//     return getCookie(key) != null; 

//     // var cookies = getAllCookies();
//     // for(var i=0; i<cookies.length; i++){
//     //     var existedKey = cookies[i].split("=")[0];
//     //     if(existedKey == key)
//     //         return true;
//     // }
//     // return false;
// }

// // console.log(hasCookie("fname"));
// // console.log(hasCookie("age"));
// // console.log(hasCookie("email"));




//////////////////// Error Handeling ////////////////////
// try{
//     console.log("hi");
//     console.log("bye");
// }
// catch(error){
//     console.log(error);
// }
// console.log("hello");

// try{
//     console.log("hi");
//     throw Error("something went wrong");
//     console.log("bye");
// }
// catch(error){
//     console.log(error);
// }
// console.log("hello");


// try{
//     console.log("hi1");
//     console.log("bye1");

//     // read data from file
//     // open file
//     // read data
//     // exeption was thrown
//     // close file
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("finally1");
// }
// console.log("hello1");


// try{
//     console.log("hi2");
//     throw Error("something went wrong2");
//     console.log("bye2");
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("finally2");
// }
// console.log("hello2");



// // developer
// function x(){
//     try{
//         // y
//     }
//     catch(error){
//         // z
//     }
// }

// // user
// x();





// // although the same output is guaranteed, it is not recommended
// // developer
// function x(){
//     // y
// }

// // user
// try{
//     x();
// }catch(error){
//     // z
// }



// try {
//     console.log("hello");
//     throw Error("something went wrong");
//     console.log("bye");
// } catch (error) {
//     // console.log(error);   
//     throw error; /// veryyyyyyyyyyyyyyyyyyyyy wrong
// }
// console.log("test");

