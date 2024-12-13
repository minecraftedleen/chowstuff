async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/')
    let users = await response.json()
    return users
}



getUsers()
.then((json)=>{
    let data=document.getElementById('data')
    for(let i=0;i<10;i++){
        let info=JSON.stringify(json[i])
        info = JSON.parse(info)
        console.log(info)
        block = document.createElement("div")
        block.setAttribute("id", "bl")
        heading = document.createElement("h2")
        emAdd = document.createElement("h3")
        phNum = document.createElement("h3")
        webSt = document.createElement("h3")
        stLnk = document.createElement("a")
        heading.innerHTML=info.name + " (@" + info.username + ")" 
        emAdd.innerHTML = "Email me at " + info.email
        phNum.innerHTML = "Phone number: " + info.phone
        webSt.innerHTML = "Check out my website!"
        stLnk.href = info.website
        stLnk.innerHTML = info.website
        block.append(heading)
        block.append(emAdd)
        block.append(phNum)
        block.append(webSt)
        block.append(stLnk)
        block.addEventListener("click", function(){
            alert(info.name + " (@" + info.username + ")\n" + "Email me at " + info.email + "\n" +  "Phone number: " + info.phone + "\n" + "Check out my website!\n"  + info.website)
        })
        document.body.append(block)
    }
    
})

document.getElementById("welcome").innerHTML="Welcome, " + prompt("Hello, what is your name?") + "!"


    


