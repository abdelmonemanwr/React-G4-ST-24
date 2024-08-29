// function greet(fname){
//     console.log("Hello "+fname);
// }

// greet("ali");

// var a = 10;
// function test(){
//     var a = 20;
//     console.log(a);
// }
// test();
// console.log(a);


// var a = 10;
// function test(){
//     a = 20;
//     console.log(a);
// }
// test();
// console.log(a);

// function test(){
//     for(var i=0; i<3; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// test();


// var x = 22;
// console.log(x);
// var x = 55;
// console.log(x);

////////////////////////////////

// var fname1 = "ali";
// var fname2 = "ola";

// var age1 = 20;
// var age2 = 22;


// var objName = {
    // key:value,
    // key:value,
    // key:value,
// };

// var x = 22;
// x = 55; // set
// console.log(x); // get

// var person = {
//     fname: "ali",
//     age: 22,
//     gender: true, 
//     show: function(){
//         console.log("data is printed");
//     }
// };
// dot notation
// console.log(person.fname); // get
// console.log(person.age);

// person.fname = "mona";   // set
// console.log(person.fname); 

// var arr = ["erede"];

// console.log(s[99]); // undefined
// arr[99] = 1;
// console.log(arr);

// console.log(person.color); // get  // undefined
// person.color = "green"; // set  // add property

// console.log(person);

// console.log(person.show());

// console.log(person);


// var person = {
//     fname: "ali",
//     age: 22,
//     gender: true, 
//     show: function(){
//         console.log("data is printed");
//     },
//     subjects: ["maths", "physics", "chemistry"],
//     address: {
//         city: "cairo",
//         country: "Egypt",
//         street: "abc",
//         code: 123,
//     } 

// };


// console.log(person["fname"])
// console.log(person["address"].city)
// console.log(person["address"].country)
// console.log(person["address"]["code"]);
// console.log(person["address"]["street"]);
// console.log(person["address"]["city"]);


// var myKey = "age";
// console.log(person.myKey);           // undefined
// console.log(person[myKey]);          // age
// console.log(person["myKey"]);        // undefiend

/////////////////////////////////////////////////////////

// console.log(Math);
// var res;
// res = Math.PI; 
// res = Math.sqrt(64); 
// res = Math.pow(2, 5); 
// res = Math.abs(-5); 
// res = Math.sign(0); 
// var arr = [12,134,436554,343,10]
// res = Math.max(arr);
// res = Math.max(12,134,436554,343,10); 
// res = Math.min(12,134,436554,343,10); 
// res = Math.round(3.5)
// res = Math.round(3.5)
// res = Math.floor(3.9)
// res = Math.ceil(3.00000001);
// res = Math.ceil(3.9);
// res = Math.floor(Math.random()*10)+1;
// res = Math.sin(45*Math.PI/180); ;
// console.log(1/Math.sqrt(2));
// console.log(res);

/////////////////////////////////////////////////////////////////

// DOM: Document Object Model

// console.log(document);

////////////// getElementById //////////////
// var element = document.getElementById("btn");
// console.log(element);
// var element = document.getElementById("head1");
// console.log(element);

//////////// getElementsByClassName //////////


// var elements = document.getElementsByClassName("content");
// console.log(elements);

// var elements = document.getElementsByClassName("parent");
// console.log(elements);
// console.log(elements[0]);

// for(var i=0; i<elements.length; i++){
//     console.log(elements[i]);
// }

///////// select from a scope /////////

// var parent = document.getElementsByClassName("parent")[0];
// console.log(parent);

// var par = parent.getElementsByClassName("content")[0]; 
// console.log(par);

//////// getElementsByName /////////


// var elements = document.getElementsByName("username")[0];
// console.log(elements);


//////// getElementsByTagName /////////

// var elements = document.getElementsByTagName("div");
// var elements = document.getElementsByTagName("h1");
// var elements = document.getElementsByTagName("p");
// console.log(elements);


////////////////////////////////////

// div{
//     //
// }

// .test{

// }

// div.test{

// }


// div .test{

// }


///////////// querySelector /////////////

// var element = document.querySelector("#head1");
// console.log(element);
// var element = document.querySelector("#head2");
// console.log(element);
// var element = document.querySelector(".content");
// console.log(element);

///////////// querySelectorAll /////////////

// var elements = document.querySelectorAll(".content")[0];
// console.log(elements);

// var elements = document.querySelectorAll("div.parent")[0];
// console.log(elements);

// var elements = document.querySelectorAll("div.parent .content")[0];
// console.log(elements);



// document.querySelectorAll();

///////////////// properties ////////////////


// console.log(document.body);
// console.log(document.links);


// console.log(document.images);
// console.log(document.forms);


// var parent = document.getElementsByClassName("parent")[0];
// console.log(parent);

// console.log(parent.firstChild)
// console.log(parent.firstElementChild)


// console.log(parent.lastChild)
// console.log(parent.lastElementChild)


// console.log(parent.childNodes);
// console.log(parent.children);

/////////////////////////////////



var p = document.getElementsByClassName("content")[0];
function changeContent(){
    // console.log(p);
    // p.innerText = "<h1>hello world</h1>";
    // p.innerHTML = "<h3>this is men3m greeting u</h3>";
    p.textContent = "hello world";
}

function changeStyle(){
    // console.log("test");
    // p.style.color = "red";
    // p.style.padding = "30px";

    // p.className = "g4";
    // p.className += " g5";

    p.classList.add("g6");
    p.classList.remove("content");
    // p.textContent = "hello world";
    // p.classList.toggle("g6");

    console.log(p);
}

var inp = document.getElementById("input");
function getText(){
    var text = inp.value;
    console.log(text);
}