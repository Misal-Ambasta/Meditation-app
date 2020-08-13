let data = JSON.parse(localStorage.getItem("user")) || []
console.log(data)
window.addEventListener("DOMContentLoaded", ()=>{
    let handleLogin = document.getElementById("handleLogin")
    handleLogin.addEventListener("click", login)

    let signupBtn = document.getElementById("signupBtn")
    signupBtn.addEventListener("click", signUp)   
})


function login(){
    let emailLogin = document.getElementById("emailLogin").value
    let passwordLogin = document.getElementById("passwordLogin").value
    let flag =false
    for(let i=0;i<data.length;i++){
        if(emailLogin==data[i].email && passwordLogin==data[i].password){
            flag= true
            localStorage.setItem("activeUser", JSON.stringify(emailLogin))
        }
    }

    if(flag){

        window.location.href= "dashboard.html"
    }
    else{
        alert("wrong credential")
    }

}

function signUp(){
    let fnameSignup = document.getElementById("fnameSignup").value
    let emailSignup = document.getElementById("emailSignup").value
    let passwordSignup = document.getElementById("passwordSignup").value

    let payload = {
        fname: fnameSignup,
        email: emailSignup,
        password: passwordSignup
    }

    data.push(payload)
    localStorage.setItem("user", JSON.stringify(data))
    alert("Sign Up Successful")

    window.location.href = "index.html"

}

