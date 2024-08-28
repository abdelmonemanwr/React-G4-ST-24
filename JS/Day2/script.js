// var a = 2;
// var b = 5;
// var sum = a * b;
// console.log(sum);


// /// 100 of code

// var a = 4;
// var b = -9;
// var sum = a * b;
// console.log(sum);

// // 20 
// //
// var a = 20;
// var b = 15;
// var sum = a * b;
// console.log(sum);


// function sum(){
//     var a = 20;
//     var b = -11;
//     console.log(a*b);
// }

// Number("5")  // builtin functions

// user defined functions

// 1- function statement (function declaration)

// function   funcName (/*p1, p2*/)  {
//     // code
// }

// function sum(){
//     var a = 5;
//     var b = 15;
//     console.log(a+b);
// }

// sum();
// sum();
// sum();
// sum();
// sum();

// function sum2(){
//     var a = 15;
//     var b = 25;
//     console.log(a+b);
// }
// sum2();

// function sum(a,b){ // parameters
//     // console.log(arguments);
//     console.log(a+b);
//     console.log(a,b);
// }

// sum("mona", "ali")
// sum(66, "ali")
// sum(true, "true")


// sum(32,65); // arguements: actual values of params

// console.log(sum)

// sum();
// sum(3);
// sum(2,5);
// sum(2,5,4);


// console.log(c);
// var c;
// console.log(c);

// function mul1(a, b){
//     return (a*b);
// }

// function mul(a, b){
//     console.log(a*b);
//     return undefined;
// }

// var result = mul(2,7);
// console.log(result)
// console.log(mul(2,7)+24)
// console.log(14)


// function mul(a, b){
//     console.log("hello");
//     console.log("hello ahmed");
//     console.log("hello sara");
//     console.log("hello ammar"); 
// }

// var result = mul(2,7);
// console.log(result);


// function add(a, b){
//     a = a || 0;
//     b = b || 0;
//     console.log(a+b);
// }

// console.log(add(2,6));


////////////// Function Expression /////////////////

// console.log(address);

// var fname = "men3m";
// var age = 45;


// var func = function (a, b){
//     return a+b;
// }
// var res = add(2,5);  // error: add isn't defined
// console.log(res);
// var res =  func(2,5);
// console.log(res);


// function sum(a, b){
//     return a+b;
// }
// console.log(fun);

// console.log(
//     function add(a, b){
//         return a+b;
//     }(2,6)
// );


// console.log(c);
// var c;

// test();


// greet("men3m");
// function greet(fname){
//     console.log("hello "+fname);
// }


//////////////////////////////////////////////////
// console.log(window);
// console.log(this);



// console.log(c);
// var c = "iti";
// console.log(c);



// greet("men3m");
// function greet(fname){
//     console.log("hello "+fname);
// }
// greet("iti");
// var y = "mona";
// greet(y);



// var sum = result(2,5);      // error, result isn't a function (variable its value is undefined)
// var result = function(a, b){
//     return a+b;
// }
// var sum = result(2,5);
// console.log(sum);

///////////////////////call back function ///////////////////////////

// function greet(func, num1, num2){
//     // console.log( func);
//     // var p = 34;
//     func(num1, num2);
// }

// // greet(true);

// var sub = function(a, b){
//     console.log("i'm sub func", a-b);
// }
// greet(sub, 3, 4);
// // sub();


// // console.log(sub);

// function wlcm(func, instructorName){
//     console.log(func);
//     func(instructorName);
// }

// function cb(fname){
//     console.log("welcome "+fname+" from iti"); 
// }

// wlcm(cb, "men3m");

// function play(func, num){
//     func();
//     console.log(num);
// }

// play(function (){
//     console.log("i'm a call back function");
// }, 1000);


// function greet(func, fname){
//     func(fname);
// }
// function cb(fname){
//     console.log("welcome "+fname+" from iti"); 
// }
// greet(cb, "ali")


// function greet(func){
//     func();
// }
// function cb(fname){
//     console.log("welcome "+fname+" from iti"); 
// }
// var result = cb("ali");
// greet(result)
// greet(cb("ali"))


function greet(success, error, flag){
    flag? success() : error();
}

// function cb1(){
//     console.log("this is a success function");
// }

// function cb2(){
//     console.log("this is an error function");
// }

// greet(cb1, cb2, false);;

function sum(a, b){
    console.log(a+b);
}

// var num1 = 2;
// var num1 = 7;
// sum(2,6);
// sum(num1,num2);
// cb1();

// greet(
//     function (){
//         console.log("this is a success function");
//     }, 
//     function (){
//         console.log("this is an error function");
//     }, 
//     true
// );

// immutable
var fname = "     hEllo mEN3mL       ";
// console.log(fname[1]);
// for(var i=0; i<fname.length; i++){
//     // console.log(fname[i]);
//     console.log(fname.charAt(i));
// }

// var res;
// res = fname.indexOf('l');
// res = fname.lastIndexOf('l');
// res = fname.toLowerCase();
// res = fname.toUpperCase();
// console.log(fname.toUpperCase());
// console.log(fname)
// fname = fname.toLowerCase();
// res = fname.startsWith('H');
// res = fname.endsWith('l');
// res = fname.trim();
// res = fname.trimEnd();
// res = fname.trimStart();
// res = fname.concat(" ITI");

// fname = "hEllo mEN3m iti";
// res = fname.split()
// res = fname.split(" ")
// res = fname.split(";")
// res = fname.split(" ").reverse().join(' ')

// fname = "username=men3m;password=123456";
// res = fname.split(";")[1].split("=")[1]

// console.log(res);
// console.log(res.length);
// console.log(fname.length);

var students = ["ali", true, 123, "men3m", "iti"];

// students[2] = "hello";
// console.log(students[2]);


// for(var i=0; i<students.length; i++){
//     console.log(students[i]);
// }

// students.push("wlcm");
// students.pop();
// students.unshift("first");
// students.shift();
// students = students.concat([1,3,4]);
// students.reverse();

students = [10,1,12, 2, 3, 4];
// 1,2,3,4,10,12

// students = students.sort(function );

// console.log(students.join("----"));

//  students[0] = students[0].split('').reverse().join('');



// console.log(students);
// for(var i=0; i<students.length; i++){
    //     for(var j=i+1; j<students.length; j++){
        //         if(students[i] > students[j]){
            //             var tmp = students[i];
            //             students[i] = students[j];
            //             students[j] = tmp;
            //         }
            //     }
            // }
            
// console.log(students.sort());
var newArr = students.sort(function (a, b) { 
    return b-a;
});
console.log(newArr);


// console.log(students);


// var s = "ere";
// console.log(s[99]);

