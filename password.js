let active = JSON.parse(localStorage.getItem("activeUser"))
let data = JSON.parse(localStorage.getItem("user"))
let user = data.find(item=> item.email==active)
console.log(data)
console.log(user)
window.addEventListener("DOMContentLoaded", ()=>{
    let btn = document.getElementById('updateData')
    btn.addEventListener("click",updatePass)
})


function updatePass(){
    let oldPass = document.getElementById("oldpass").value
    let newPass = document.getElementById("newpass").value
    let confirmPass = document.getElementById("cnfpass").value
    
    if(newPass != confirmPass){
        let error = document.getElementById("showerror")
        error.textContent = `Password Don't Match`
    }
    if(user.password==oldPass){
        user.password=newPass
        localStorage.setItem("user", JSON.stringify(data))
        alert("Password Changed")
    }
}
