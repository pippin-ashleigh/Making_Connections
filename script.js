function editProfile() {
    var editProfile = document.querySelector("#jane")
    if (editProfile.innerText == "Jane Doe") {
        editProfile.innerText = "Ejan Edo"
    } else { 
        editProfile.innerText = "Jane Doe" 
    }
        

}

function bye(id) {
    var element = document.querySelector(`#${id}`)
    element.remove();
}

function connectUp(id) {
    var num2 = document.querySelector("#num2")
    console.log(num2)
    num2.innerText++
    bye(id)
}