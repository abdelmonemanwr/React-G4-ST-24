var getUsers = document.getElementById("btn");
var tbody = document.getElementById("users");


getUsers.addEventListener('click', function(){
    tbody.innerHTML="";
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send("");

    xhr.onreadystatechange = function (){
        if(xhr.readyState==4 && xhr.status==200){
            var users = JSON.parse(xhr.response);
            console.log(users); 
            for(var i=0; i<users.length; i++){
                var id = document.createElement("td");
                id.textContent = users[i].id;
                
                var name = document.createElement("td");
                name.textContent = users[i].name;
                
                var username = document.createElement("td");
                username.textContent = users[i].username;
                
                var email = document.createElement("td");
                email.textContent = users[i].email;

                // console.log(id, name, username, email);
                
                var row = document.createElement("tr");
                row.append(id, name, username, email);
                tbody.append(row);
            }

            // console.log(row);
        }    
    };
});