let active = JSON.parse(localStorage.getItem("activeUser"))
let data = JSON.parse(localStorage.getItem("user"))
let user = data.find(item=> item.email==active)
console.log(user)
window.addEventListener("DOMContentLoaded", ()=>{
    let fname = document.getElementById("updateName")
    let emailId = document.getElementById("updateEmail")
    console.log(user.fname,user.email)
    fname.value = user.fname
    emailId.value = user.email
    let updateDetail = document.getElementById("updateDetail")
    updateDetail.addEventListener("click",update)
})

function update(){
    let fname = document.getElementById("updateName").value
    let emailId = document.getElementById("updateEmail").value
    user.fname = fname
    user.email = emailId
    active = emailId
    localStorage.setItem("user",JSON.stringify(data))
    localStorage.setItem("activeUser", JSON.stringify(active))
    window.location.href = "account.html"
}
