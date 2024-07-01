// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

let newUsers = [];

let newFetch = fetch ("https://jsonplaceholder.typicode.com/users");

newFetch.then(Response => Response.json())
        .then(data => 
            {newUsers = data.map((data)=> {return data.name})
            console.log(newUsers)}
        );
    

console.log(newUsers)


