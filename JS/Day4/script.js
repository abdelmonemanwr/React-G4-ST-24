// var link1 = document.links[0];
// console.log(link1);

// console.log(link1.attributes);

// for(var i=0; i<link1.attributes.length; i++){
//     console.log(link1.attributes[i]);
// }


// // get attr
// console.log(link1.getAttribute("class"));
// console.log(link1.getAttribute("href"));
// console.log(link1.getAttribute("target"));

// // set attr
// link1.setAttribute("id", "linked");
// console.log(link1.attributes);
// console.log(link1.getAttribute("id"));
// console.log("------------------");
// link1.setAttribute("id", "new_linked");
// console.log(link1.getAttribute("id"));
// console.log(link1.hasAttribute("id"));
// link1.removeAttribute("id");
// console.log(link1.getAttribute("id"));

// console.log(link1.hasAttribute("id"));

// if(link1.hasAttribute("id")){
//     // remove attr
// } else {
//     // add attr
// }

////////////////////////////////////////////////

// var comment = document.createComment("this is p from js");
// console.log(comment);

// var p = document.createElement("p");
// p.innerHTML = "this is p from js"
// console.log(p);


// var parent = document.getElementById("parent");
// console.log(parent)

// var p = document.createElement("p");
// p.textContent = "this is p from js";
// p.appendChild("this is p from js");  // xxx

// var myText = document.createTextNode("this is p using text node");
// p.appendChild(myText);
// console.log(myText);
// p.textContent = myText;
// p.textContent = myText.data;

// p.id = "p1";
// p.className = "content";
// parent.appendChild(p);
// console.log(p);





// var parent = document.getElementById("parent");

// var p = document.createElement("p");
// var span = document.createElement("span");
// p.innerHTML = "this is p from js";

// p.append("this p from js using append");
// var textNode = document.createTextNode("text");
// p.append(textNode);

// span.innerHTML = "this is span from js";

// var ret1 = parent.append(span);
// console.log(`append: ${ret1}`);
// var ret2 = parent.appendChild(span);
// console.log(`appendChild: ${ret2}`);



// parent.appendChild(p);
// parent.appendChild(span);

// parent.append(p, span);

// parent.appendChild(p, span);


///////////////////////////////////
// var parent = document.getElementById("parent");

// var p1 = document.createElement("p");
// p1.innerHTML = "this is p from js";
// parent.append(p1);

// var p2 = document.createElement("p");
// p2.innerHTML = "p 2";

// p1.before(p2);
// p1.after(p2);

///////////////////////////////////////////

// BOM Object 
// 1- window
// 2- location
// 3- history
// 4- navigator
// 5- screen   (self study)


// var age = 23;
// console.log(window);

// var person = {
//     fname: "abdalmonem",
//     lname: "anwar",
//     dispaly: function(){
//         console.log(this.fname + " " + this.lname);
//     }
// }



// console.log(person.fname);

// console.log(window);
// window.alert("hi");
// alert("hi");


///////////////////////////////////////////

// var openedWindow;
// function openWindow(){
//     // window.open();
//     // window.open("https://www.google.com.eg");
//     // window.open("./about.html");
//     openedWindow = open("./myProfile.html", "", "width=250, height=250");
//     // console.log(openedWindow);
// }
// function closeWindow(){
//     openedWindow.close();
// }
// function moveToWindow(){
//     openedWindow.moveTo(400, 200);
// }
// function moveByWindow(){
//     openedWindow.moveBy(50, 50);
// }
// function resizeToWindow(){
//     openedWindow.resizeTo(450, 450);
// }
// function resizeByWindow(){
//     openedWindow.resizeBy(50, 50);
// }




/////////////////////////////////////



// function cb(){
//     console.log("hello");
// }
// setTimeout(cb, 5000)

// var i=0;
// function cb2() { 
//     console.log(i);
//     i++;
// }
// var curInterval = setInterval(cb2, 1000);

// function cb3(){
//     clearInterval(curInterval);
// }
// setTimeout(cb3, 5000);


// // https://www.shopify.com/users


// console.log(location.href);
// console.log(location.search);
// console.log(location.protocol);
// console.log(location.origin);
// console.log(location.hostname);
// console.log(location.port);

// location.reload();

// location.assign("https://www.google.com.eg");
// location.replace("https://www.google.com.eg");


// location.assign("https://codeforces.com/");

// history.forward();

// location.assign("myProfile.html");

//////////////// Navigator /////////////// 

// console.log(navigator);
// console.log(navigator.geolocation);


// function greet(x){
//     console.log("hello", x);
// }

// greet("g4")

// greet({
//     fname: "ali",
//     lname: "ahmed",
// })

// navigator.geolocation.getCurrentPosition(
//     function (position) {  
//         // console.log("allow")
//         // console.log(position);
//         console.log(position.coords.longitude, position.coords.latitude);
//     },
//     function (e) {
//         // console.log("deny");
//         console.log(e.message);
//     }
// );

////////////////// Events /////////////// 

/**
1- Add Atrribute
2- Attach function
3- Add Event Listener
*/

// var p = document.getElementsByClassName("content")[0];
// function changeContent(){
//     p.innerHTML = "this is changed content";
// }
// function changeStyle(){
//     p.style.color = "red";
//     p.style.padding = "12px";
// }

// var inp = document.getElementById("input");
// function getText(e){
//     // console.log(inp.value);
//     console.log(e.target.value);
// }

///////////////////////////////////


// var p = document.getElementsByClassName("content")[0];
// function changeContent(){
//     console.log("btn is clicked")
//     p.innerHTML = "this is changed content";
// }
// function changeStyle(){
//     p.style.color = "red";
//     p.style.padding = "12px";
// }

// var btn = document.getElementById("btn");

// btn.onclick = changeStyle;
// btn.onclick = changeContent;

// var person = {
//     fname: "ali"
// }

// person.fname = "abdalmonem";
// person.fname = "sara";
// console.log(person);



///////////////////// addEventListener /////////////////////

// var p = document.getElementsByClassName("content")[0];
// function changeContent(e){
//     // console.log("btn is clicked")
//     console.log(e.target);
//     p.innerHTML = "this is changed content";
// }
// function changeStyle(color){
//     // p.style.color = color;
//     p.style.color = "red";
//     p.style.padding = "20px";
// }

// var btn = document.getElementById("btn");

// btn.addEventListener('click', changeContent);
// btn.addEventListener('click', changeStyle);



// btn.addEventListener('click', function (){
//     changeContent();
//     changeStyle();
// })


// btn.addEventListener('click', function(){
//     changeStyle("red")
// });

// btn.addEventListener('click', function(){
//     changeStyle("red")
//     changeContent();
// });

// btn.addEventListener('click', changeContent);
// btn.addEventListener('click', changeStyle);

// setTimeout(() => {
//     btn.removeEventListener('click', changeStyle);
// }, 3000);






// function Test(e){
//     console.log(e);
//     console.log("btn clicked");
// }




////////////////////////////////////////////////////////


// function change(){
//     changeContent();
//     changeStyle();
// }
// btn.onclick = change;


// btn.onclick  = changeContent;

// function changeStyleParam(e){
//     console.log(e);
//     changeStyle("red");
// }
// btn.onclick = changeStyleParam;


// function login(e){
//     console.log("test");
//     e.preventDefault();
// }

// function first(e){
//     console.log("first");
//     // e.stopPropagation();
// }

// function second(e){
//     e.stopPropagation();   
//     console.log("second");
// }

// function third(e){
//     console.log("third");
//     // e.stopPropagation();
// }