let active = JSON.parse(localStorage.getItem("activeUser"))
console.log(active)
window.addEventListener("DOMContentLoaded", ()=>{
    if(active==null){
        alert("Login first")
        window.location.href = "index.html"
    }
    let res = document.getElementById("res")
    res.textContent = `Logged in as: ${active}`


    let logout = document.getElementById("logout")
    logout.addEventListener("click",()=>{
        localStorage.removeItem("activeUser")
    })
})