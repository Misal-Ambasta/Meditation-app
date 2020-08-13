let active = JSON.parse(localStorage.getItem("activeUser"))
console.log(active)
window.addEventListener("DOMContentLoaded", ()=>{
    let res = document.getElementById("res")
    res.textContent = `Logged in as: ${active}`

    let logout = document.getElementById("logout")
    logout.addEventListener("click",()=>{
    window.location.href = "index.html"
    })
})