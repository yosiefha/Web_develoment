window.onload = function () {
    document.getElementById('btn').addEventListener('click', function () {
    document.getElementById('address').innerHTML = null
    document.getElementById('posts').innerHTML = null
    document.getElementById('comment').innerHTML = null
       
    renderEmp()
        

    });

}
async function renderEmp() {
    let result = await fetch('https://jsonplaceholder.typicode.com/users')
    let temp = await result.json()
    const TempDiv = document.getElementById('address');
    const input = document.getElementById('input').value;
    let temps;

    for (let i = 0; i < temp.length; i++) {
        if (temp[i].id == input) {
            temps = temp[i]
        }
        else{
            document.getElementById('address').innerHTML= `<p> ID not found</P> `

        }
    }

    
    let x = `           
                <p> Name:${temps.name}</p>
                <p >Email : ${temps.email}</p>
                <p> Adress: ${temps.address.city + " " + temps.address.street + " " + temps.address.zipcode}</p>
                <p >Current Location: ${temps.address.geo.lng + ' ' + temps.address.geo.lat}</p>
                <button id="btn2" onclick="posts()">see posts</button><br><br>         
            
     `

   
    document.getElementById('address').innerHTML=x;

}



let id;
async function posts() {

    const TempDiv = document.getElementById('posts');
    const input = document.getElementById('input').value;

    let result1 = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + input)
    let post = await result1.json();
   
    for (let i = 0; i < post.length; i++) {
       

        let y = `
    <p><span>Title:</span> ${post[i].title}</p><br>
    <p> ${post[i].body}</p>
    <button id="btn3" onclick="comment(${post[i].id})">comment</button><br><br>
     <hr>
     `
        
        document.getElementById('posts').innerHTML+=y;

    }

}

async function comment(id) {


    document.getElementById('comment').innerHTML = null
    const TempDiv = document.getElementById('comment');
    

    let result1 = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    let comment = await result1.json()

    for (let i = 0; i < comment.length; i++) {
        let y = `
  
        <p> <span>Name</span>: ${comment[i].name}</p><br>
        <p>  <span>Email</span>: ${comment[i].email}</p>
        <p>  <span>Comment</span>: ${comment[i].body}</p>
        <hr>
     
`

        let newDiv = document.createElement('div');
        newDiv.innerHTML = y;
        TempDiv.appendChild(newDiv);

    }
}

async function comment(id) {


    document.getElementById('comment').innerHTML = null
    const TempDiv = document.getElementById('comment');
    

    let result1 = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    let comment = await result1.json()

    for (let i = 0; i < comment.length; i++) {
        let y = `
  
        <p> <span>Name</span>: ${comment[i].name}</p><br>
        <p>  <span>Email</span>: ${comment[i].email}</p>
        <p>  <span>Comment</span>: ${comment[i].body}</p>
        <hr>
     
`

        let newDiv = document.createElement('div');
        newDiv.innerHTML = y;
        TempDiv.appendChild(newDiv);

    }
}