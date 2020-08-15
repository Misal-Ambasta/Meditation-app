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
    let oldPass = document.getElementById("oldPass").value
    let newPass = document.getElementById("newPass").value
    let confirmPass = document.getElementById("cnfPass").value
    console.log(oldPass,newPass,confirmPass,user.password)
    let error = document.getElementById("showerror")
    if(newPass != confirmPass){
        error.textContent = `Password Didn't Match`
    }
    else{
        let btn = document.getElementById('updateData')
        btn.setAttribute("class", "btn btn-success btn-block rounded-pill my-4 ml-5 pl-3 py-2")

        error.textContent=""
        if(user.password==oldPass){
            user.password=newPass
            localStorage.setItem("user", JSON.stringify(data))
            alert("Password Changed")
            window.location.href = "profile.html"
        }
    }
    
    
}
