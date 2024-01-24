let email = document.querySelector("#email")
let password = document.querySelector("#password")

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

let loginBtn = document.querySelector("#submit")


loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if (email.value==="" || password.value==="") {
        alert("plz Enter you full data")
    } else {
        if (getEmail && getEmail.trim()=== email.value && getPassword && getPassword.trim()===password.value ) {

            setTimeout(() => {
                window.location = "index.html"
            }, 1500);
            
        }else{
            alert("Wrong Email or Password , plz try again")
        }
        
    }
})