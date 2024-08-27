// console.log("hello from external file");


// var fname = "men3m";
// console.log(fname);

// var age = 34;
// console.log(age);

// var flag = true;
// console.log(flag);

// var $fLaG = false;
// console.log($fLaG);

// var first_name = "iti";
// console.log(first_name);

// var firstSecondThird = true; // camel case
// var firstName = "summer";




// var fname = "iti";
// console.log(typeof (fname));

// var age = 22;
// console.log(typeof (age));

// var flag = false;
// console.log(typeof (flag));

// var x = undefined;
// console.log(typeof x);

// var address;
// console.log(address);

// // reassign
// var fname = "ali";
// console.log(fname);
// fname = "iti";
// console.log(fname);
// fname = 22;
// console.log(fname);
// fname = true;
// console.log(fname);
// // redeclaration
// var fname = "mona";
// console.log(fname);

// null is not a zero
//           value               type
// zero       0                  number
// null      null                object



// var x = Number(5);
// console.log(x, typeof x);

// var y = String("hello");
// console.log(y, typeof y);

// var z = Boolean(true);
// console.log(z, typeof z);


// var x = Number("5");
// console.log(x, typeof x);

// var y = Number("iti");
// console.log(y, typeof y);


// var value = "mona";
// var result = isNaN(value)
// console.log(result);

// value = 22;
// result = isNaN(value)
// console.log(result);

// value = "22a";
// result = isNaN(value)
// console.log(result);

// value = "22a";
// result = Number.isNaN(value)
// console.log(result);


// var flag;
// flag = Boolean(true);
// flag = Boolean("ali");
// flag = Boolean([1,2,3]);
// flag = Boolean(NaN);
// flag = Boolean(null);
// flag = Boolean("");
// flag = Boolean([]);
// console.log(flag);


// var num1 = 22;
// var num2 = 33;
// var result = num1 + num2;
// console.log(result);

// num1 = "mona";
// num2 = "ali";
// result = num1 + num2;
// console.log(result);

// num1 = "22";
// num2 = "33";
// result = num1 + num2;
// console.log(result);

// num1 = 22; // "22"
// num2 = "33";
// result = num1 + num2;
// console.log(result);

// num1 = 22; // "22"
// num2 = "mona"; // isNaN(num2)
// result = num1 + num2;
// console.log(result);

// var result;
// result = undefined + undefined;
// result = 10 + undefined;
// result = NaN + NaN;
// result = 10 + NaN;
// result = null + null;
// result = null + 10;
// result = null - 1;


// result = 10 - 7;
// result = 10 - "7"; // 10 - 7
// result = 10 - "mona"; // 10 - 7


// result = 5*"mona";
// console.log(result);

// ==, ===

// var num1 = "mona";
// var num2 = -2;
// console.log(num1>=num2);

// var num1 = "2";           // 2
// var num2 = 2;             // 2
// console.log(num1==num2);

// var num1 = true;             // 1
// var num2 = "true";           // NaN
// console.log(num1==num2);


//console.log(Boolean("true"));

// var num1 = true;             // 1
// var num2 = 1;                // 1
// console.log(num1==num2);

// var num1 = true;             // 1
// var num2 = "1";              // 1
// console.log(num1==num2);


// var num1 = undefined;
// var num2 = 3;

// console.log(num1&&num2);



// var num1 = "ali";
// var num2 = NaN;
// console.log(num2||num1);

///////////////////////////////////////////////
// if(/*condition*/)
// {
//     // code 1
// }
// else if(/*condition2*/){
//     // code 2
// }
// else
// {
//     // code 3
// }

// var num1 = 4;
// if(num1 %2 == 0){
//     console.log("even");
// } else {
//     console.log("odd");
// }

// var num2 = 0;
// if(num2<0)
//     console.log("negative");
// else if(num2>0) 
//     console.log("positive");
// else 
//     console.log("zero");

// ternary operator
// (/*condition*/)? /*code1*/ : /*code2*/;
// var num3 = 6;
// (num3 % 2 == 0)?
//     console.log("even"):
//     console.log("odd");


// var num2 = -100;
// var a = 2;
// var b = 4;
// var result;
// (num2<=0)?
//     (
//         result = a + b,
//         console.log(result)
//     ):
//     console.log("positive")

//////////////// Loop ///////////////////////

// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

//  //   start  cond  step
// for(var i=0; i<10; i++){
//     console.log("hello world");
// }
//  //   start  cond  step
// for(var i=0; i<10; i++){
//     console.log("hello world");
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }
//  //   start  cond  step
// for(var i=0; i<10; i++){
//     console.log("hello world");
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }

// var i=0;
// for(   ; i<10; ){
//     console.log("hello world");
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// var i=0;
// while( i<10){
//     console.log("hello world");
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// var i=100;
// do{
//     console.log("hello world");
//     i++;
// }while( i<10);

// var i=0;
// do{
//     console.log("hello world");
//     i++;
// }while( i<10);


// var x = prompt("enter your name");
// console.log(x);

// var a = Number(prompt("enter num1"));
// console.log(a);

// var b = Number(prompt("enter num2"));
// console.log(b);

// if(isNaN(a) || isNaN(b)){
//     console.log("invalid input");
// }
// else {
//     console.log(a+b);
// }

// a = a || 0;
// b = b || 0;
// console.log(a+b);
    


// alert("r u ok?");


//  var result = confirm("do u want to delete this product?");
//  if(result){
//     console.log("product deleted successfully");
//  } else {
//     console.log("product isn't deleted");
//  }

 var result = confirm("do u want to delete this product?");
 if(result){
    document.writeln("<h2>product deleted successfully</h2>");
 } else {
    document.writeln("product isn't deleted");
 }



