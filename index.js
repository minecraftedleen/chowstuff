async function displayText(){
    let response = await fetch('poem.txt')
    let text = await response.text()
    .then((response) => {
        console.log("success")
    })
    .catch((response) =>{
        console.log("error")
    })
    
    console.log(text)
    return text;

    
}

displayText()



